class kayneQuote{
    constructor(quote){
        this.kayneWisdom = quote;
    }
    changeUpperCase() {
        this.newkayneWisdom = this.kayneWisdom.toUpperCase();
        return this.newkayneWisdom;
    }
    changeLowerCase() {
        this.newkayneWisdom = this.kayneWisdom.toLowerCase();
        return this.newkayneWisdom;
    }
    splitCase() {
        this.newkayneWisdom = this.kayneWisdom.split(" ");
        return this.newkayneWisdom;
    }
}

//make AJAX request to get quote
//on complete,create a new object from the class
//call your three methods fo your new object

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if (ajax.status == 200 && ajax.readyState == 4) {
        var quoteJSON = JSON.parse(ajax.responseText);
        document.getElementById('display').innerText = quoteJSON.quote;
        console.log(quoteJSON.quote);
        let obj = new kayneQuote(quoteJSON.quote);
        console.log(obj.changeUpperCase());
        console.log(obj.changeLowerCase());
        for (i=0; i<obj.splitCase().length; i++){
            console.log(obj.splitCase()[i]);
        }       
    }
}
ajax.open('GET', 'https://api.kanye.rest/', true);
ajax.send();