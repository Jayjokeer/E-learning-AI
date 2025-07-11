const express = require("express");
require('dotenv').config();
const {mongoConnection} = require("./db");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user/", userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || "Something went wrong" });
});

app.listen(PORT, async()=>{
    await mongoConnection()
    console.log(`server running on port ${PORT}`);
})