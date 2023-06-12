function handleClick(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && openDropdown.id !== dropdownId) {
            openDropdown.classList.remove('show');
        }
    }
    dropdown.classList.add("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function handleClickBurger() {
    var burgermenu = document.getElementById('BurgerMenuContent');
    burgermenu.classList.toggle('open');

    var closeButton = document.getElementById('CloseBurgerMenu');
    closeButton.addEventListener('click', function() {
        burgermenu.classList.toggle('open');
    });

    document.addEventListener('mousedown', function(event) {
        var targetElement = event.target;
        if (!burgermenu.contains(targetElement) && !targetElement.classList.contains('BurgerMenu')) {
            burgermenu.classList.remove('open');
        }
    });
}



function handleClickBurgerMenu(dropdownId) {
    var dropdownburger = document.getElementById(dropdownId);
    var dropdownsburger = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdownsburger.length; i++) {
        var openDropdownburger = dropdownsburger[i];
        if (openDropdownburger.classList.contains('show') && dropdownburger.id !== dropdownId) {
            openDropdownburger.classList.remove('show');
        }
    }
    dropdownburger.classList.toggle("display");
}







var swiper = new Swiper(".swiper", {
direction: "vertical",
loop: true,
pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
    return 'PICTURE ' +
            '<span class="' + currentClass + '"></span>' +
            ' OF ' +
            '<span class="' + totalClass + '"></span>';
    }
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});
