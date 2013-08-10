$(function(){
    $("#content table#main a").click(function() {
        var hash = this.hash.slice(1);
        var url="";
        switch (hash) {
            case "01":
                url = "pages/01/01.html";
                break;
            case "02":
                url = "http://www.google.com.hk";
                break;
        }

        $("#content").load(url);
    });
})
