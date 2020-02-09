const $hamburger = $('.header__hamburger');
const $cross = $('.header__cross');
const $navbar = $('.header__navbar');
const $arrow = $('.arrow');
const media = window.matchMedia("(min-width: 1200px)");


function hamburgerClick() {
    $hamburger.click(() => {
        $navbar.slideToggle(1000).css("display", "flex");
        $hamburger.css('display', 'none');
    })
}
function crossClick() {
    $cross.click(() => {
        $navbar.slideToggle(1000);
        $hamburger.css('display', 'flex');
    })
}
function navElementClick() {
    $('.header__element').each((index, element) => {
        $(element).click(() => {
            if(!media.matches) {
                $navbar.slideToggle(1000);
                $hamburger.css('display', 'flex');
            }
        })
    })
}
function arrowClick() {
    $($arrow).click(() => {
        $('html, body').animate({scrollTop: 0}, 800);
    })
}
function windowListener() {
    $(window).scroll(()=> {
        if($(this).scrollTop() > 100) {
            $($arrow).fadeIn(300);
        } else {
            $($arrow).fadeOut(300);
        }
    })
    
    $(window).on('resize', ()=> {
        if(media.matches) {
            $($navbar).css("display", "flex").fadeIn(0);
            $hamburger.css('display', 'none');
            
            console.log("ponad")
        } else {
            console.log("poniżej")
            $hamburger.css('display', 'flex');
            $($navbar).fadeOut(0);
        }
    })
}


hamburgerClick();
crossClick();
navElementClick();
arrowClick();
windowListener();

$($arrow).fadeOut(0);
if(media.matches) {
    $($navbar).css("display", "flex").fadeIn(0)
} else {
    $($navbar).fadeOut(0)
}