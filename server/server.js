const mongoose = require('mongoose');
const app = require('./app.js');
const port = process.env.PORT || 8080;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.fagut8i.mongodb.net/Savaari",
{useNewUrlParser: true})
.then(() => console.log("Successfully connect to DB"))
.catch(() => console.log("An error occured while connecting to the DB"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});