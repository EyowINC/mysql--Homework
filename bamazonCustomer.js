//pseudocode my steps.
 // Creating Database 
 // Creating js Node file
 // Query mydata
 // add to data
 // show all my products 


// Mysql lets you connect to databse. read more about npm package. 
var mysql = require("mysql"); 
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("My js file is now connected to the database YAY!");
  
  inquirer
  .prompt([
    {
      name: "item",
      type: "input",
      message: "What is the item you would like to buy?"
    },
    {
      name: "category",
      type: "input",
      message: "how many you like to buy?"
    }
    
  ])
  .then(function(answer) {
    console.log(answer);
showallproducts();

});
})

  // when finished prompting, insert a new item into the db with that info
  // connection.query(
  //   "INSERT INTO auctions SET ?",
  //   {
  //     item_name: answer.item,
  //     category: answer.category,
  //     starting_bid: answer.startingBid,
  //     highest_bid: answer.startingBid
  //   },
  //   function(err) {
  //     if (err) throw err;
  //     console.log("Your auction was created successfully!");
  //     // re-prompt the user for if they want to bid or post
  //     start();
  //   }
  // );

function showallproducts(){
  
  connection.query('SELECT * FROM products', function(err, res){
    if (err)throw err;
    console.log(res);
    connection.end();
  });
};