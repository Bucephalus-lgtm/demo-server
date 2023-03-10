/**
 * @author Bhargab Nath 08 March 2023
 */

const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

app.use("/v0/rtc-token", require("./routes/agora"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});