const testData = require('./data/rows.js');
const { dataLayout, arrayFields } = require('./util/layoutMap.js');
const constants = require('./util/constants.js');
const util = require('util');

// Take our layout and a product and convert the product to that format
function formatJsonToLayout(layout, data) {
  const formattedJson = {};
  Object.keys(layout).forEach((key) => {
    if (Array.isArray(layout[key])) {
      formattedJson[key] = layout[key].map(subLayout => formatJsonToLayout(subLayout, data));
    } else if ((typeof layout[key] === 'object') && (layout[key] !== null)) {
      formattedJson[key] = formatJsonToLayout(layout[key], data);
    } else {
      formattedJson[key] = data[layout[key]];
    }
  });
  return formattedJson;
}

// We have one of more arrays in the product data, we need to not wipe these with Object.assign
function productArrayJoin(productA1, productA2) {
  const joinedObject = Object.assign({}, productA1);
  arrayFields.forEach((key) => {
    joinedObject[key] = joinedObject[key].concat(productA2[key]);
  });
  return joinedObject;
}

// Loop through the products
function processItems(rows) {
  const productMap = {};
  rows.forEach((product) => {
    const key = product[constants.productJoinField];
    const formattedProduct = formatJsonToLayout(dataLayout, product);
    if (key in productMap) {
      productMap[key] = productArrayJoin(formattedProduct, productMap[key]);
    } else {
      productMap[key] = formattedProduct;
    }
  });
  // We are loging the outpout here but its probably more useful to return something
  console.log(util.inspect(Object.values(productMap), false, null));
}

processItems(testData);

