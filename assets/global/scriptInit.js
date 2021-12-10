let userStatus = false
let guestStatus = false
$("#userButton").click(function (event) {
    userStatus = true
    $("#role").css("display", "none");
    $("#backButton").css("display", "block");
    $("#roleUser").css("display", "flex");
})

$("#guestButton").click(function (event) {
    $("#role").css("display", "none");
    $("#backButton").css("display", "block");
    $("#roleGuest").css("display", "flex");
    $("#top-rowz").css("display", "none");
    if (guestStatus===false){
        getJadwal()
    }
    guestStatus = true

    
})

$("#backButton").click(function (event) {
    userStatus = false
    $("#role").css("display", "flex");
    $("#backButton").css("display", "none");
    $("#roleGuest").css("display", "none");
    $("#roleUser").css("display", "none");
    $("#top-rowz").css("display", "flex");

})
