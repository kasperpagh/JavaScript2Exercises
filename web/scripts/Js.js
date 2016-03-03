//Opgave 1

var opgave1 = function ()
{
    var divs = document.getElementsByTagName("div");

    for (i = 0; i < divs.length; i++)
    {
        divs[i].style.backgroundColor = "red";
    }
    ;
};
opgave1();

//OPgave 2

var opgave2 = function ()
{
    var personList =
            [
                {fName: "a", lName: "b", phone: 1111, email: "asdf1@asdf.asdf"},
                {fName: "c", lName: "d", phone: 2222, email: "asdf2@asdf.asdf"},
                {fName: "e", lName: "f", phone: 3333, email: "asdf3@asdf.asdf"},
                {fName: "g", lName: "h", phone: 4444, email: "asdf4@asdf.asdf"},
                {fName: "i", lName: "j", phone: 5555, email: "asdf5@asdf.asdf"}
            ];

    var div = document.getElementById("opgave2");
    div.style.backgroundColor = "white";
    var htmlString = "";
    htmlString = htmlString.concat("<table><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Email</th></tr>");
    for (i = 0; i < personList.length; i++)
    {
        console.log("her er person " + personList[i].toString());
        htmlString = htmlString.concat("<tr><td>" + personList[i].fName + "</td><td>" + personList[i].lName + "</td><td>" + personList[i].phone + "</td><td>" + personList[i].email + "</td></tr>");
    }

    htmlString = htmlString.concat("</table>");
    div.innerHTML = htmlString;
};
opgave2();


var opgave3 = function ()
{
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    var c = document.getElementById("3");

    a.style.backgroundColor = "blue";
    b.style.backgroundColor = "green";
    c.style.backgroundColor = "orange";

    a.onclick = function ()
    {
        console.log("Du har klikket på A");
    };
    b.onclick = function ()
    {
        console.log("Du har klikket på B");
    };
    c.onclick = function ()
    {
        console.log("Du har klikket på C");
    };

};

opgave3();


var opgave4 = function ()
{
    var a = document.getElementById("Opgave41");
    var b = document.getElementById("Opgave42");
    var c = document.getElementById("Opgave43");

    a.onmouseover = function ()
    {
        a.innerText = "unik besked A hover";
    };
    b.onmouseover = function ()
    {
        b.innerText = "unik besked B hover";
    };
    c.onmouseover = function ()
    {
        c.innerText = "unik besked C hover";
    };

    a.onmouseout = function ()
    {
        a.innerText = "Jeg er en ny unik besked A (mouseout)";
    };
    b.onmouseout = function ()
    {
        b.innerText = "Jeg er en ny unik besked B (mouseout)";
    };
    c.onmouseout = function ()
    {
        c.innerText = "Jeg er en ny unik besked C (mouseout)";
    };


};
opgave4();


var opgave5 = function ()
{
    var subbtn = document.getElementById("subbtn");
    var tekstField = document.getElementById("field1");
    var radio = document.getElementById("field2");
    var check = document.getElementById("field3");
    var divBox = document.getElementById("ogpave5");

    subbtn.onclick = function ()
    {
        console.log("tekst formen: " +tekstField.value);
        console.log("radio knapper er : " + radio.checked);
        console.log("checkbox knappen er: " + check.checked);
        
        divBox.innerHTML = "<table><tr><th>Tekst area|</th><th>Radio button|</th><th>Checkbox</th></tr> <tr> <td>" + tekstField.value + "|</td> <td>" + radio.checked + "|</td> <td>" + check.checked + "</td> </tr> </table>"
    };


};
opgave5();


var opgave6 = function()
{
    console.log("Denne opgave er (ligesom det meste af sættet her) blot en gentagelse af de tidligere opgaver. Nu må det være nok!");  
};