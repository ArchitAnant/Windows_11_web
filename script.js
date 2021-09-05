let startbut = document.getElementsByClassName("startbut")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let flyoutbut = document.getElementsByClassName("flyoutbut")[0]
let flyout = document.getElementsByClassName("flyout")[0]

startbut.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom="-650px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
}
)
flyoutbut.addEventListener("click", ()=>{
    if(flyout.style.bottom == "-180px"){
        flyout.style.bottom="-650px"
    }
    else{
        flyout.style.bottom = "-180px"
    }
})
