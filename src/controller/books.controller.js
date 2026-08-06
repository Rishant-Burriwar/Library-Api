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

async function updateBook(req,res){
    const modifiedData = req.body;
    const id = Number(req.params.id);
    let response = await Books.findOneAndUpdate(
        {book_id:id},
        {$set:{...modifiedData}},
        {returnDocument:"after",runValidators:true}
    )
    if(response ===null){
        throw new Error("Book not found");
    }
    res.status(200).json({
        success:true,
        message:"Book updated",
        data : response
    })
}

async function deleteBook(req,res){
    let BookId = Number(req.params.id);
    const response = await Books.deleteOne({book_id:BookId});
    if(response.deletedCount === 0){
        throw new Error("Book not found");
    }
    res.status(200).json({
        success:true,
        message :"Book deleted"
    });
}

async function borrowBook(req,res){
    const modifyData = req.body;
    const id = Number(req.params.id);
    const response = await Books.findOne({book_id : id});
    if (response === null){
        throw new Error("Book not found");
    }
    else if(response.status === false){
        throw new Error("Book already in use");
    }
    else{
        res.status(200).json({
            success:true,
            message:"Book borrowed",
            data:response
        })
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
