//*************************************************
//various simple numeric functions
//*************************************************
function powerTransform(x){
    //transform slider value into an Int using 10^(x/10000000000)
    return Math.round( Math.pow(10, (x/10000000000)) )
}

function roundToFive(x){
    return Math.round(x * 100000) / 100000;
}

//*************************************************
//equations from the paper
//*************************************************
function makeMseFunction(d,k,Dur,t) {
    //takes d,k,Dur variables and creates a function to calculate mse for given t
    return function(t) {
        var numerator = 2 * d * (1 - 1/k);
        var denominator = k * Math.pow((1 + d/k),2);
        var equalTime = (Math.pow(Dur,2) * t * (t+1))/(12*(t-1))
        return (numerator/denominator)/equalTime;
    };
}

function makeEqualL095Function(d,k,Dur,t){
    //takes d,k,Dur variables and creates a function to calculate L_0.95 for given t
        //this assumes that time points are equally spaced!
    return function(t){
        var equalTime = (Math.pow(Dur,2) * t * (t+1))/(12*(t-1));
        var radicand = (32 * k)/(d * equalTime);
        return Math.pow(radicand , 0.5);
    };
}

function monetaryCostFun(d,Dur,t,salary,peopleDurHours,peoplePrepHours,extract,pcr,quality,library,seqCosts1,seqCosts2,seqCosts3,seqReads1,seqReads2,seqReads3) {
    var peopleCost = (Dur * peopleDurHours + peoplePrepHours) * salary;
    var samplesCost = (t+1) * (extract + pcr + quality + library);
    if ((t+1) * d < seqReads1+1) {
        var sequencingCost = seqCosts1;
    } else if ((t+1) * d < seqReads2+1) {
        var sequencingCost = seqCosts2;
    } else if ((t+1) * d < seqReads3+1) {
        var sequencingCost = seqCosts3;
    } else {
        throw "(t+1)*d > seqReads3";
    }
    return peopleCost + samplesCost + sequencingCost;
}

function totalCostFun(moneyCost, mse, alpha, beta){
    var addend = alpha * Math.pow(mse, beta);
    return moneyCost + addend;
}
//*************************************************
//functions that take user input 
//*************************************************
function changeD(value) {
    //controls the D slider and starts displaying the output
    document.getElementById('valD').innerHTML = powerTransform(value);
    main();
}

function changeK(value) {
    //controls the K slider and starts displaying the output
    document.getElementById('valK').innerHTML = powerTransform(value);
    main();
}

function changeDur(value) {
    //controls the Dur slider and starts displaying the output (both pages)
    document.getElementById('valDur').innerHTML = value;
    main();
}

function changeT(value) {
    //controls the T slider and starts displaying the output (optimization page)
    document.getElementById('valT').innerHTML = value;
    main();
}

//*************************************************
//functions that change things displayed on the page
//*************************************************
function updateCosts() {
    //allows user to recalculate after having changed a cost value
    main();
}

function resetCosts() {
    //resets the user input to all of the textbox fields
        //okay, this is SUPER GHETTO. but it works...
    document.getElementById("salary").value = "20";
    document.getElementById("peopleDurHours").value = "1";
    document.getElementById("peoplePrepHours").value = "5";
    document.getElementById("extract").value = "50";
    document.getElementById("pcr").value = "10";
    document.getElementById("quality").value = "50";
    document.getElementById("library").value = "100";
    document.getElementById("seqCosts1").value = "1800";
    document.getElementById("seqCosts2").value = "2600";
    document.getElementById("seqCosts3").value = "6000";
    document.getElementById("seqReads1").value = "35000000";
    document.getElementById("seqReads2").value = "260000000";
    document.getElementById("seqReads3").value = "800000000";
    document.getElementById("alpha").value = "10000000000";
    document.getElementById("beta").value = "1";
    main();
}

