 let postDisplay = document.querySelector("#display");

async function getResult(){
    let acc = await fetch('https://jsonplaceholder.typicode.com/albums');
    let jsonData= await acc.json();
    let countData =jsonData.slice(0,10);
    let Data = JSON.stringify(countData);

     postDisplay.innerText = Data;
}