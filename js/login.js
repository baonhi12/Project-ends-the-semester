function login(event)
{
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(username == '')
    {
        alert("Bạn vui lòng nhập tên!");
    }
    else if(password == '')
    {
        alert("Bạn vui lòng nhập mật khẩu!");
    }

    else
    {
        if (username == "u@gmail.com" && password == "user")
        {
            alert("Login successful. Hello user!");

            window.location.href = "home.html?role=user";
            localStorage.setItem("role", "user");
            // location.href = "home.html";
        }
        else if (username == "a@gmail.com" && password == "admin")
        {
            alert("Login successful. Hello admin!");

            window.location.href = "home.html?role=admin";
            localStorage.setItem("role", "admin");
            // location.href = 'home.html';
        }
        // else if (username == "" && password == "")
        // {
        //     alert("Hello visitor!");

        //     window.location.href = "home.html?role=visitor";
        //     localStorage.setItem("role", "visitor");
        //     // location.href = 'home.html';
        // }
        else 
        {
            alert("Tên đăng nhập hoặc mật khẩu không hợp lệ");
        }
    }
}