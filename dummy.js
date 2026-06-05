// Importing or requiring dependencies
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// Middleware and using JSON
const server = express();
server.use(cors());
server.use(express.json());

// MySQL Pool Configuration
const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "fsd_todolist"
});

// Add todo (C - Create)
server.post("/api/create/todo", async (req, res) => {
  try {
    const { todo } = req.body;
    await database.query(
      "INSERT INTO todos (label, completed) VALUES (?, ?)",
      [todo, false]
    );
    res.status(200).json({ message: "Todo added successfully! 🥳" });
  } catch (error) {
    console.log("Failed to add todo:\n" + error);
    res.status(500).json({ message: "Server error 💀" });
  }
});

// Get todos (R - Read)
server.get("/api/read/todos", async (req, res) => {
  try {
    const [todos] = await database.query(
      "SELECT * FROM todos"
    );
    if (todos.length > 0) {
      res.status(200).json(todos);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.log("Failed to read todos:\n" + error);
    res.status(500).json({ message: "Server error 💀" });
  }
});

// Edit todo (U - Update)
server.put("/api/update/todo/:id", async (req, res) => {
  try {
    const { edited_label, completed } = req.body;
    const [isTodoExists] = await database.query(
      "SELECT * FROM todos WHERE id = ?",
      [req.params.id]
    );
    if (isTodoExists.length > 0) {
      await database.query(
        "UPDATE todos SET label = ?, completed = ? WHERE id = ?",
        [edited_label, completed, req.params.id]
      );
    } else {
      res.status(200).json({ message: "Todo not found 😿" });
    }
  } catch (error) {
    console.log("Failed to update todo:\n" + error);
    res.status(500).json({ message: "Server error 💀" });
  }
});

// Delete todo (D - Delete)
server.delete("/api/delete/todo/:id", async (req, res) => {
  try {
    const [isTodoExists] = await database.query(
      "SELECT * FROM todos WHERE id = ?",
      [req.params.id]
    );
    if (isTodoExists.length > 0) {
      await database.query(
        "DELETE FROM todos WHERE id = ?",
        [req.params.id]
      );
    } else {
      res.status(200).json({ message: "Todo not found 😿" });
    }
  } catch (error) {
    console.log("Failed to delete todo:\n" + error);
    res.status(500).json({ message: "Server error 💀" });
  }
});

// Listening on PORT 5500
server.listen(5500, (error) => {
  if (error) throw error;
  console.log("✅ Server started on PORT: 5500");
});
