class kayneQuote{
    constructor(quote){
        this.kayneWisdom = quote;
    }
    changeCase1() {

    }
    changeCase2() {
        
    }
    changeCase3() {
        
    }
}

//make AJAX request to get quote
//on complete,create a new object from the class
//call your three methods fo your new object

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if (ajax.status == 200 && ajax.readyState == 4) {
        document.getElementById('display').innerText = ajax.responseText;
    }
    ajax.open('GET', 'https://api.kanye.rest/', true);
    ajax.send();
}