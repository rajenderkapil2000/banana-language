var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

function clickHandler(){
  output.innerText= "output " + txtInput.value

}

btnTranslate.addEventListener("click", clickHandler)


"https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am iron man"
