var color_td;
var size = parseInt(prompt("What size table do you want?","10"), 10);
document.write("<table border='1px'>");

for(var i = 1; i < size+1; i++) {

	document.write("<tr style='height:30px;'>");

	for(var j = 1; j < size+1; j++) {

		if(j == 1 || i == 1) {
			color_td = "#ccc";
		}
		else {
			color_td = "#fff";
		}

		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");

function changeSize() {
    size = 10
    return size;
}