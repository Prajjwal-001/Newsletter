const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const client = require("@mailchimp/mailchimp_marketing");
const https = require("https"); 
const app = express();

client.setConfig({apiKey: "b02935c4b5fed0008cf3b734a39cc635-us17", server: "us17",});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
});

app.post("/",function(req,res){
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const subscribingUser = {
        firstName: firstName, 
        lastName: lastName, 
        email: email
    }

    const run = async () => {
        const response = await client.lists.addListMember("754550e04e", {
          email_address: subscribingUser.email,
          status: "subscribed",
          merge_fields: {
              FNAME: subscribingUser.firstName,
              LNAME: subscribingUser.lastName
          }
        }).then(
            (value) =>{
                console.log("Successfully added contact as an audience member.");
                res.sendFile(__dirname + "/success.html");
            },
            (reason) =>{
                res.sendFile(__dirname + "/failure.html");
            },
        );
      };
      run();
});

app.post("/failure",function(req,res){
    res.redirect("/signup.html")
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});


//b02935c4b5fed0008cf3b734a39cc635-us17
//754550e04e
