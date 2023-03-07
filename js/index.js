const navItems = document.getElementById('lg-navbar');
const mobileNavber = document.getElementById('mobile-manuber');
const morebtn = document.getElementById('collapse-navbar');
const dashboardText = document.getElementById('dashboard-text');



document.getElementById('collapse-navbar').addEventListener('click', function () {
    console.log(navItems);
    if (navItems.style.display == 'none' || mobileNavber.style.display == 'none') {
        navItems.style.display = 'block'
        mobileNavber.style.display = 'block';
        dashboardText.style.display = 'block'
        dashboardText.classList.remove('d-none');

    } else {
        navItems.style.display = 'none'
        mobileNavber.style.display = 'none'

        dashboardText.style.display = 'none'
        dashboardText.classList.add('d-none');
    }
})


// dashboard
document.getElementById('dashboard-btn').addEventListener('click', function () {

    window.location.href = '../index.html'

})
// t-card 
document.getElementById('t-card-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/t-card.html'

})
// biz-card
document.getElementById('biz-card-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/biz-card.html'

})
// enquiries-btn
document.getElementById('enquiries-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/enquiries.html'

})
// appointments-btn
document.getElementById('appointments-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/appointments.html'

})
// nfc-card-btn
document.getElementById('nfc-card-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/nfc-card.html'

})
// scan-btn
document.getElementById('scan-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/scan.html'

})
// contact-list-btn
document.getElementById('contact-list-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/contact.html'

})
// dashboard icon
document.getElementById('dashboard-icon-btn').addEventListener('click', function () {

    window.location.href = '../index.html'

})
// t-card icon
document.getElementById('t-card-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/t-card.html'

})
// biz-card icon
document.getElementById('biz-card-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/biz-card.html'

})
// enquiries-btn icon
document.getElementById('enquiries-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/enquiries.html'

})
// appointments-btn icon
document.getElementById('appointments-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/appointments.html'

})
// nfc-card-btn icon
document.getElementById('nfc-card-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/nfc-card.html'

})
// scan-btn icon
document.getElementById('scan-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/scan.html'

})
// contact-list-btn icon
document.getElementById('contact-list-icon-btn').addEventListener('click', function () {


    window.location.href = '../other-pages/contact.html'
})