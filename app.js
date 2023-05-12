const express = require("express");
const app = express();
const todoschema = require("./Schema/inputSchema");

app.use(express.json());


//ROOT NODE //WORKING
app.get("/", (req, res) => {
  res.send("This is homepage");
});

//ENDPOINT TO GET THE ALL THE TODO'S //WORKING
app.get("/api/todo", async (req, res) => {
  try {
    let todo = await todoschema.find({});
    res.status(200).send(todo);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});




//ENDPOINT TO GET THE TODO AS PER THE GIVEN OBJECT ID
app.get("/api/todo/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      let todo = await todoschema.findById(_id, req.body);
      res.status(200).send(todo);
    } catch (error) {
      res.status(404).send(error);
    }
  });



//   app.get("/api/todo/:id", async (req, res) => {
//     try {
//       const todoByID = await todoschema.findById(req.params.id, req.body);
//       res.status(200).send(todoByID);
//     } catch (error) {
//       res.status(500).send(`message: error.message`);
//     }
//   });
  

//ENDPOINT TO ADD A NEW TODO INTO THE DATABASE //WORKING
app.post("/api/todo", async (req, res) => {
  const newtodo = await new todoschema(req.body);
  try {
    await newtodo.save();
    res.status(201).send(newtodo);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});


//ENDPOINT TO  UPDATE THE TODO AS PER THE GIVEN OBJECT ID.//WORKING
app.put("/api/todo/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let todo = await todoschema.findByIdAndUpdate(_id, req.body);
    await todo.save();
    res.status(200).send(toto);
  } catch (error) {
    res.status(404).send(error);
  }
});


//ENDPOINT TO DELETE THE TODO FROM THE DATABASE. //WORKING
app.delete("/api/todo/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let todo = await todoschema.findByIdAndDelete(_id, req.body);
    await todo.save();
    res.status(200).send(toto);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = app;
