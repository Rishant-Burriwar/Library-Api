import books from "../data/data.js";

function getAllBooks(req,res){
    res.status(200).json({
        message:"Fetched successfully",
        books
    });
}

function getBookById(req,res){
    let BookId = Number(req.params.id);
    let result = books.find((obj)=>obj.id===BookId)
    if(result===undefined){
        return res.status(404).json({
            message:"Books not found"
        });
    }
    else{
        res.status(200).json({
            message:"Book found",
            result
        });
    }
}

function createBook(req,res){
    const bookObj = {id:books.length+1,available:true,...req.body}
    books.push(bookObj)
    res.status(201).json({
        message:"Book created",
        bookObj
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
