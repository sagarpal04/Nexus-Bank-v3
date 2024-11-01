import db from "../config/db.js";
import { randomUUID } from "crypto"; // Import randomUUID from the crypto module

export function signup(req, res) {
  const { name, email, password, balance } = req.body;
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  db.query(
    "INSERT INTO users (name, email, password, balance) VALUES (?, ?, ?, ?)",
    [formattedName, email, password, Number(balance)],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "User already exists" });
      }
      return res.status(201).json({ message: "User created" });
    }
  );
}

export function login(req, res) {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User does not exist" }); // User not found
    }

    const user = result[0]; // Get the first matching user
    if (user.password !== password) {
      return res.status(401).json({ message: "Password incorrect" }); // Incorrect password
    }
    return res.status(200).json({ message: "Login successful" }); // Successful login
  });
}

export function transactionsHistory(req, res) {
  const { email } = req.query; // Change to req.query if using GET method

  db.query(
    "SELECT * FROM transactions WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database query error" });
      }
      return res.status(200).json({ transactions: result }); // Return all transactions as an array
    }
  );
}

export function accountDetails(req, res) {
  const { email } = req.query; // Use req.query for GET requests

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }
    return res
      .status(200)
      .json({ name: result[0].name, balance: result[0].balance });
  });
}

// export function updateAccountInfo(req, res) {
//   res.json({ message: "Update Account Info" });
// }

// export function deleteAccount(req, res) {
//   res.json({ message: "Delete Account" });
// }

export function addMoney(req, res) {
  const { email, amount, type } = req.body;

  db.query(
    "INSERT INTO transactions ( email, type, date, amount) VALUES (?, ?, ?, ?)",
    [email, type, new Date(), Number(amount)],
    (transactionErr) => {
      if (transactionErr) {
        console.log(transactionErr);
        res.status(500).json({ error: "Error creating transaction entry" });
      } else {
        console.log("Transaction entry created");
        res.json({ message: "Transaction added successfully" });
      }
    }
  );
}
