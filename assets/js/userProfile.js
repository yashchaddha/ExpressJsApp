function logout(){
    $.ajax({
        type: "get",
        url: "/users/logout",
        success: function () {
          console.log("Logged Out Successfully");
          window.location.href = "/users/login";
        },
        error: function (error) {
          console.log(error);
        
        },
      });
}