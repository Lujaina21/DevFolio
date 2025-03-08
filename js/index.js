let abtSection = $("#about").offset().top;

// ******[Color Navbar, Fixed Arrow Icon] on scroll******//
$(window).scroll(function () {
    let windowOffset = $(window).scrollTop();
    if (windowOffset > abtSection - 200) {
        $(".navbar").css({ backgroundColor: "rgba(0,0,0,0.9)" });
        $(".navbar").css({ padding: "0 30px" });
        $(".fixed-arrow").fadeIn(200);
    } else {
        $(".navbar").css({ backgroundColor: "transparent" });
        $(".navbar").css({ padding: "0" });
        $(".fixed-arrow").fadeOut(200);
    }
})

$(".fixed-arrow").click(function () {
    $("html,body").animate({ scrollTop: "0" }, 200)
})
