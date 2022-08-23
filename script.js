window.onload=function (){
    var items=menu.getElementsByTagName("li");
    var elem;
    for (var b=0;b<items.length;b++){
        items[b].n=b+1;
        items[b].onclick=MoverScroll;
        elem=document.getElementById((b+1).toString());
        elem.style.minHeight=window.innerHeight+'px';
    }
   
}
MoverScroll=function (){
     
    IrA=this.n;
    
    ciclo1=setInterval(function (){
        
        var elem=document.getElementById(IrA.toString());
        if (document.body.scrollTop>elem.offsetTop){
            if (document.body.scrollTop-10>elem.offsetTop){
                   document.body.scrollTop-=10;
            }
            else {
                document.body.scrollTop=elem.offsetTop;
                clearInterval(ciclo1);
                window.onmousedown=null;
                return 1;
            }
        }
        else if (document.body.scrollTop<elem.offsetTop){
            if (document.body.scrollTop+10<elem.offsetTop){
                    document.body.scrollTop+=10;
            }
            else {
                document.body.scrollTop=elem.offsetTop;
                clearInterval(ciclo1);
                window.onmousedown=null;
                return 1;
            }
        }
        else {
            clearInterval(ciclo1);
            window.onmousedown=null;
            return 1;
        }
        console.log(document.body.scrollTop,elem.offsetTop);
    },10)
    window.onmousedown=function (e){
        if (e.target.n){
            if (e.target.n==IrA){
                return 0;   
            }
        }
        clearInterval(ciclo1);
        window.onmousedown=null;
    }
}