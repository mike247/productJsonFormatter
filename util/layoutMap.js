// This is a map object I use to convert the flat data into a more structured format
// I assumed all the fields were present in the provided test case
// but to add more you just need to modify this object

const layout = {
  id: 'productid',
  name: 'name',
  baseprice: 'baseprice',
  pricing: [
    {
      pricecategoryid: 'pricecategoryid',
      pricecategory: 'pricecategory',
      productprice: 'productprice',
      discount: 'discount',
      discountpercentage: 'discountpercentage',
      campaign: {
        id: 'campaignid',
        name: 'campaignname',
        until: 'campaignuntil',
      },
    },
  ],
};

const arrayFields = ['pricing'];

module.exports.dataLayout = layout;
module.exports.arrayFields = arrayFields;
