
function register() {

    let name = document.querySelector("#exampleInputName").value;
    let email = document.querySelector("#exampleInputEmail").value;
    let password = document.querySelector("#exampleInputPassword").value;

    if (name == "" || email == "" || password == "") {
        return alert("Fill the form to continue");
    }

    let data = {
        "name" : name,
        "email" : email,
        "password" : password
    };

    $.ajax({
        type: "POST",
        url: "/",
        contentType : 'application/json',
        dataType: "json",
        data : JSON.stringify(data),
        success: function(data) {

            console.log(data); 
        },

        error: function(err) {

            console.log(err);
          
        }
    });

}