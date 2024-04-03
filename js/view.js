function load_info() {
    var books = JSON.parse(localStorage.getItem("book_list"));

    if (books === null || books.length === 0) {
        alert("Không tìm được thông tin sách");
        //location.href = "enter.html";  // Redirect to the enter page if no data found
    } else {
        showProdList(books);
    }
}

function showProdList(books) {
    $('#book-list').empty();
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var row = `<tr>
                        <td>${book.name}</td>
                        <td>${book.num}</td>
                        <td>${book.price}</td>
                        <td>
                            <button class="edit-btn" onclick="editProduct(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button class="delete-btn" onclick="deleteProduct(${i})"><i class="fa-solid fa-xmark"></i></button>
                        </td>
                    </tr>`;
        $('#book-list').append(row);
    }
}

function editProduct(index) {
    var books = JSON.parse(localStorage.getItem("prod_list"));
    var book = books[index];

    // var newID = prompt("Nhập mã mới", book.id);
    var newName = prompt("Nhập tên mới", book.name);
    var newNum = prompt("Nhập số lượng mới", book.num);
    var newPrice = prompt("Nhập giá mới", book.price);

    // // Validate input for newID
    // if (!/^[a-zA-Z0-9]{0,6}$/.test(newID)) {
    //     alert("Mã chỉ được chứa chữ cái hoặc số và không quá 6 ký tự.");
    //     return;
    // }

    // Validate input for newName
    if (!/^[\p{L}\s]+$/u.test(newName)) {
        alert("Tên chỉ được chứa chữ cái.");
        return;
    }

    // Validate input for newNum and newPrice
    if (!/^\d+$/.test(newNum) || !/^\d+$/.test(newPrice)) {
        alert("Số lượng và giá chỉ được chứa số.");
        return;
    }

    // Kiểm tra nếu người dùng không hủy bỏ
    if (newName !== null && newNum !== null && newPrice !== null) {
        // Cập nhật giá trị mới
        book.name = newName;
        book.num = newNum;
        book.price = newPrice;

        // Lưu lại vào localStorage
        localStorage.setItem("prod_list", JSON.stringify(books));

        // Cập nhật danh sách
        showProdList(books);
    }
}

// Hàm xóa sản phẩm
function deleteProduct(index) {
    var books = JSON.parse(localStorage.getItem("book_list"));
    books.splice(index, 1); // Xóa sản phẩm tại vị trí index
    localStorage.setItem("book_list", JSON.stringify(books));
    showProdList(books); // Cập nhật danh sách sau khi xóa
}