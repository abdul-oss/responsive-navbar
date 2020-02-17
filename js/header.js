const menuIcon = document.getElementById("menuIcon");
const menuDiv = document.getElementById("menuDiv");
const navContainer = document.getElementById("navContainer");


const dropdown = document.getElementById("dropdown");
const dropButton = document.getElementById("dropButton");

menuIcon.addEventListener('click',()=>{
    if(navContainer.style.display === "block"){ 
        navContainer.style.display = "none";
    }else{
        navContainer.style.display = "block";
        menuIcon.style.color = "green";
    }
});
dropButton.addEventListener('mouseover',()=>{
    if(bropButton === 'mouseover'){ 
        dropdown.style.display = "block";
    }else{
        dropdown.style.display = "none";
    }
});

dropButton.addEventListener('click',()=>{
    if(dropdown.style.display === "block"){ 
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "block";
    }
});
