const express = require('express')
const cors = require('cors')
const router = require("./router/router.js")
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', true);
async function connect() {
  try {
    const URI = "mongodb+srv://admin:admin123@cluster0.yutzth2.mongodb.net/ostad_CRUD?retryWrites=true&w=majority"
    await mongoose.connect(URI)
    console.log("Database Connected")
  } catch (error) {
    console.log("Error connecting to database:", error.message)
  }
}
app.use('/api/v1', router)

app.listen(8989, () => {
  connect();
  console.log(`Server is running at http://localhost:${8989}`);
})