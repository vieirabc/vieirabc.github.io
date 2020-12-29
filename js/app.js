// Back To Top

let btnHome = document.getElementById("btn-Home");

btnHome.addEventListener("click", backToTop);

function backToTop() {
    $("html, body").animate({ scrollTop: "0" }, 650);
}

// btn Portfolio

let btnHeader = document.getElementById('btn-header');
btnHeader.addEventListener('click', goToPortfolio)

addEventListener('scroll',findPortfolio)

function findPortfolio() {
    //var portfolio = document.getElementById('Portfolio').getBoundingClientRect()['y']
    //console.log(portfolio)
}

function goToPortfolio() {
    let portfolio = document.getElementById('Portfolio').getBoundingClientRect()['y']

    $("html, body").animate({ scrollTop: `${portfolio + 20}` }, 650);

}

// Convert % to px

window.addEventListener('resize', convertToPx)

const widthPolaroid = $('#Contain').width();
let heightPolaroid = document.getElementById('Contain')
heightPolaroid.style.height = 10;

function convertToPx() {
    const widthPolaroid = $('#Contain').width();
    let heightPolaroid = document.getElementById('Contain').style.height

    heightPolaroid = widthPolaroid;
}


// Skills

function scrollAnimation() {
    let heightScroll = $(window).height();
    let lvScroll = document.getElementById('Lv1').getBoundingClientRect()['y'];

    var num = 62.71429443359375

    let topScroll = $(document).scrollTop();

    let elementScroll = lvScroll + topScroll - heightScroll;

    if (topScroll > elementScroll) {
        let widthLv = document.getElementById('Lv1');
        widthLv.style.width = '40%';
        widthLv.style.opacity = 1;
    } else {
        let widthLv = document.getElementById('Lv1');
        widthLv.style.width = '0'
        widthLv.style.opacity = 0;
    }

    if (topScroll > elementScroll + num) {
        let widthLv = document.getElementById('Lv2');
        widthLv.style.width = '20%';
        widthLv.style.opacity = 1;
    } else {
        let widthLv = document.getElementById('Lv2');
        widthLv.style.width = '0'
        widthLv.style.opacity = 0;
    }

    if (topScroll > elementScroll + 2*num) {
        let widthLv = document.getElementById('Lv3');
        widthLv.style.width = '40%';
        widthLv.style.opacity = 1;
    } else {
        let widthLv = document.getElementById('Lv3');
        widthLv.style.width = '0'
        widthLv.style.opacity = 0;
    }

    if (topScroll > elementScroll + 3*num) {
        let widthLv = document.getElementById('Lv4');
        widthLv.style.width = '80%';
        widthLv.style.opacity = 1;
    } else {
        let widthLv = document.getElementById('Lv4');
        widthLv.style.width = '0'
        widthLv.style.opacity = 0;
    }

    if (topScroll > elementScroll + 4*num) {
        let widthLv = document.getElementById('Lv5');
        widthLv.style.width = '60%';
        widthLv.style.opacity = 1;
    } else {
        let widthLv = document.getElementById('Lv5');
        widthLv.style.width = '0'
        widthLv.style.opacity = 0;
    }
}

addEventListener('scroll', scrollAnimation);