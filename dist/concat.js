var yyt="yyt",text=function(t){return t+"\njll\n"},res=text(yyt);document.write(res),document.querySelector(".btn").onclick=function(){var t=new XMLHttpRequest;t.open("get","data/data.json",!0),t.send(),t.onreadystatechange=function(){200==t.status&&4==t.readyState&&console.log(this.rsponseText)}};var add=function(t,e){return t+e},res2=add(1,2);document.write(res2);