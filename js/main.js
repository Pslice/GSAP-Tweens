window.onload = function () {
    var menuCircle = document.getElementById("menu-circle");

    TweenMax.from(menuCircle, 2, {
        scale: 0.5,
        opacity: 0.1
    });
    TweenMax.to(menuCircle, 5, {
        scale: 1,
        opacity: .8,
    });
}