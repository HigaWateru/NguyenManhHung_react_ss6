class Book {
    id: string
    title: string
    author: string
    stock: number
    status: boolean
    constructor(id: string, title: string, author: string, stock: number, status: boolean) {
        this.id = id
        this.title = title
        this.author = author
        this.stock = stock
        this.status = status
    }
}
class Member {
    id: string
    name: string
    contact: string
    books: Book[] = []
    status: boolean
    constructor(id: string, name: string, contact: string, status: boolean) {
        this.id = id
        this.name = name
        this.contact = contact
        this.status = status
    }
}
class lenderBook {
    memberID: string
    bookID: string
    dueDate: Date
    constructor(memberID: string, bookID: string, date: Date) {
        this.memberID = memberID
        this.bookID = bookID
        this.dueDate = date
    }
}
class Library {
    books: Book[] = []
    members: Member[] = []
    addBook(book: Book): void {
        this.books.push(book)
        console.log(`Đã thêm sách ${book.title}`)
    }
    showBook(): void {
        if(this.books.length == 0) {
            console.log("Không có sách trong thư viện!")
            return
        }
        console.log("Danh sách sách trong thư viện:")
        this.books.forEach(book => console.log(`ID: ${book.id} | Tên sách: ${book.title} | Tác giả: ${book.author} | Số lượng: ${book.stock} | Trạng thái: ${book.status ? "Đang có sẵn" : "Đã mượn"}`))
    }
}
const library = new Library()
library.addBook(new Book("1", "Dế mèn phiêu lưu kí", "Tô Hoài", 5, true))
library.addBook(new Book("2", "Lão Hạc", "Nam Cao", 8, true))
library.addBook(new Book("3", "Sherlock Holmes", "Conan Doyle", 10, false))

library.showBook()