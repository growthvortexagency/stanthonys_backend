const bcrypt = require("bcrypt");

const plainPassword = "admin123";

bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }
  console.log("Hashed Password:", hashedPassword);
});