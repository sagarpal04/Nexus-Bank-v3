import db from "../config/db.js";

export function signup(req, res) {
  const { name, email, password, balance } = req.body;
  db.query(
    "INSERT INTO users (name, email, password, balance) VALUES (?,?,?,?)",
    [name, email, password, Number(balance)],
    (err, result) => {
      if (err) {
        console.log(err);
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
      return res.status(404).json({ message: "User not exists" }); // User not found
    }

    const user = result[0]; // Get the first matching user
    if (user.password !== password) {
      return res.status(401).json({ message: "Password incorrect" }); // Incorrect password
    }
    return res.status(200).json({ message: "Login successful" }); // Successful login
  });
}

export function accountInfo(req, res) {
  res.json({ message: "accountInfo" });
}

export function updateAccountInfo(req, res) {
  res.json({ message: "updateAccountInfo" });
}
export function transactionsHistory(req, res) {
  res.json({ message: "transactionsHistory" });
}
export function deleteAccount(req, res) {
  res.json({ message: "deleteAccount" });
}
export function Addtransactions(req, res) {
  res.json({ message: "transactions Add" });
}
