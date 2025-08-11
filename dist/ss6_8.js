"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.books = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class lenderBook {
    constructor(memberID, bookID, date) {
        this.memberID = memberID;
        this.bookID = bookID;
        this.dueDate = date;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách ${book.title}`);
    }
    showBook() {
        if (this.books.length == 0) {
            console.log("Không có sách trong thư viện!");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => console.log(`ID: ${book.id} | Tên sách: ${book.title} | Tác giả: ${book.author} | Số lượng: ${book.stock} | Trạng thái: ${book.status ? "Đang có sẵn" : "Đã mượn"}`));
    }
}
const library = new Library();
library.addBook(new Book("1", "Dế mèn phiêu lưu kí", "Tô Hoài", 5, true));
library.addBook(new Book("2", "Lão Hạc", "Nam Cao", 8, true));
library.addBook(new Book("3", "Sherlock Holmes", "Conan Doyle", 10, false));
library.showBook();
