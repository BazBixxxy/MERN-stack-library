const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Book = require("./models/book.model");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the 9090 server");
});

// add a book
app.post("/api/post", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// reading all books from the database
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// read a particular book from the database by id
app.get("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// updating a particular book from the database
app.put("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) return res.status(404).json({ message: "book not found" });
    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// deleting a particular book for the database
app.delete("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: "book not found" });
    res.status(200).json({ message: `${book} has been deleted` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://BazBixxxy:Kicka$$500@cluster0.i0wfh3z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected to database");

    app.listen(9090, () => {
      console.log("Server listening on port 9090");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
