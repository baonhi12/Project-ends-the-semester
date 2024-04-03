// document.querySelector("#book-id").addEventListener("keypress", function(evt) {
//     // Lấy giá trị hiện tại của trường văn bản
//     var currentValue = this.value;

//     // Kiểm tra nếu đã nhập đủ 4 ký tự số
//     if (currentValue.length === 4) {
//         evt.preventDefault(); // Ngăn chặn thêm ký tự mới
//         return; // Dừng việc kiểm tra tiếp
//     }
//     // Kiểm tra ký tự nhấn có phải là số từ 0 đến 9 không
//     if (evt.which !== 46) {
//         if (evt.which < 48 || evt.which > 57) {
//             evt.preventDefault();
//         }
//     }
// });

document.querySelector("#book-name").onkeypress = function(e) {
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    
    if (/\d/.test(charStr)) {
        return false;
    }
};

// document.querySelector("#book-num").addEventListener("keypress", function(evt) {
//     if (evt.which < 48 || evt.which > 57) {
//         evt.preventDefault();
//     }
// });

document.querySelector("#book-price").addEventListener("keypress", function(evt) {
    if (evt.which !== 46) //kiểm tra xem ký tự được nhấn có phải là dấu chấm theo mã ascii
    { 
        if (evt.which < 48 || evt.which > 57) //thuộc vào khoảng mã ASCII của các số từ 0 đến 9
        {
            evt.preventDefault();
        }
    }
});


function clear_inputs()
{
    document.getElementById("book-name").value = '';
    document.getElementById("book-num").value = '';
    document.getElementById("book-price").value = '';
}

var book_list = [];

function submit_form()
{
    var book_name = document.getElementById("book-name").value;
    var book_num = document.getElementById("book-num").value;
    var book_price = document.getElementById("book-price").value;

    if (book_name.length == 0 || book_num == 0 || book_price == 0)
    {
        alert("Không hợp lệ");
    }  
    else
    {
        var existingList = JSON.parse(localStorage.getItem("book_list")) || [];

        var newProd = { name: book_name, num: book_num, price: book_price};
        existingList.push(newProd);

        alert("Đã lưu danh sách book vào trang Xem!");

        document.getElementById("book-name").value = '';
        document.getElementById("book-num").value = '';
        document.getElementById("book-price").value = '';
    
        localStorage.setItem("book_list", JSON.stringify(existingList));
        book_list = [];
    }
}