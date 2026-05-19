class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Добавление книги в библиотеку
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Поиск книги по ключу и значению
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    // Выдача книги по названию
    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1); // удаляем книгу из массива
            return book;
        }
        
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание о Шерлоке Холмсе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("releaseDate", 1924)?.name); // Мурзилка

const book = library.giveBookByName("Машина времени");
console.log("Выдали книгу:", book.name);

book.state = 10;        // повредили
book.fix();             // починили
console.log("Состояние после ремонта:", book.state);

library.addBook(book);  // добавляем обратно
console.log("Книг в библиотеке:", library.books.length);