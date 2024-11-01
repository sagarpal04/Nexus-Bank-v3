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

// Function to delete a user account
export function deleteAccount(req, res) {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "Email is incorrect" });
    }

    const user = results[0];

    // Compare the provided password with the stored password
    if (user.password !== password) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    // Proceed to delete the account
    db.query("DELETE FROM users WHERE email = ?", [email], (err) => {
      if (err) {
        return res.status(500).json({ message: "Database query error" });
      }
      return res.status(200).json({ message: "Account deleted" });
    });
  });
}

// Function to delete user transactions
export function deleteAccountTransactions(req, res) {
  const { email } = req.body;

  db.query("DELETE FROM transactions WHERE email = ?", [email], (err) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }
    return res.status(200).json({ message: "Transactions deleted" });
  });
}

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

export function updateBalance(req, res) {
  const { email, amount } = req.body;
  db.query(
    "UPDATE users SET balance = ? WHERE email = ?",
    [amount, email],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating balance" });
      } else {
        console.log("Balance updated");
        res.json({ message: "Balance updated successfully" });
      }
    }
  );
}
export function transferTo(req, res) {
  const { email, amount, user } = req.body;

  // Check if the user exists before proceeding
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error checking user" });
    }

    if (results.length === 0) {
      // User not found
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user has sufficient balance
    db.query(
      "SELECT balance FROM users WHERE email = ?",
      [user],
      (err, userResults) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Error fetching user balance" });
        }

        const currentBalance = userResults[0]?.balance || 0;
        if (currentBalance < amount) {
          return res.status(400).json({ message: "Insufficient balance." });
        }

        // Proceed with transaction if user exists and has sufficient balance
        db.query(
          "INSERT INTO transactions (email, type, date, amount) VALUES (?, ?, ?, ?)",
          [email, "DEPOSIT", new Date(), Number(amount)],
          (transactionErr) => {
            if (transactionErr) {
              console.log(transactionErr);
              return res
                .status(500)
                .json({ error: "Error creating transaction entry" });
            }
          }
        );

        db.query(
          "UPDATE users SET balance = balance + ? WHERE email = ?",
          [amount, email],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Error updating balance" });
            }
          }
        );

        // Withdraw from the sender's account
        db.query(
          "INSERT INTO transactions (email, type, date, amount) VALUES (?, ?, ?, ?)",
          [user, "WITHDRAWAL", new Date(), Number(amount)],
          (transactionErr) => {
            if (transactionErr) {
              console.log(transactionErr);
              return res
                .status(500)
                .json({ error: "Error creating transaction entry" });
            }
          }
        );

        db.query(
          "UPDATE users SET balance = balance - ? WHERE email = ?",
          [amount, user],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Error updating balance" });
            } else {
              return res.json({
                message: "Transaction added successfully and balance updated",
              });
            }
          }
        );
      }
    );
  });
}
