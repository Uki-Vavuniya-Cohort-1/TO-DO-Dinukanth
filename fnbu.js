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
