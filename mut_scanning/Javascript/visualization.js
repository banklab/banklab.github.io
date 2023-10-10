//plot is created using Google Charts, so load the package data
google.charts.load('current', {packages: ['corechart', 'line', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

//*************************************************
//various simple numeric functions
//*************************************************
function roundToTen(x){
    return Math.round(x * 10000000000) / 10000000000;
}

function sigFig6(val) {
    //returns a number in scientific notation with 6 significant figures 
    return val.toExponential(5);
}

function add(a, b) {
    //I need to make an add function to get the sum of all values in an array
    return a + b;
}

function multiplyBy(a, x){
    //I need to make a multiplication function to get all product values in an array
    return function(x){
        return a * x;
    }
}

function sumOfSquares(array){
    var meanArray = array.reduce(add) / array.length;
    var sumSquares = 0;
    for (var i=0; i<array.length; i++){
        sumSquares += Math.pow((array[i]-meanArray), 2);
    }
    return sumSquares
}

//*************************************************
//equations from the paper
//*************************************************
function unequalMSE(d,k,t) {
    //takes d,k variables and t array to return the MSE for unequally spaced time points
    var numerator = (2 * d * (1 - 1/k));
    var denominator = (k * Math.pow((1 + d/k), 2));
    var sumSquares = sumOfSquares(t);
    return (numerator/denominator)/sumSquares;
}

function unequalL095(d,k,t){
    //takes d,k variables and t array to return the L_0.95 for unequally spaced time points
    var sumSquares = sumOfSquares(t);
    var radicand = (32 * k)/(d * sumSquares);
    return Math.pow(radicand , 0.5);
}

function twoTimePtRepMSE(d,k,Dur,t){
    //takes d,k,Dur,t variables and returns MSE from t/2 2-time-pt replicates
        //from eqn 16 of MatuszewskiEtAl_ExpDesign_Genetics_v2, except 2 replaced with 1
    if (t%2==1) return Number.NaN;    //do not calculate value for odd values of t
    var numerator = 1 * (2 * d * (1 - 1/k));
    var denominator = Math.round(t/2) * (k * Math.pow((1 + d/k), 2));
    var twoTime = Math.pow(Dur,2) / 2;
    return (numerator/denominator)/twoTime;
}

//*************************************************
//functions that take user input 
//*************************************************
//updates the unequally spaced time points tab when user clicks "Calculate!" button
function updateUnequal() {
    //get the D, K, Dur values currently displayed in the table
    var dValue = document.getElementById('valD').innerHTML;
    var kValue = document.getElementById('valK').innerHTML;
    var durValue = document.getElementById('valDur').innerHTML;

    if (dValue && kValue && durValue) {
        //update the info on the second tab
        secondTab(dValue, kValue, durValue);
    }
}

//*************************************************
//functions that yield changes to the site
//*************************************************
//the closest thing that I have to a main function
    //takes user input and sends it off to other functions
function main() {
    //get the D, K, and Dur values currently displayed in the table
    var dValue = document.getElementById('valD').innerHTML;
    var kValue = document.getElementById('valK').innerHTML;
    var durValue = document.getElementById('valDur').innerHTML;
    
    if (dValue && kValue && durValue) {
        //update the info on each of the two tabs
        firstTab(dValue, kValue, durValue);
        secondTab(dValue, kValue, durValue);
    }
}

//update the equal time points (first) tab on the "visualize key results page"
function firstTab(d,k,Dur){
    //calculate the MSE, MAE, etc. values and store in arrays (64bit float)
    var mse = makeMseFunction(d, k, Dur);
    var L095 = makeEqualL095Function(d, k, Dur);

    var tArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var mseArray = tArray.map(mse);
    var maeArray = mseArray.map(Math.sqrt);
    var L095Array = tArray.map(L095);

    //create 2dimensional array of t, MSE for plotting
    var tVSmseArray = [];
    for (var i = 0; i < tArray.length; i++){
        tVSmseArray.push([tArray[i], mseArray[i]])
    }

    //create google data table for plotting
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'MSE');
    data.addRows(tVSmseArray);

    //customize plot options
    var options = {
        width: '100%',
        height: '100%',
        legend:'none',
        hAxis: {
            title: 'Number of samples taken (\u03C4)',
        },
        vAxis: {
            title: 'Mean squared error',
            //format: 'scientific'
            //prevents y-axis values from getting so small that it's just 0.00000...
        },
        series: {
            0: { color: '#0088cc' }
          },
        enableInteractivity : false
        //this prevents mouseover showing the values, which is dumb since all the values are 0
    };

    //print the plot
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    //round 64bit floats to have 6 numbers after the decimal place
    mseArray = mseArray.map(roundToTen);
    maeArray = maeArray.map(roundToTen);
    L095Array = L095Array.map(roundToTen);

    //create the table of values
    var myTable= "<table><tr><th># Samples Taken (&tau;)</th>";
        myTable+= "<th>Mean Squared Error*</th>";
        myTable+= "<th>Mean Absolute Error<sup>&dagger;</sup></th>";
        myTable+= "<th>Confidence Interval<br>(L<sub>0.95</sub>)<sup>&Dagger;</sup></th></tr>";

    //display just t values [2,3,4,5,6,8,10] in the table
    //var tIndex = [0, 1, 2, 3, 4, 6, 8];

    for (var i=0; i<11; i++) {
        myTable+="<tr><td>" + tArray[i] + "</td>";
        myTable+="<td>" + mseArray[i] + "</td>";
        myTable+="<td>" + maeArray[i] + "</td>";
        myTable+="<td>" + L095Array[i] + "</td></tr>";
    }  
    myTable+="</table>";
    
    //print the table
    document.getElementById("tablePrintEqual").innerHTML = myTable;
    //print the footnotes to the table
    document.getElementById("tableFootnotes_equal").innerHTML = "<p class='footnote'>*Calculated as per Equation 12 of Matuszewski <i>et al.</i> 2016.<br><sup>&dagger;</sup>Calculated as the square root of the mean squared error (Equation 13).<br><sup>&Dagger;</sup>Calculated as 8&radic;(6K/(D(T<sup>3</sup>-T))) from Equation 15.</p>";
}

//update the unequal time points (second) tab on the "Visualize key results" page
function secondTab(d,k,Dur){
    //get the user defined number of time points
    var t = document.getElementById("numTimePoints");
    var numTimePts = t.options[t.selectedIndex].text;
    //...and their unequal spacing
    var timeCSV = document.getElementById("unequalSpacing").value;
    var timePoints = timeCSV.split(',');
    timePoints = timePoints.map(Number);

    //check that the timeCSV is properly formatted
        //the right number of time points
    if (timePoints.length != numTimePts){
        document.getElementById("tablePrintUnequal").innerHTML = "Please enter <font size='5' color=#cc2939>"+ numTimePts +"</font> comma seperated numbers whose values are &le;1.";
        document.getElementById("tableUnequalL95").innerHTML = " ";

        //create an EMPTY bar chart
        var data = google.visualization.arrayToDataTable([
            ['Method', 'MSE', { role: 'style' }],
            ['2-time-point replicates', 0, '#0088cc'],
            ['Unequal time points', 0, '#0088cc'],
            ['Equal time points', 0, '#0088cc' ]
        ]);

        var options = {
            width: '100%',
            height: '100%',
            legend:'none',
            hAxis: {
                title: 'Method of collecting time samples',
            },
            vAxis: {
                title: 'Mean squared error'
            },
            enableInteractivity : false
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('bar_plot'));
        chart.draw(data, options);

        return;
    }
        //all values in the array are numeric and have values /leq 1 (should be a fraction of duration)
    if (isNaN(timePoints.reduce(add)) ||
        timePoints.reduce(add) > timePoints.length){
        document.getElementById("tablePrintUnequal").innerHTML = "Please enter "+ numTimePts +" comma seperated <font size='4' color=#cc2939>numbers whose values are &le;1</font>.";
        document.getElementById("tableUnequalL95").innerHTML = " ";

        //create an EMPTY bar chart
        var data = google.visualization.arrayToDataTable([
            ['Method', 'MSE', { role: 'style' }],
            ['2-time-point replicates', 0, '#0088cc'],
            ['Unequal time points', 0, '#0088cc'],
            ['Equal time points', 0, '#0088cc' ]
        ]);

        var options = {
            width: '100%',
            height: '100%',
            legend:'none',
            hAxis: {
                title: 'Method of collecting time samples',
            },
            vAxis: {
                title: 'Mean squared error'
            },
            enableInteractivity : false
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('bar_plot'));
        chart.draw(data, options);
        
        return;
    }

    //calculate the mse value under numTimePts/2 2-time-point experiment replicates
    var twoTimeMSE = twoTimePtRepMSE(d*1, k*1, Dur*1, numTimePts*1);
    
    //calculate the mse value under unequal time points
        //update timePoints vector so that it corresponds with inputted duration
    var multiplyByDuration = multiplyBy(Dur);
    timePoints = timePoints.map(multiplyByDuration);
        //use updated timePoints vector to calculate unequal MSE, L095
    var unequalVAL = unequalMSE(d, k, timePoints);
    var L095 = unequalL095(d, k, timePoints)

    //calculate the mse value under equal time points
        //multiplying by 1 ensures that values are integers (no strings!)
    var mse = makeMseFunction(d*1, k*1, Dur*1);
    var equalVAL = mse(numTimePts*1);

    //create the table of values
    var myTable=  "<table><tr><th>Mean Squared Error<br>(<sup>&tau;</sup>\u2044<sub>2</sub> two-time-pt replicates)*</th>";
        myTable+= "<th>Mean Squared Error<br>(Unequally spaced)<sup>&dagger;</sup></th>";
        myTable+= "<th>Mean Squared Error<br>(Equally spaced)<sup>&Dagger;</sup></th>";

    //input the values in the table
    myTable+="<tr><td class='output'>" + roundToTen(twoTimeMSE) + "</td>";
    myTable+="<td class='output'>" + roundToTen(unequalVAL) + "</td>";
    myTable+="<td class='output'>" + roundToTen(equalVAL) + "</td></tr>";

    //print the table
    document.getElementById("tablePrintUnequal").innerHTML = myTable;


    //create the bar chart
    var data = google.visualization.arrayToDataTable([
        ['Method', 'MSE', { role: 'style' }],
        ['2-time-point replicates', twoTimeMSE, '#0088cc'],
        ['Unequal time points', unequalVAL, '#0088cc'],
        ['Equal time points', equalVAL, '#0088cc' ]
    ]);

    var options = {
        width: '100%',
        height: '100%',
        legend:'none',
        hAxis: {
            title: 'Method of collecting time samples',
        },
        vAxis: {
            title: 'Mean squared error'
        },
        enableInteractivity : false
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('bar_plot'));
    chart.draw(data, options);

    //make a table for the 95% confidence interval with unequal time points
    var myTable2= "<table><tr><th class='wide'>Confidence Interval (L<sub>0.95</sub>)<br>for Unequally Spaced Time Points<sup>&sect;</sup></th>"
        myTable2+="<td class='output'>" + roundToTen(L095) + "</td></tr></table>";
    document.getElementById("tableUnequalL95").innerHTML = myTable2;

    //print the footnotes to the table
    document.getElementById("tableFootnotes_unequal").innerHTML = "<p class='footnote'>*For <em>even</em> values of &tau;, calculated as (4/(&tau;t<sub>&tau;</sub><sup>2</sup>))&times;((Dp<sub>i</sub>(1-p<sub>i</sub>))/(1+Dp<sub>i</sub>)<sup>2</sup>+(Dp<sub>1</sub>(1-p<sub>1</sub>))/(1+Dp<sub>1</sub>)<sup>2</sup>) with 1/p<sub>i</sub> = 1/p<sub>1</sub> = 1/K<br>&ensp;Yields NaN for odd values of &tau;.<br><sup>&dagger;</sup>Calculated as per the first line of Equation 10 of Matuszewski <i>et al.</i> 2016.<br><sup>&Dagger;</sup>Calculated as per Equation 12.<br><sup>&sect;</sup>Calculated as per the first line of Equation 15.</p>";

}