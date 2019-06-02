var bankBalance=303.91;
const spendingThreshold=200;
const TaxRate=0.08;
const phoneprice=99.99;
const accessoryPrice=9.99;
var NoOfPhones=0;
var NoofAccessory=0;
function TaxCalculated(NoOfPhones,NoofAccessory){
   return (NoOfPhones*phoneprice+NoofAccessory *accessoryPrice)*TaxRate;

}

function totalPurchaseCalculated(NoofPhones,NoofAccessory){

    var Tax=TaxCalculated(NoofPhones,NoofAccessory);
    return (NoOfPhones*phoneprice+NoofAccessory *accessoryPrice)+Tax;
}

var totalPurchase= totalPurchaseCalculated(NoOfPhones,NoofAccessory);
while(totalPurchase<bankBalance){
    console.log("entered while");
NoOfPhones++;
bankBalance=bankBalance-phoneprice;
console.log("afterPhone"+bankBalance);
console.log("spendingThreshold"+spendingThreshold);
if(bankBalance!=spendingThreshold){

    NoofAccessory++;
    bankBalance=bankBalance-accessoryPrice;
    console.log("afteraccessory"+bankBalance);
}
else{
    console.log("threshhold reached");
}
var totalPurchase= totalPurchaseCalculated(NoOfPhones,NoofAccessory);
console.log("totalPurchase while"+totalPurchase);
}



console.log("NoOfPhones"+NoOfPhones);
console.log("NoofAccessory"+NoofAccessory);
console.log("totalPurchase"+totalPurchase);






















