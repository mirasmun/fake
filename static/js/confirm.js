document.addEventListener("DOMContentLoaded", function(){
    //---------------- Confirm.html ----------------//
    // Navigations
    $(".wrapper .header .back-to-pay").on("click", function(){
        document.location = "/"
    })

    $("div[data-next-page]").on("click", function(){
        document.location = "/cheque"
    })

})