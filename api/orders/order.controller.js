const { addOrders, getOrdersById} = require("./order.services");
const ck = require("ckey");

module.exports = {
    addOrders: (req,res)=>{
        const body = req.body;
        addOrders(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Internal server Error"
                });
            }
            return res.status(201).json({
                success: 1,
                message : "Order placed successfully.",
                data: body
            });
        });
    },
    getOrdersById : (req,res) => {
        const id = req.id;
        getOrdersById(id,(error,results) =>{
            if(error){
                return res.status(401).json({
                    success : 0,
                    message : "Unauthorized access."
                })
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    }
}