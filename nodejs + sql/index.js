const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '22137343'
});
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

//inseerting new data
// let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

//inserting in bulking
// let data = [];
// for(let i=0;i<=100;i++){
//     data.push(getRandomUser());
// }


// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }
// connection.end();



//Home route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in db")
    }
});


//show route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            //res.send(result);
            res.render("showusers.ejs",{users});
        });
    } catch (err) {
        console.log(err); 
        res.send("some error in db")
    }

});

//edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log();

            res.render("edit.ejs",{user});
        });
    } catch (err) {
        console.log(err); 
        res.send("some error in db")
    }
});


//UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {password:formPass,username:newUsername} = req.body;  
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass!= user.password){
                res.send("WRONG password");
            }else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id ='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err); 
        res.send("some error in db")
    }
})

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});
