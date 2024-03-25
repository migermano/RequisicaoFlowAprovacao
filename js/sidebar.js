document.addEventListener("DOMContentLoaded", function() {
    var submenus = document.querySelectorAll('.submenu');

    submenus.forEach(function(submenu) {
        submenu.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});