
class library{
    constructor(math,english,physics,chemistry){
        this.math=math;
        this.english=english;
        this.physics=physics;
        this.chemistry=chemistry;
    }

    getbooklist(){
        return `The book we have are mention below:
        1.${this.math}
        2.${this.english}
        3.${this.physics}
        4.${this.chemistry}
        `
    }

    issuebook(bookname,user){
        let date=new Date();
        this.bookname=bookname;
        this.user=user;
        if(this.bookname==(this.math|| this.chemistry||this.english||this.physics)){
            return`congratulation your ${this.bookname} book is successfully issue on ${date}.Thank you..`
        }
        else{
            return `The book which you enter not available`;
        }
    }

    returnbook(bookname){
        let date=new Date();

        this.bookname=bookname;
        if(this.bookname==(this.math|| this.chemistry||this.english||this.physics)){
            return`congratulation your ${this.bookname} book is successfully return on ${date}.Thank you..`
        }
        else{
            return `The book which you have entered doesnot match to our database Sorry! Please Try Again`;
        }
    }
}


let Book=new library("Elements of mathematics","English Reader","RDsharma","Elements of Chemistry");

console.log(Book.getbooklist());
console.log(Book.issuebook("Elements of mathematics"));    
console.log(Book.returnbook("Elements of mathematics"))    

// console.log(Book.issuebook("vudvdh"));
// console.log(Book.returnbook("fghjk"))