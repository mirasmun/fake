document.addEventListener("DOMContentLoaded", function(){
    
    //---------------- Pay.html ----------------//

    // Маски для input'ов
    $(function(){
        $("input[type=tel]").mask("+7 (999) 999-99-99");
        $("input[data-money-input]").maskMoney({suffix: " ₸", decimal: "", thousands: " ", precision: 0});
    });


    // Message buttons
    let messages = document.querySelectorAll(".wrapper .messages .item"),
        message_input = document.querySelector("input[data-message-input]")

    for(let message in [0, 1, 2]){
        messages.item(message).addEventListener("click", function(e) {
            let message_value = e.target.outerText
            message_input.value = message_value
        })
    }


    // Send button
    let money_input = document.querySelector("input[data-money-input]"),
        send_button = document.querySelector(".wrapper .send-button__container input[type=submit]")

    money_input.addEventListener("keydown", function(e){
        setTimeout(function(){
            console.log(send_button.value)
            send_button.value = `ПЕРЕВЕСТИ ${e.target.value}`
        }, 1)
    })


    
    // Navigations
    $(".wrapper .header .back-btn").on("click", function(){
        document.location = "https://kaspi.kz/"
    })

})