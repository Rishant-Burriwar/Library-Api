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
    const response = await Books.findOneAndUpdate(
        {book_id : id},
        {$set:{...modifyData}},
        {returnDocument : "after",runValidators:true}
    );
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

async function returnBook(req,res){
    let BookId = Number(req.params.id);
    const modify = req.body
    const response = await Books.findOneAndUpdate(
        {book_id:BookId},
        {$set:{...modify}},
        {returnDocument:true,runValidators:true}
    )
    if(response === null){
        throw new Error("Book not found");
    }
    else if(response.status === true){
        throw new Error("Book already present in library")
    }
    else{
        res.status(200).json({
            success:true,
            message:"Book returned",
            data:response
        });
    }
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
