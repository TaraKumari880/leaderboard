document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let firstname = e.target.children[0].value;
    //console.log(firstname);
    let lastname = e.target.children[1].value;
    let country = e.target.children[2].value;
    let playerscore = e.target.children[3].value;
    let errorPrompter = document.querySelector(".main-error");
    errorPrompter.style.display = "none";
    if (firstname === '' || lastname === '' || country === '' || playerscore === '')
        return (errorPrompter.style.display = "block");
    const scoreboardContainer = Document.querySelector(".main-score")

    const scoreboardElement = document.createElement("div");
    scoreboardElement.classList.add("main-scoreboard");
    scoreboardElement.innerHTML = `
<div>
    <p class="main-player">${firstname} ${lastname}
    </p>
    <p class="main-time">${generateDateAndTime()}
    </p>
</div>

<p class="main-country">${country}
</p>
    <p class="main-playerscore">${playerscore}</p>
    <div class="main-scored-btn">
        <button>&#x1f5d1;</button>
        <button>+5</button>
        <button>-5</button>
</div>`

    scoreboardContainer.appendChild(scoreboardElement);
    sortScoreBoard()
    activeBtnEventListner()



})
function activeBtnEventListner() {
    document.querySelectorAll(".main-scored-btn").forEach((el) => {
        el.addEventListener("click", (e) => {
            let textContent = e.target.textContent;
            console.log(textContent);
            let scoreplayer = e.target.parentElement.parentElement.children[2];
            console.log(scoreplayer);
            if (textContent > 2) return;
            console.log(e.target.parentElement.parentElement);
            console.log("hi");

            if(textContent=='')
            return e.target.parentElement.parentElement.remove();
        scoreplayer.textContent=parseInt
        (scoreplayer.textContent)  + parseInt
        (textContent);
        sortScoreBoard()

        });
    });
}



activeBtnEventListner()
function sortScoreBoard(){
    let scoreboardContainer=document.querySelector(".main-score");
    let scoreboards=document.querySelectorAll(".main-scoreboard");
    let elementsArray=[]
    scoreboards.forEach((el)=> elementsArray.push(el));
    console.log(elementsArray);
    let sortedElements=elementsArray.map((el)=>{
        return el;
    })
    .sort((a,b)=>{
        let numA = parseInt(a.children[2].textContent),
        numB= parseInt(b.children[2].textContent)
        if(numA > numB) return -1;
        if(numA < numB) return 1;
    });
    sortedElements.forEach((el)=>{
        scoreboardContainer.append(el)
;    })
}

function generateDateAndTime() {
    let dateObject = new Date();
    let month = dateObject.toLocaleString("default",
        { month: "long" })
    day = dateObject.getDate(),
        year = dateObject.getFullYear(),
        time = dateObject.toLocaleTimeString().slice(0, 7);
    let generateresult = `${month} ${day}:${year} ${time};`
    return generateresult;
}