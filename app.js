const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("Title was clicked!");
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
    console.log("Mouse is here!");
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
    console.log("Mouse is gone!");
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}


h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);