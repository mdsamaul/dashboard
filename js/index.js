const navItems = document.getElementById('lg-navbar');
const mobileNavber = document.getElementById('mobile-manber');
document.getElementById('collapse-navbar').addEventListener('click', function () {
    console.log(navItems);
    if (navItems.style.display == 'none' || mobileNavber.style.display == 'none') {
        navItems.style.display = 'block'
        mobileNavber.style.display = 'block'
    } else {
        navItems.style.display = 'none'
        mobileNavber.style.display = 'none'
        navItems.classList.add('samaulrajshovon');

    }
})