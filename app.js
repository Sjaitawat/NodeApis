const express =require("express");
const app  = express();
const ck = require("ckey");
const userRouter = require("./api/users/user.routes");
const orderRouter = require('./api/orders/order.routes')
const { checkUserToken } = require('./middleware/tokenValidation')




app.use(express.json());
app.use("/api",userRouter);
app.use("/api", orderRouter);

app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message:"This is rest api is working"
    });
});


app.listen(ck.APP_PORT,()=>{
    console.log("Server is starting at the port number : ",ck.APP_PORT);
});