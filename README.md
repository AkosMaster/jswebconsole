# jswebconsole
Control the F12 developer console from the html page with JSWebConsole!

Add these 3 lines to your html code and you are done!
Make sure to change the width, height and position values to fit the console on the page!

<link rel="stylesheet" type="text/css" href="style.css">
<samp style="position: absolute; left:100; top: 40; width: 500; height: 30%;" class="Consamp" id="conframe"><a id="console2"><br></a>$ <input class="inpCon" id="conIn" type="text" name="conIn" autofocus onkeydown="search(this)"></input></samp>
<script type="text/javascript" src="./webconsole.js"></script>
