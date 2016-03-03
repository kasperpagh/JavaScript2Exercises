var buttons = document.getElementsByClassName("t1");
var display = document.getElementById("display");
var args = [];
var count = 0;
var text = "";
var leftside = 0;
var rightside = 0;
var operation = "";
var result = "";
var done = false;


var et = document.getElementById("one");
var to = document.getElementById("two");
var tre = document.getElementById("three");
var fire = document.getElementById("four");
var fem = document.getElementById("five");
var seks = document.getElementById("six");
var syv = document.getElementById("seven");
var otte = document.getElementById("eight");
var ni = document.getElementById("nine");
var nul = document.getElementById("zero");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var gange = document.getElementById("multiply");
var divider = document.getElementById("divide");

var komma = document.getElementById("comma");


var lighed = document.getElementById("equal");



lighed.onclick = function ()
{
    rightside = text;
    count = 0;
    console.log("i res");
    switch (operation)
    {
        case "plus":
            result = parseFloat(leftside) + parseFloat(rightside);
            display.innerText = "" + result;
            done = true;
            break;
        case "minus":
            result = parseFloat(leftside) - parseFloat(rightside);
            display.innerText = "" + result;
            done = true;
            break;
        case "gange":
            result = parseFloat(leftside) * parseFloat(rightside);
            display.innerText = "" + result;
            done = true;
            break;
        case "divider":
            result = parseFloat(leftside) / parseFloat(rightside);
            display.innerText = "" + result;
            done = true;
            break;

    }
};

komma.onclick = function ()
{
    text = text.concat(".");
    display.innerText = text;   
};

plus.onclick = function ()
{

    leftside = parseFloat(text);
    text = "";
    count = 0;
    operation = "plus";
    display.innerText = text;

};

minus.onclick = function ()
{
    leftside = parseFloat(text);
    text = "";
    count = 0;
    operation = "minus";
    display.innerText = text;
};

gange.onclick = function ()
{
    leftside = parseFloat(text);
    text = "";
    count = 0;
    operation = "gange";
    display.innerText = text;
};

divider.onclick = function ()
{
    leftside = parseFloat(text);
    text = "";
    count = 0;
    operation = "divider";
    display.innerText = text;
};


var reset = function ()
{
    if (done === true)
    {
        args = [];
        count = 0;
        text = "";
        leftside = 0;
        rightside = 0;
        operation = "";
        result = 0;
        display.innerText = text;
        done = false;
    }
};


et.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + et.id);
    args[count] = 1;
    text = text + "1";
    count++;
    display.innerText = text;
};
to.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + to.id);
    args[count] = 2;
    text = text + "2";
    count++;
    display.innerText = text;
};
tre.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + tre.id);
    args[count] = 3;
    text = text + "3";
    count++;
    display.innerText = text;
};
fire.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + fire.id);
    args[count] = 4;
    text = text + "4";
    count++;
    display.innerText = text;
};
fem.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + fem.id);
    args[count] = 5;
    text = text + "5";
    count++;
    display.innerText = text;
};
seks.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + seks.id);
    args[count] = 6;
    text = text + "6";
    count++;
    display.innerText = text;
};
syv.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + syv.id);
    args[count] = 7;
    text = text + "7";
    count++;
    display.innerText = text;
};
otte.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + otte.id);
    args[count] = 8;
    text = text + "8";
    count++;
    display.innerText = text;
};
ni.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + ni.id);
    args[count] = 9;
    text = text + "9";
    count++;
    display.innerText = text;
};
nul.onclick = function ()
{
    reset();
    console.log("Vi er i switch nr: " + nul.id);
    args[count] = 0;
    text = text + "0";
    count++;
    display.innerText = text;
};



var klik = function (buttonID)
{

};