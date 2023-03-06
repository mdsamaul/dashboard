const navItems = document.getElementById('lg-navbar');
const mobileNavber = document.getElementById('mobile-manber');
const morebtn = document.getElementById('collapse-navbar');
const dashboardText = document.getElementById('dashboard-text');

document.getElementById('collapse-navbar').addEventListener('click', function () {
    console.log(navItems);
    if (navItems.style.display == 'none' || mobileNavber.style.display == 'none') {
        navItems.style.display = 'block'
        mobileNavber.style.display = 'block';
        dashboardText.style.display = 'block'
    } else {
        navItems.style.display = 'none'
        mobileNavber.style.display = 'none'

        dashboardText.style.display = 'none'
    }
})