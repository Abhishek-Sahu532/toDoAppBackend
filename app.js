const express = require("express");
const app = express();
const todoschema = require("./Schema/inputSchema");

app.use(express.json());


//ROOT NODE //WORKING
app.get("/", (req, res) => {
 return res.send("This is homepage");
});

//ENDPOINT TO GET THE ALL THE TODO'S //WORKING
app.get("/api/todo", async (req, res) => {
  try {
    let todo = await todoschema.find({});
  return  res.status(200).send(todo);
  } catch (e) {
    console.log(e);
    return res.status(404).send(e);
  }
});

//ENDPOINT TO GET THE TODO AS PER THE GIVEN OBJECT ID //working
app.get("/api/todo/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      let todo = await todoschema.findById(_id, req.body);
     return res.status(200).send(todo); 
    } catch (error) {
    return res.status(404).send(error);
    }
  });


//ENDPOINT TO ADD A NEW TODO INTO THE DATABASE //WORKING
app.post("/api/todo", async (req, res) => {
  const newtodo = await new todoschema(req.body);
  if(!req.body.title){
    return res.status(404).json({
      err: 'Title is missing'
    })
  }
  try {
    await newtodo.save();
   return res.status(201).send(newtodo);
  } catch (e) {
    console.log(e);
  return  res.status(400).send(e);
  }
});


//ENDPOINT TO  UPDATE THE TODO AS PER THE GIVEN OBJECT ID.//WORKING
app.put("/api/todo/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let todo = await todoschema.findByIdAndUpdate(_id, req.body);
    await todo.save();
   return res.status(200).send(toto);
  } catch (error) {
  return  res.status(404).send(error);
  }
});


//ENDPOINT TO DELETE THE TODO FROM THE DATABASE. //WORKING
app.delete("/api/todo/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let todo = await todoschema.findByIdAndDelete(_id, req.body);
    await todo.save();
   return res.status(200).send(toto);
  } catch (error) {
 return   res.status(404).send(error);
  }
});




module.exports = app;
