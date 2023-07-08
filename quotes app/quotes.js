// document.addEventListener("DOMContentLoaded", () => {
    
// });     

AOS.init();

let realdata = "";
// let quotesdata="";

const tweetnow=()=>{
    // alert("hii");
   let tweeterurl= "https://twitter.com/intent/tweet";
   window.open(tweeterurl);


}

const newquotes =  () => {
    let rnum = Math.floor(Math.random() *20);
    // console.log('rnum => ',rnum);
    // console.log(realdata[10].author);
    // console.log(realdata[rnum].author);

    // quotes.innerText=`${realdata[rnum].text}`;
    document.getElementById('text').innerText =realdata[rnum].text;
    // document.getElementById('author').innerText = realdata[rnum].author;
    if(realdata[rnum].author==null){
        document.getElementById('author').innerText ="unknown";
 
    }
    else{
        document.getElementById('author').innerText = "By -"+realdata[rnum].author;
 
    }

};
const getQuotes = async () => {

    const Api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(Api);

        realdata = await data.json();
        newquotes();
        //   console.log(realdata);
        //   console.log(realdata.length);
        //   console.log(realdata[0]);

    }
    catch (error) {

    }
};

document.getElementById("tweetme").addEventListener('click',tweetnow);
document.getElementById('newquotess').addEventListener("click", newquotes);

getQuotes();

