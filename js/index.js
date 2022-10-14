function openForm() {
    document.getElementById("applicationForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("applicationForm").style.display = "none";
}

function openMenu() {
    document.getElementById("hidden_menu").style.display = "flex";
    document.querySelector(".hidden_menu__wrap").classList.add("hidden_menu__open");
    console.log(document.querySelector(".hidden_menu__wrap").classList)
}

function closeMenu() {
    document.getElementById("hidden_menu").style.display = "none";
}