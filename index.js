// const mongoose = require('mongoose')
// const express = require('express');
// const TODo = require("./Note.model.js")
// const app = express();

// // const Uri = "mongodb+srv://dinukanth:Dinu2002@cluster0.xjdfv1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// mongoose.connect("mongodb+srv://janujahsivarattinam:Janu1216@cluster0.mhrv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch((error) => {
//         console.log("Connection failed!", error);
//     });

//     app.listen(3000, () => {
//     console.log("Server is running on port 3000");
//     });
    
    
// app.post('/create', async (req, res) => {
//     try {
//       const toDo = new TODo(req.body);
//       await toDo.save();
//       res.status(201).send(toDo);
//     } catch (error) {
//       res.status(400).send(error);
//     }
    
// });


const Mongoose = require('mongoose');
const express = require('express');
const ToDo = require("./Note.model.js");
const User = require("./user.js")
const app = express();
app.use(express.json());
Mongoose.connect("mongodb+srv://dinukanth:Dinu2002@cluster0.xjdfv1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("You are connected");
 })
 .catch((error)=>{
    console.log("Connection failed",error)
 });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.post('/create', async (req, res) => {
    try {
      const toDo = new ToDo(req.body);
      await toDo.save();
      res.status(201).send(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
});


app.get('/view', async (req, res) => {
    try {
      const toDo = await ToDo.find();
        res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });


   app.get('/view/:id', async (req, res) => {
    try {
      const toDo = await ToDo.findById(req.params.id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  app.put('/list/update/:id', async (req, res) => {
    try {
      const {id} = req.params
      await ToDo.findByIdAndUpdate(id, req.body);
      const toDo = await ToDo.findById(id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });


   app.delete('/list/:id', async (req,res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      if (!ToDo.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(200).json(await ToDo.findById(id));
      console.log("Deleted")
    }
    catch (error){
      res.status(400).send(error)
    }
   });


//    ----------USER---------

   app.post('/User/create', async (req, res) => {
    try {
      const User = new User(req.body);
      await User.save();
      res.status(201).send(User);
    } catch (error) {
      res.status(400).send(error);
    }
});


app.get('/view', async (req, res) => {
    try {
      const User = await User.find();
        res.status(200).json(User);
    } catch (error) {
      res.status(400).send(error);
    }
   });


   app.get('/view/:id', async (req, res) => {
    try {
      const User = await User.findById(req.params.id);
      res.status(200).json(User);
    } catch (error) {
      res.status(400).send(error);
    }app.post('/create', async (req, res) => {
        try {
          const toDo = new ToDo(req.body);
          await toDo.save();
          res.status(201).send(toDo);
        } catch (error) {
          res.status(400).send(error);
        }
    });
    
    
    app.get('/view', async (req, res) => {
        try {
          const toDo = await ToDo.find();
            res.status(200).json(toDo);
        } catch (error) {
          res.status(400).send(error);
        }
       });
    
    
       app.get('/view/:id', async (req, res) => {
        try {
          const toDo = await ToDo.findById(req.params.id);
          res.status(200).json(toDo);
        } catch (error) {
          res.status(400).send(error);
        }
      });
    
    
      app.put('/list/update/:id', async (req, res) => {
        try {
          const {id} = req.params
          await ToDo.findByIdAndUpdate(id, req.body);
          const toDo = await ToDo.findById(id);
          res.status(200).json(toDo);
        } catch (error) {
          res.status(400).send(error);
        }
       });
    
    
       app.delete('/list/:id', async (req,res) => {
        try {
          await ToDo.findByIdAndDelete(req.params.id);
          if (!ToDo.findByIdAndDelete(req.params.id)) {
            res.status(404).send({message: "not found"})
          }
          res.status(200).json(await ToDo.findById(id));
          console.log("Deleted")
        }
        catch (error){
          res.status(400).send(error)
        }
       });
    
  });


  app.put('/list/update/:id', async (req, res) => {
    try {
      const {id} = req.params
      await User.findByIdAndUpdate(id, req.body);
      const User = await User.findById(id);
      res.status(200).json(User);
    } catch (error) {
      res.status(400).send(error);
    }
   });


   app.delete('/list/:id', async (req,res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      if (!User.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(200).json(await User.findById(id));
      console.log("Deleted")
    }
    catch (error){
      res.status(400).send(error)
    }
   });

