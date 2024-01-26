require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const User = require('./models/User');
const Basket = require('./models/Basket');
const Device = require('./models/Device');
const Rating = require('./models/Rating');
const Type = require('./models/Type');
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleWare");

app.use("/api/v1/", router);
app.use(cors());
app.use(express.json());

// last middleware
app.use(errorHandler);

app.get("/", (req, res) => {
    res.status(200).json({message:"WORKING!"});
});


(() => {
    User.hasMany(Rating);
    Rating.belongsTo(User);
    Type.hasMany(Device);
    Device.belongsTo(Type);
    User.hasOne(Basket);
    Basket.belongsTo(User);
})();

(async () => {
    try {
        await sequelize.authenticate(); // connect to DB
        await sequelize.sync()
            .then(() => {
                console.log("tables are created");
                app.listen(PORT, () => console.log(`server started on port ${PORT}`));
            })
            .catch(err => {
                console.error('error with creating tables:', err);
            });
    } catch (e){
        console.log(e);
    }
})();
