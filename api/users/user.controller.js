const { sign, JsonWebTokenError } = require("jsonwebtoken");
const ck = require("ckey");
const { hashSync, genSaltSync, compareSync  } = require("bcrypt");
// const { addUser, getUserByPhNo } = require("./user.service");
const { addUser, getUserByPhNo } = require('./user.services')

module.exports = {
    addUser: (req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.psswd = hashSync(body.psswd,salt);
        addUser(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(409).json({
                    success: 0,
                    message: "User already exists."
                });
            }
            return res.status(201).json({
                success: 1,
                results : results,
                data: body
            });
        });
    },
    login: (req,res) => {
        const body = req.body;
        getUserByPhNo(body.phNo,(err,results) => {
            if(err) { 
                console.log(err);
            }
            if(results == ""){
                return res.status(400).json({
                    success : 0,
                    message : "Please enter correct phone no. or password."
                });
            }
            const result = compareSync(body.psswd,results.psswd);
            if(result){
                results.psswd = undefined;
                const jsontoken = sign({result : results.id}, ck.USER_SECRET);
                return res.status(200).json({
                    success : 1,
                    message : "login successful",
                    token : jsontoken
                });
            }
        });
    },}