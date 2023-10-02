let totalBill;
let custominput;
let nopeople;
let tipAmount;

function totalPayableBill(){
    totalBill=document.getElementById('bill').value;
    result();
    
}
function customtip(value){
    custominput=value;
    result();
}

function tip5(){
    tipAmount=5;
    result();
}

function tip10(){
    tipAmount=10;
    result();
}
function tip15(){
    tipAmount=15;
    result();
}
function tip25(){
    tipAmount=25;
    result();
}
function tip50(){
    tipAmount=50;
    result();
}
function numberOfPeople(){
    nopeople=document.getElementById('numpeople').value;
    result();
}



function result(){
    let result=0;
    let TipAmountPerperson =0;
    let TotalBillPerPerson =0;
    if((totalBill)&&(nopeople)&&((tipAmount)||(custominput))){
        
        if(tipAmount){
            tipAmount = (totalBill/100)*tipAmount;
            TipAmountPerperson= tipAmount/nopeople;
            TotalBillPerPerson = TipAmountPerperson+(totalBill/nopeople);
        }
        else{
            custominput = (totalBill/100)*custominput;
             TipAmountPerperson= custominput/nopeople;
             TotalBillPerPerson = TipAmountPerperson+(totalBill/nopeople); 
        }
    }
    
    console.log("TipAmountPerperson",TipAmountPerperson);
    console.log("TotalBillPerPerson",TotalBillPerPerson);

    document.getElementById("tipPR").innerHTML="$"+TipAmountPerperson.toFixed(2);
    document.getElementById("tPR").innerHTML="$"+TotalBillPerPerson.toFixed(2);

    console.log("Result",result);
}