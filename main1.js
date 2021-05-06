const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['HELLO !', 'NICE TO SEE YOU :)', `LET'S GET STARTED!`];
let activeLetter = -5;
let activeText = 0;

const addLetter = () => {
if(activeLetter>=0){
spnText.textContent += txt[activeText][activeLetter];
}
activeLetter++;
if (activeLetter === txt[activeText].length) {
    activeText++;
if (activeText === txt.length) return;

return setTimeout(() => {
 activeLetter = -15;
spnText.textContent = '';
addLetter();
}, 2000)

}
setTimeout(addLetter,100)
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation,400);
addLetter();
