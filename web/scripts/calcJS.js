var buttons = document.getElementsByClassName("t1");
console.log("Her er alle kanpper: " + buttons);
for (i = 0; i < buttons.length; i++)
{
    console.log(buttons[i].id);

}
var display = document.getElementById("display");
var args = [];
var count = 0;
var text = "";
for (i = 0; i < buttons.length; i++)
{
   
    switch (buttons[i].id)
    {
        case "one":
            buttons[i].onclick = function ()
            {
//                console.log("Vi er i switch nr: " + buttons[i].id);
                args[count] = 1;
                console.log("Her er argumentet " + args);
                for (var i = 0; i < args.length; i++)
                {
                    text = text + args[i].toString();
                }

                count++;
                display.innerText = text;
            };

            break;
        case "two":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "three":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "four":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "five":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "six":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "seven":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "eight":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "nine":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;
        case "zero":
            buttons[i].onclick = function ()
            {
                console.log("Vi er i switch nr: " + buttons[i].getAttribute("id"));
                for (var i = 0; i < arguments.length; i++)
                {
                    text = text + "" + arguments[i];
                }
                display.innerText = text;
            };
            args[count] = 1;
            count++;
            break;

    }
    ;
}
;