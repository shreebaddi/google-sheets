function stat(){
    var ajax=new XMLHttpRequest()

    ajax.onreadystatechange = function(){
if(this.readyState==4 &&this.status==200){
    alert(this,this.responseText) 
    window.location.href="form.html"
}
    }

    ajax.open('GET','message,txt',true)
    ajax.send()
}