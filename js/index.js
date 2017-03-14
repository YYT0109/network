
var yyt='yyt';
var text=function(param){
	return param+'\njll\n';
}
var res=text(yyt);
document.write(res);

var btn=document.querySelector('.btn');
btn.onclick=function(){
	var xhr=new XMLHttpRequest();
	xhr.open('get',"data/data.json",true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.status==200 && xhr.readyState== 4){
			console.log(this.rsponseText)
		}
	}
}