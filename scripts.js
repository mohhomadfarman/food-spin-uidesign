const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imgList = document.querySelectorAll('.menu-item');
const imgListItems = document.querySelectorAll('img-items-list');
const RotateBox = document.getElementById('food-rotate');

function OnNext(index) {
    let boxIshere = document.getElementsByClassName(`rotate-${index}`)
    let biggerNum = index < imgList.length
    console.log(boxIshere && biggerNum, index)
    if (boxIshere && biggerNum) {
        RotateBox.className = `Food-items rotate-${index}`
        console.log("sjjj")
    }
    var divContainer = document.getElementById("img-items-list")
    var currentActiveDiv = divContainer.getElementsByClassName("  active");
    var allDiv = divContainer.getElementsByClassName("menu-item");
    if (currentActiveDiv && currentActiveDiv.length > 0) {
        currentActiveDiv[0].className = currentActiveDiv[0].className.replace(" active", "");
        let clasnames = allDiv[index].className;
        allDiv[index].className = clasnames + " active"
        let imgChange = document.getElementById('image-change')
        imgChange.setAttribute("style", 'transform: rotate(360deg); scale: 0;     transition: all 0.5s cubic-bezier(0.45, 0, 0.14, 1.67);')
        setTimeout(() => {
            imgChange.src = allDiv[index].src
            imgChange.setAttribute("style", 'transform: rotate(0deg); scale: 1;     transition: all 0.5s cubic-bezier(0.45, 0, 0.14, 1.67);')
        }, 200);
    }
}


function ONback(index) {
    let boxIshere = document.getElementsByClassName(`rotate-${index}`)
    if (boxIshere) {
        RotateBox.className = `Food-items rotate-${index}`
    }
    var divContainer = document.getElementById("img-items-list")
    var currentActiveDiv = divContainer.getElementsByClassName("  active");
    var allDiv = divContainer.getElementsByClassName("menu-item");
    if (currentActiveDiv && currentActiveDiv.length > 0) {
        currentActiveDiv[0].className = currentActiveDiv[0].className.replace(" active", "");
        let clasnames = allDiv[index].className;
        allDiv[index].className = clasnames + " active"
        let imgChange = document.getElementById('image-change')
        imgChange.setAttribute("style", 'transform: rotate(360deg); scale: 0;     transition: all 0.5s cubic-bezier(0.45, 0, 0.14, 1.67);')

        setTimeout(() => {
            imgChange.src = allDiv[index].src
            imgChange.setAttribute("style", 'transform: rotate(0deg); scale: 1;     transition: all 0.5s cubic-bezier(0.45, 0, 0.14, 1.67);')
        }, 200);
    }
}



var clicks = 0;
function countClicks() {

    if (clicks !== 8) {
        clicks += 1;
        OnNext(clicks)
    }

}

function countClicksback() {
    if (clicks > 0 && clicks !== 11 && clicks <= imgList.length) {
        console.log("onback", clicks)
        clicks -= 1;
        ONback(clicks)
        console.log("onback", clicks)

    }
}
