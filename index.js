/**
 * @author Bhargab Nath 08 March 2023
 */

const express = require("express");

const app = express();

app.use(express.json());

app.use("/v0/rtc-token", require("./routes/agora"));

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});