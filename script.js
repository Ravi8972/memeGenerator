const memeBtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeImg = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-generator .meme-title');
let author = document.querySelector('.meme-generator .meme-author');

memeBtn.addEventListener("click",generateMeme);
function generateMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response)=>Response.json())
    .then((data)=>{
    upDateDetails(data.url,data.title, data.author);
    });
};
function upDateDetails(imgUrl, titleText, authorText){
    memeImg.setAttribute('src',imgUrl);
    memeTitle.innerHTML =titleText;
    author.innerHTML="By "+authorText;
}

generateMeme();