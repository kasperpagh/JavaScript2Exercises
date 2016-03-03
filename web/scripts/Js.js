var jimmy = document.getElementById("john");
jimmy.innerHTML = "<h5>Jeg er en albatros</h5>";

var items = document.getElementsByClassName("items");
for (i = 0; i < items.length; i++)
{
    console.log("her er items: " + items[i].innerText);
}
;

var lists = document.getElementsByTagName("li");
var count = 0;
var john = function changeLi()
{

    var lists = document.getElementsByTagName("li");
    var listItems = ["1", "2", "3", "4"];
    lists[count].innerHTML = listItems[count];

    count++;
    if (count > 3)
    {
        count = 0;
    }

    setTimeout(john, 3000);
};
console.log("lige før timeout");
setTimeout(john, 3000);

//for (i = 0; i < lists.length; i++)
//{
//    lists[i].innerHTML = "første/anden/tredje/fjerde";
//};


var divBox = document.getElementById("john");
var styleObject = divBox.style;
styleObject.border = "10px solid blue";

divBox.setAttribute("style", "border : 25px solid yellow");


var button = document.getElementById("john");
button.onclick = function ()
{
    alert("Du har klikket på knappen!");
};

button.onmouseenter = function ()
{
    alert("button was hovered over!");
};

