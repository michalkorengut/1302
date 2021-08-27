class book {
    constructor(Id, Name, Auther, Date, PublishedYear, NumOfLending) {
        this.id = Id;
        this.name = Name;
        this.auther = Auther;
        this.isAvailable = true;
        this.date = Date;
        this.publishedYear = PublishedYear;
        this.numOfLending = NumOfLending;
    }

    bookDetails() {
        return id, name, auther, isAvailable, date, publishedYear, numOfLending;
    }

    lendingBook() {
        if (this.isAvailable == false) {
            alert("הספר כבר מושאל!!!")
            return false;
        }
        for (var i in this.lendingHistory)
            if (this.id == this.lendingHistory[i].id) {
                alert("השאלת ספר זה בעבר!!!")
            }
        this.isAvailable = false;
        return true;
    }
    ReturnBook() {
        this.isAvailable = true;
    }
}

class recipiesBook extends book {
    count = 0;
    constructor(Id, Name, Auther, Date, PublishedYear, NumOfLending, Category, ForAge) {
        super(Id, Name, Auther, Date, PublishedYear, NumOfLending);
        this.moreDetails = Category + ", " + ForAge;
        this.count++;
    }
    BookDetails() {
        return super.BookDetails(), this.moreDetails;
    }
}
class historyBook extends book {
    count = 0;
    constructor(Id, Name, Auther, Date, PublishedYear, NumOfLending, Period, Location) {
        super(Id, Name, Auther, Date, PublishedYear, NumOfLending);
        this.moreDetails = Period + ", " + Location;
        this.count++;

    }
    BookDetails() {
        return super.BookDetails(), this.moreDetails;
    }
}


class subscriber {
    constructor(PassWord, Name, MaxBooks, BooksLended) {
        this.passWord = PassWord;
        this.name = Name;
        this.maxBooks = MaxBooks;
        this.booksLended = BooksLended;
        this.lendingHistory = [];
    }

    addBook(book) {
        if (this.maxBooks > this.booksLended.length) {
            var x = this.booksLended.length;
            if (book.lendingBook() == true) {
                this.booksLended.push(book);
                this.lendingHistory.push(book);
                var dd = new Intl.DateTimeFormat("he-IL");
                this.booksLended[x].date = dd.format(Date.now());
            }
        }
        else {
            alert("Too much books!!!");
        }
    }
    returnMyBook(book) {
        this.booksLended.pop(book);
        book.ReturnBook();
    }

    bookIsLate(bookLendingDate) {
        var sum = (d - (bookLendingDate + 7)) * 1.25;
        if (d > this + 7)
            alert("Time passed, you have a fine of" + " " + Math.round(sum));
    }

    bookSearch(book) {
        for (var i in LendingHistory) {
            if (this.id == LendingHistory[i].id) {
                alert(this.name + " " + "Was lended already");
            }
        }
    }
}