function buttonClick(val){
    document.getElementById("screen").value+=val;
}
function buttonClear(val){
    document.getElementById("screen").value=""
}
function buttonEqual(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}