let darkMode = localStorage.getItem('darkMode');

const darkModeTogle = document.querySelector("#check")

const enableDarkMode = () => {
    // 1. add the class darkmode to the body 
    document.body.classList.add("darkmode");
    // 2. update darkmode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
    // 1. add the class off darkmode to the body 
    document.body.classList.remove("darkmode");
    check.checked = false;
    // 2. update darkmode in the localStorage
    localStorage.setItem('darkMode', null);
}  
if (darkMode === 'enabled') {
    check.checked = true;
    enableDarkMode();
}

check.addEventListener("click", ()=> {
    darkMode = localStorage.getItem('darkMode');
    if (check.checked && darkMode !== "enabled" ){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    check.checked = true;
    if (check.checked){
        enableDarkMode();
    }else if (window.matchMedia("(prefers-color-scheme: light)").matches){
        console.log("Check")
        disableDarkMode();
    }else{
        disableDarkMode();
    }

}