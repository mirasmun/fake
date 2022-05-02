document.addEventListener("DOMContentLoaded", function(){
    
    //---------------- Cheque.html ----------------//
    // Navigations
    $(".wrapper .header .menu-btn").on("click", function(){
        document.location = "https://kaspi.kz/"
    })

    // Buttons for show/hide cheque modal box
        $("div[data-show-cheque]").on("click", () => {
        $("div[data-modal-box]").css({"display": "flex"})
        // display: flex
    })
    $(".wrapper .main_cheque__container .close__container").on("click", () => {
        $(".wrapper .main_cheque__container").css({"display": "none"})
        // display: none
    })

    // Navigations
    $(".wrapper .turn__back").on("click", function(){
        document.location = "https://kaspi.kz/"
    })
})