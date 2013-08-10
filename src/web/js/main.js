$(function () {
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });

    $('.marquee').marquee({
        speed: 11000,
        gap: 20,
        delayBeforeStart: 0,
        direction: 'left',
        width: '1920px',
        pauseOnHover: true
    });

    function changeBackground(backgroundClass) {
        $("#content").empty();
        $(document.body).removeClass();
        $(document.body).addClass(backgroundClass);
    }

    function loadMain() {
        changeBackground("body-default");

        $("#content").load("pages/main.html", function () {
            $("#content table#main a").click(function () {
                var hash = this.hash.slice(1);
                switch (hash) {
                    case "01":
                        changeBackground("body-sub01");
                        $("#content").load("pages/01.html", function () {
                            $(".button.back").click(function () {
                                loadMain();
                            });
                        });
                        break;
                    case "02":
                        changeBackground("body-sub02");
                        $("#content").load("pages/02.html", function () {
                            $(".buttons").click(function () {
                                loadMain();
                            });
                        });
                        break;
                    case "03":
                        changeBackground("body-sub03");
                        $("#content").load("pages/03.html", function () {
                            $(".buttons").click(function () {
                                loadMain();
                            });
                        });
                        break;
                    case "04":
                        changeBackground("body-sub04");
                        $("#content").load("pages/04.html", function () {
                            $(".buttons").click(function () {
                                loadMain();
                            });
                        });
                        break;
                }
            });
        });
    }

    $('.button-back').click(function () {
        loadMain();
    });

    loadMain();
})
