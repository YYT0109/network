var myScroll,
    pullDownEle,
    pullDownHeight,
    pullUpEle,
    generatedCount=0;

//下拉加载更多数据
function pullDownAction(){
    setTimeout(function(){
        alert('刷新完成！');
        //当Dom结构或元素发生了变化时，就需要执行一下，让myScroll重复Dom节点，不重复有样式问题
        myScroll.refresh();
    },200)
}
//上拉加载更多数据
function pullUpAction(){
    setTimeout(function(){
        var el,li;
        el=document.getElementById('thelist');
        for(var i=0;i<data.length;i++){
            li=document.createElement('li');
            h4=document.createElement('h4');
            p=document.createElement('p');
            strong=document.createElement('strong');
            b=document.createElement('b');
            span=document.createElement('span');
            li.appendChild(h4);
            li.appendChild(p);
            li.appendChild(strong);
            h4.appendChild(b);
            p.appendChild(span);
            h4.innerText=data[i].name;
            p.innerText=data[i].p;
            strong.innerText=data[i].strong;
            b.innerText=data[i].b;
            span.innerText=data[i].span;
            el.appendChild(li,el.childNodes[0]);
        }
        myScroll.refresh();
    },400)
}

//初始化数据
function loadAction(){
    setTimeout(function(){
        var el,li;
        el=document.getElementById('thelist');
        for(var i=0;i<data.length;i++){
            li=document.createElement('li');
            h4=document.createElement('h4');
            p=document.createElement('p');
            strong=document.createElement('strong');
            b=document.createElement('b');
            span=document.createElement('span');
            li.appendChild(h4);
            li.appendChild(p);
            li.appendChild(strong);
            h4.appendChild(b);
            p.appendChild(span);
            h4.innerText=data[i].name;
            p.innerText=data[i].p;
            strong.innerText=data[i].strong;
            b.innerText=data[i].b;
            span.innerText=data[i].span;
            el.appendChild(li,el.childNodes[0]);
        }
        myScroll.refresh();
    },400)
}

/*实现刷新效果*/
function loaded(){
    pullDownEle=document.getElementById('pullDown');
    pullUpEle=document.getElementById('pullUp');
    pullDownHeight=pullDownEle.offsetHeight;
    myScroll=new iScroll('wrapper',{
        topOffset:pullDownHeight,
        /*滑拉开始时*/
       /* onScrollStart:function(){
            console.log(111)
        },*/
        /*滑拉滑动时*/
        onScrollMove:function(){
            //console.log(this.y)
            //正在滑拉 ---状态
            if(this.y>10 && !pullDownEle.className.match('flip')){
                pullDownEle.className='flip';
                pullDownEle.querySelector('.pullDownLabel').innerHTML='释放刷新';
            }else if(this.y<10 && pullDownEle.className.match('flip')){
                pullDownEle.className='loading';
                pullDownEle.querySelector('.pullDownLabel').innerHTML='正在加载';
            }else if(this.y<(this.maxScrollY-10) && !pullUpEle.className.match('flip')){
                pullUpEle.className='flip';
                pullUpEle.querySelector('.pullUpLabel').innerHTML='松手刷新';
            }else if(this.y>(this.maxScrollY+10) && pullUpEle.className.match('flip')){
                pullUpEle.className='loading';
                pullUpEle.querySelector('.pullUpLabel').innerHTML='正在加载';
            }
        },
        /*滑拉结束时*/  /****-10代表当前滑拉的最底部*/
        onScrollEnd:function(){
          if(pullDownEle.className.match('flip')){
              pullDownEle.className='';
              pullDownEle.querySelector('.pullDownLabel').innerHTML='刷新成功';
              pullDownAction();
          }else if(pullUpEle.className.match('flip')){
              pullUpEle.className='';
              pullUpEle.querySelector('.pullUpLabel').innerHTML='加载完成';
              pullUpAction();
          }
        },
        onRefresh:function(){
            if(pullDownEle.className.match('loading')){
                pullDownEle.className='';
                pullDownEle.querySelector('.pullDownLabel').innerHTML='下拉刷新';
            }else if(pullUpEle.className.match('loading')){
                pullUpEle.className='';
                pullUpEle.querySelector('.pullUpLabel').innerHTML='加载更多';
            }
        }
    });

    loadAction();
}

window.addEventListener('load',loaded)
