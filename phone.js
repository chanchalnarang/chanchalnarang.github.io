var bankBalance=prompt("what is your bank balance");
const spendingThreshold=prompt("what is your spending threshhold");
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

var a=document.querySelector('#TotalPhone');
a.textContent="Total Phones :"+ NoOfPhones;

var b=document.querySelector('#TotalAccessory');
b.textContent="Total Accessories :"+ NoofAccessory;

var c=document.querySelector('#Totalpurchase');
c.textContent="Total Purchase :"+ totalPurchase.toFixed(2);
var d=document.querySelector('#BankBalance');
d.textContent="Bank balance :"+ bankBalance.toFixed(2);






















