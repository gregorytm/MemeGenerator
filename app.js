const form = document.querySelector('#memeform');
const toptxt = document.querySelector('input[name="top"]');
const bottxt = document.querySelector('input[name="bot"]');
const sillyimg = document.querySelector('input[name="img"]');
const results = document.querySelector('#results');


//its not styled and the code is all over the place but it works!
//plan on reworking but i just want to move onto new lessons atm


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(toptxt.value ==="" || bottxt.value === "" || sillyimg.value === ""){
        return false
    } else {
    const frame = document.createElement('div');
    const newMeme = makeMeme(
        toptxt.value,
        sillyimg.value,
        bottxt.value);
    frame.append(newMeme)
    results.appendChild(frame);
    clearInputs()
    }
});

results.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    };
});

function clearInputs(){
    toptxt.value="";
    sillyimg.value="";
    bottxt.value="";
};

function makeMeme(t, i, b) {
    const frame = document.createElement('div');
    const meme1 = document.createElement('h2');
    const meme2 = document.createElement('h2');
    const newImg = document.createElement('img');
    meme1.innerText = t;
    meme2.innerText = b;
    newImg.setAttribute('src', i);
    frame.append(meme1);
    frame.append(newImg);
    frame.append(meme2);
    newImg.classList.add('img');
    frame.classList.add('frame')
    meme1.classList.add('txttop')
    meme2.classList.add('txtbot')
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X'
    frame.append(deleteBtn);
    return frame;
}
 