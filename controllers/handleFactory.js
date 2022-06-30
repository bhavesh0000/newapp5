
exports.createOne = Model => async (req, res, next) => {
      try{
        console.log("hell");
    const doc = await Model.create(req.body);
    console.log(doc);

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });
  }catch(err){
    res.status(400).json({
        status: 'fail',
        message: err.message
      }); 
}
  };

exports.getOne = (Model, popOptions) =>
  async (req, res, next) => {
      try{
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if(!doc){
      return next(new AppError("There is document with this id",404))
    }

    res.status(200).json({
      status: 'success',
      data: {
         doc
      }
    });
}catch(err){
    res.status(400).json({
        status: 'fail',
        message:err.message
      }); 
}
  };


exports.getAll = (Model, popOptions) => async (req, res, next) => {
      try{
        let query = Model.find();
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    
    
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        doc
      }
    });
}catch(err){
    res.status(400).json({
        status: 'fail',
        message: err.message
      }); 
}
  };