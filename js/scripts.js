document.querySelector("#copyright").textContent = new Date().getFullYear();

// Toggle Mobile Menu
const navigationMenu = document.getElementById('navmenu');
const navigationButton = document.getElementById('toggle-menu');


function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if(isVisible === 'false'){
        if(navigationMenu.classList.contains('active')){
            navigationMenu.setAttribute('data-visible', 'true');
            navigationButton.setAttribute('data-visible','true')
        }
        else{
          dataDisplay();
          setTimeout(toggleMenu, 100);  
        }
    }
    else {
        navigationMenu.setAttribute('data-visible', 'false');
        navigationButton.setAttribute('data-visible', 'false');
        setTimeout(dataDisplay, 300)
    }

    function dataDisplay() {
        navigationMenu.classList.toggle('active');
    }
}

navigationButton.addEventListener('click', toggleMenu);