function main(){
    //get the D, K, Dur, T, MSE values currently displayed in the table
    var dValue = document.getElementById('valD').innerHTML *1;
    var kValue = document.getElementById('valK').innerHTML *1;
    var durValue = document.getElementById('valDur').innerHTML *1;
    var tValue = document.getElementById('valT').innerHTML *1;

    //get the cost estimates currently inputted in the textbox fields
    var salaryValue = document.getElementById('salary').value *1;
    var ppldurhoursValue = document.getElementById('peopleDurHours').value *1;
    var pplprephoursValue = document.getElementById('peoplePrepHours').value *1;

    var extractValue = document.getElementById('extract').value *1;
    var pcrValue = document.getElementById('pcr').value *1;
    var qualityValue = document.getElementById('quality').value *1;
    var libraryValue = document.getElementById('library').value *1;

    var seqCosts1Value = document.getElementById('seqCosts1').value *1;
    var seqCosts2Value = document.getElementById('seqCosts2').value *1;
    var seqCosts3Value = document.getElementById('seqCosts3').value *1;
    var seqReads1Value = document.getElementById('seqReads1').value *1;
    var seqReads2Value = document.getElementById('seqReads2').value *1;
    var seqReads3Value = document.getElementById('seqReads3').value *1;

    var alphaValue = document.getElementById('alpha').value *1;
    var betaValue = document.getElementById('beta').value *1;

    var ciFUN = makeEqualL095Function(dValue,kValue,durValue);
    var L095 = ciFUN(tValue);
    document.getElementById('CI').innerHTML = roundToFive(L095);

    try {
        var notAnumber;
        var monetaryCost = monetaryCostFun(dValue,durValue,tValue,salaryValue,ppldurhoursValue,pplprephoursValue,extractValue,pcrValue,qualityValue,libraryValue,
            seqCosts1Value,seqCosts2Value,seqCosts3Value,seqReads1Value,seqReads2Value,seqReads3Value);
        //check to see that this monetary cost is actually a number
        if (isNaN(monetaryCost)) notAnumber = 1;
        var msefun = makeMseFunction(dValue,kValue,durValue);
        var mseValue = msefun(tValue); 
        var totalCost = Math.round(totalCostFun(monetaryCost, mseValue, alphaValue, betaValue))  
            + " arbitrary cost units";
        monetaryCost = "$" + monetaryCost;
    } catch (error) {
        var monetaryCost = "<font color=#cc2939>Amount of sequencing proposed surpasses what you've told me about your cost estimates! Consider using a sequencing method that yields more reads per lane.</font>";
        var totalCost = "";
    }
    //error message in case a non-number was entered for the custom costs
    if (notAnumber == 1) {
        var monetaryCost = "<font color=#cc2939>Looks like one of the custom costs you entered is actually not a number.</font>";
        var totalCost = "";
    }

    document.getElementById('overallCost').innerHTML = totalCost;
    document.getElementById('moneyCost').innerHTML = monetaryCost;

    //print the footnotes to the table
    document.getElementById("tableFootnotes").innerHTML = "<p class='footnote'>*Our model does not consider additional sources of experimental error (e.g. sequencing error). Therefore, this confidence interval should be interpretted as the upper limit of the attainable precision.<br><sup>&dagger;</sup>Calculated as per Equation S16a of Matuszewski <i>et al.</i> 2016.<br><sup>&Dagger;</sup>Calculated as per Equation S16a but with &alpha;=0 so that costs are only monetary.</p>";
}


///////////////////////////////////////////
//Everything below is used to put a timestamp at the bottom of the page
//I stole this from: http://www.chami.com/tips/internet/041198I.html
///////////////////////////////////////////
// format date as dd-mmm-yy
function date_ddmmmyy(date)
{
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getYear();

  // handle different year values 
  // returned by IE and NS in 
  // the year 2000.
  if(y >= 2000)
  {
    y -= 2000;
  }
  if(y >= 100)
  {
    y -= 100;
  }

  // could use splitString() here 
  // but the following method is 
  // more compatible
  var mmm = 
    ( 1==m)?'Jan':( 2==m)?'Feb':(3==m)?'Mar':
    ( 4==m)?'Apr':( 5==m)?'May':(6==m)?'Jun':
    ( 7==m)?'Jul':( 8==m)?'Aug':(9==m)?'Sep':
    (10==m)?'Oct':(11==m)?'Nov':'Dec';

  return "" +
    (d<10?"0"+d:d) + "-" +
    mmm + "-" +
    (y<10?"0"+y:y);
}


//
// get last modified date of the 
// current document.
//
function date_lastmodified()
{
  var lmd = document.lastModified;
  var s   = "Unknown";
  var d1;

  // check if we have a valid date
  // before proceeding
  if(0 != (d1=Date.parse(lmd)))
  {
    s = "" + date_ddmmmyy(new Date(d1));
  }

  return s;
}