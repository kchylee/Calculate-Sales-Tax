//Provided data
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
//Provided data

//Calculate TOTAL SALES and TOTAL TAX PER COMPANY

function calculateSalesTax(salesData, taxRates){
var comp = {};

for (obj in salesData){
  if (comp[salesData[obj].name]){ //IF company name already exists, add totalSales and totaltaxes to existing values
    comp[salesData[obj].name].totalSales += salesData[obj].sales.reduce(function (a, b) {
  return a + b;
}, 0);//Use array.reduce to obtain the sum of totalSales array
    comp[salesData[obj].name].totalTaxes += taxRates[salesData[obj].province] * salesData[obj].sales.reduce(function (a, b) {
  return a + b;
}, 0);
  }else{ //IF company name not yet exists, create totalSales and totalTaxes and assign value
    comp[salesData[obj].name] = {};
    comp[salesData[obj].name].totalSales = salesData[obj].sales.reduce(function (a, b) {
  return a + b;
}, 0);
    comp[salesData[obj].name].totalTaxes = taxRates[salesData[obj].province] * comp[salesData[obj].name].totalSales;
  }
}
return comp;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);



