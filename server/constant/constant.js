require("dotenv").config();

const welcomeNote = {
  title: "Code Duniya API",
  Owner: "Mahmood Hassan Rameem",
  developer: "ROL Studio Bangladesh",
  author: "Mahmood Hassan Rameem",
  server_ip: `http://localhost:${process.env.PORT || 5000}`,
};

module.exports = {
  welcomeNote,
};
