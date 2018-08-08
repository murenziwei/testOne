var canvas=document.querySelector("#f_l_c_One");
var ctx=canvas.getContext('2d');
function tM(count){
	var d=new Date();
	d.setDate(d.getDate()-count);
	return d.toLocaleDateString();
}
var data = {
            labels: [tM(8),tM(6),tM(4),tM(2),tM(0)],
            datasets: [
            {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81,42]
            },
            {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
            }
            ]
};
var firstChart=new Chart(ctx).Line(data);
//画图表
// ctx.beginPath();
// ctx.moveTo(30,20);
// ctx.lineTo(30,230);
// ctx.lineTo(480,230);
// ctx.lineWidth=2;
// ctx.strokeStyle='red';
// ctx.stroke();
// ctx.lineWidth=1;
// ctx.strokeStyle='gainsboro';

// for(var i=7;i>0;i--){
// 	ctx.beginPath();
// 	ctx.moveTo(30,230-i*30);
//     ctx.lineTo(480,230-i*30);
    
    
//     ctx.stroke();
//     ctx.closePath();

//     ctx.fillText(5*i,10,235-i*30);

// }
// ctx.fillText(0,10,235);
// for(var i=0;i<3;i++){
// 	ctx.beginPath();
// 	ctx.moveTo(150*(i+1)+30,20);
// 	ctx.lineTo(150*(i+1)+30,230);
	
	
// 	ctx.stroke();
// 	ctx.closePath();
// 	ctx.fillText('2018-07-'+(14+i),150*(i)-1,250);
// }
	
