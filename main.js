var splitmillsec=document.getElementById('screen3')
var splitsec=document.getElementById('screen2')
var splitmin=document.getElementById('screen1')
var alone;

why = function (){
    splitmillsec.value= + splitmillsec.value +1
    if (splitmillsec.value=='60'){
        splitsec.value=+ splitsec.value +1
        splitmillsec.value=0
    }
    else if(splitsec.value=='60'){
        splitmin.value=splitmin.value-1
        splitsec.value=0
        }
}
function begin(){
    alone=setInterval(why,10)
}

function num(x){
    document.getElementById('screen1').value +=x
    // document.getElementById('screen1').value +=x
    // console.log('gghg')
}
function comot(){
    document.getElementById('screen3').value=''
    document.getElementById('screen2').value=''
    document.getElementById('screen1').value=''
    clearInterval(alone)
}




