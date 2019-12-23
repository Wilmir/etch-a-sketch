const container = document.querySelector(".container");
const newBtn = document.getElementById("new");
const colorBtn = document.getElementById("color");
const blackBtn = document.getElementById("black");
const clearBtn = document.getElementById("clear");

/*Initial State*/
let counter = 16;
let mode="color";
colorBtn.classList.add("active");
generateGrid();
changeBackground();


newBtn.addEventListener('click',createNewGrid);
clearBtn.addEventListener('click',clearBackground);
blackBtn.addEventListener('click',setBlackMode);
colorBtn.addEventListener('click',setColorMode);


function generateGrid(){
    let height =((container.clientHeight)/counter);
    let width = ((container.clientWidth)/counter);

    for (let i=1;i<=counter;i++){
        const row = document.createElement('div');
        row.setAttribute("class","row");
        for(let j=1;j<=counter;j++){
            const col = document.createElement('div');
            col.setAttribute("class","col");
            col.setAttribute("style",`height:${height}px;width:${width}px`);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}


function createNewGrid(){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => container.removeChild(row));

    counter = prompt("Enter the grid size (n x n) you wish to create");

    if(!isNaN(counter)){
        generateGrid();
        changeBackground();
    } else{
        alert("Invalid input");
    }
}


function changeBackground(){
    const cols = document.querySelectorAll(".col");

    cols.forEach(col => {
            col.addEventListener('mouseover',setBackground);
    });
    
}


function setBlackMode(){
    mode="black";
    blackBtn.classList.add("active");
    colorBtn.classList.remove("active");
}

function setColorMode(){
    mode="color";
    colorBtn.classList.add("active");
    blackBtn.classList.remove("active");
}


function setBackground(){
        let red = (Math.floor(Math.random()*255))+1;
        let green = (Math.floor(Math.random()*255))+1;
        let blue = (Math.floor(Math.random()*255))+1;
        let opacity = 0.8;

        if(mode==="color"){
            this.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
        }else{
            this.style.backgroundColor =  `rgb(0 0 0)`;
            this.style.opacity = opacity;
        }
}


function clearBackground(){
    const cols = document.querySelectorAll(".col");

    cols.forEach(col => {
        col.style.backgroundColor =  "white"
        col.style.borderColor = "#dedede";
        col.style.opacity = 1;
    });
}

