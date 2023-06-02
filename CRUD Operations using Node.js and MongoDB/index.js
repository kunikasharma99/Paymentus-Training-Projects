const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/lib");
const BooksSchema = new mongoose.Schema({
  name: String,
  pages: Number,
  price: Number,
});

const saveInDB = async () => {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/lib");
  //   const BooksSchema = new mongoose.Schema({
  //     name: String,
  //     pages: Number,
  //     price: Number,
  //   });
  //   const BooksModel = mongoose.model("books", BooksSchema);
  const Books = mongoose.model("books", BooksSchema);
  let data = new Books({
    name: "The Complete PYTHON Book",
    pages: 300,
    price: 700,
  });
  const result = await data.save();
  console.log(result);
};

saveInDB();

const updateInDB = async () => {
  const Books = mongoose.model("books", BooksSchema);
  let data = await Books.updateOne(
    { name: "Complete Node.js Course" },
    {
      $set: { pages: 100, name: "Node.js Course" },
    }
  );
  console.log(data);
};

updateInDB();

const deleteInDB = async () => {
  const Books = mongoose.model("books", BooksSchema);
  let data = await Books.deleteOne({ name: "The Complete PYTHON Book" });
  console.log(data);
};

deleteInDB();

const findInDB = async () =>{
    const Books = mongoose.model("books", BooksSchema);
    let data = await Books.find({ name: "Full C++ Course" });
    console.log(data);
}
findInDB();
