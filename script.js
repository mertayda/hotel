const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    
};

ScrollReveal().reveal(".section__header", scrollRevealOption);
ScrollReveal().reveal(".header__form", scrollRevealOption);
ScrollReveal().reveal(".section__container", scrollRevealOption);
scrollReveal().reveal(".trending__card", {
    ...scrollRevealOption,
    interval:500,
});


scrollReveal().reveal(".destination__card", {
    duration: 1000,
    interval:500,
});