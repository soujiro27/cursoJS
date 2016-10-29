var ruta=window.location;
//console.log(ruta);
//document.write("estoy en la ruta: "+ruta);


var btn=document.getElementById('btn');
console.log(btn);
btn.addEventListener('click',lineas);
var lienzo=document.getElementById('lienzo');
var marco=lienzo.getContext('2d');

function paint(x1,y1,x2,y2)
{
	marco.beginPath();
	marco.StrokeStyle='255,0,0';
	marco.moveTo(x1,y1);
	marco.lineTo(x2,y2);
	marco.stroke();
	marco.closePath();
}

function lineas()
{
	cont=0;
	while(cont<400)
	{
	paint(0,cont,cont,400);
	paint(cont,0,400,cont);
	cont+=30;
	}
	
	

}