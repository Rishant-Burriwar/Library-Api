import { Books } from "../models/booksModel.js";

async function getAllBooks(req,res){
    let bookdata = await Books.find();
    if(bookdata.length === 0){
        throw new Error("Book Data is Empty");
    }
    res.json({
        success :true,
        message : "Books Fetched Successfully",
        data :bookdata
    })
}

async function getBookById(req,res){
    let BookId = Number(req.params.id);
    const bookdata = await Books.findOne({book_id:BookId})
    if(!bookdata){
        throw new Error("Book not found");
    }
    res.status(200).json({
        success:true,
        message:"Book fetched",
        data:bookdata
    });
}

async function createBook(req,res){
    const bookdata = req.body;
    await Books.create(bookdata);
    res.status(201).json({
        success:true,
        message:"Book created",
        data:bookdata
    });
}

function updateBook(req,res){
    let BookId = Number(req.params.id);
    const newBookObj = req.body
    let bookIndex = books.findIndex((obj)=>obj.id===BookId)
    if(bookIndex===-1){
        return res.status(404).json({
            message:"Books not found"
        });
    }
    books[bookIndex] = {...books[bookIndex],...newBookObj};
    res.status(200).json({
        message:"Book Updated Successfully",
        Updated_Book : books[bookIndex]
    })
}

function deleteBook(req,res){
    let BookId = Number(req.params.id);
    let bookIndex = books.findIndex((obj)=>obj.id===BookId)
    if(bookIndex===-1){
        return res.status(404).json({
            message:"Books not found"
        });
    }
    books.splice(bookIndex,1);
    res.status(200).json({
        message:"Book Deleted Successfully",
    })
}

function borrowBook(req,res){
    let BookId = Number(req.params.id);
    let bookIndex = books.findIndex((obj)=>obj.id===BookId)
    if(bookIndex===-1){
        return res.status(404).json({
            message:"Books not found"
        });
    }
    if(books[bookIndex].available === false){
        return res.status(400).json({
            message : "Book is already in use"
        });
    }
    else{
        books[bookIndex].available = false
        res.status(200).json({
            message :"Book borrowed successfully",
            bookObj : books[bookIndex]
        });
    }
}

function returnBook(req,res){
    let BookId = Number(req.params.id);
    let bookIndex = books.findIndex((obj)=>obj.id===BookId)
    if(bookIndex===-1){
        return res.status(400).json({
            message:"Books not found"
        });
    }
    if(books[bookIndex].available === true){
        return res.status(400).json({
            message : "Book already returned"
        });
    }
    books[bookIndex].available =true
    res.status(200).json({
        message :"Book returned successfully",
        bookObj : books[bookIndex]
    });
}

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook
}
