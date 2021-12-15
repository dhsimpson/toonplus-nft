const express = require("express");
const app = express();
const cors = require('cors');
const port = 10002;
const rootRouter = express.Router();
const manageRouter = require("./routes/manage");
const tradeRouter = require("./routes/trade");
const lookUpRouter = require("./routes/lookUp");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/nft', rootRouter);
rootRouter.use('/manage', manageRouter);
rootRouter.use('/trade', tradeRouter);
rootRouter.use('/look-up', lookUpRouter);

app.listen(port, () => {
    console.log(`nft api server is listening at http://localhost:${port}`);
});