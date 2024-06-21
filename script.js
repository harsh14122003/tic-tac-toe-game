const boxes = Array.from(document.getElementsByClassName('box'));
const resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener('click', reset);
const headertext = document.getElementById('headertext');
const areas = [null, null, null, null, null, null, null, null, null,];
const o_text = "o";
const x_text = "x";
let currentplayer = o_text;
let winboxesIds = [];


function bindclickEvent() {
    boxes.forEach(
        box => {
            box.addEventListener('click', handleboxclick);
        });
    }
    bindclickEvent();


    function handleboxclick(e) {
        // alert()
        const id = e.target.id;
        if(areas[id]){
            areas[id] = currentplayer;
            e.target.innerHTML = currentplayer;
            
        currentplayer = currentplayer === o_text ? x_text : o_text;
        }
    }
    

function reset() {
    // alert()
}
