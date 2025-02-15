function modify(data) {
    let boxList = document.getElementsByClassName("box"),
    arrowIcon = document.getElementsByClassName("arrow");
    for(let i=0; i<boxList.length; i++) {
        console.log(boxList[i])
        if(boxList[i].id==data) {
            boxList[i].style.height = "200px";
            arrowIcon[i].style = ' transform: rotate(180deg);';
        }else {
            boxList[i].style.height = "55px";
            arrowIcon[i].style = ' transform: rotate(0deg);'
        }
    }
}