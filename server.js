const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const adminRoutes = require("./routes/adminRoutes");
require("dotenv").config();
const db = require("./config/db");

const app = express();
const applicationRoutes = require("./routes/applicationRoutes");

app.use(cors({ origin: "https://stanthonys.edu.in", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/application", applicationRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
