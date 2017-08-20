let rows = [{
    "clientid": 1,
    "productid": 1000,
    "name": "Season Pass",
    "pricecategoryid": 1,
    "pricecategory": "Adult",
    "productprice": "$999.00",
    "baseprice": "$999.00",
    "discount": "$0.00",
    "discountpercentage": "0.00",
    "campaignid": null,
    "campaignname": null,
    "campaignuntil": null
}, {
    "clientid": 1,
    "productid": 1000,
    "name": "Season Pass",
    "pricecategoryid": 2,
    "pricecategory": "Youth",
    "productprice": "$699.00",
    "baseprice": "$999.00",
    "discount": "$300.00",
    "discountpercentage": "0.00",
    "campaignid": null,
    "campaignname": null,
    "campaignuntil": null
}, {
    "clientid": 1,
    "productid": 1001,
    "name": "Super Pass",
    "pricecategoryid": 1,
    "pricecategory": "Adult",
    "productprice": "$515.00",
    "baseprice": "$515.00",
    "discount": "$0.00",
    "discountpercentage": "0.00",
    "campaignid": null,
    "campaignname": null,
    "campaignuntil": null
}];






//PUT SOME CODE IN HERE THAT PROCESSES THE ROWS DATA ABOVE AND THEN CONSOLE LOGs THE DESIRED OUTPUT JSON (SEE BELOW THE DESIRED OUTPUT)


/*

Desired output: an array of products, each containing a pricing array
 [{
    "id": 1000,
    "name": "Season Pass",
    "baseprice": "$999.00",
    "pricing": [{
        "pricecategoryid": 1,
        "pricecategory": "Adult",
        "productprice": "$999.00",
        "discount": "$0.00",
        "discountpercentage": "0.00",
        "campaign": {"id": null, "name": null, "until": null}
    }, {
        "pricecategoryid": 2,
        "pricecategory": "Youth",
        "productprice": "$699.00",
        "discount": "$300.00",
        "discountpercentage": "0.00",
        "campaign": {"id": null, "name": null, "until": null}
    }]
}, {
    "id": 1001,
    "name": "Super Pass",
    "baseprice": "$515.00",
    "pricing": [{
        "pricecategoryid": 1,
        "pricecategory": "Adult",
        "productprice": "$515.00",
        "discount": "$0.00",
        "discountpercentage": "0.00",
        "campaign": {"id": null, "name": null, "until": null}
    }]
}]
*/