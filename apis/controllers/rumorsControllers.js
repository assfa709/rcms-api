//Imports the Rumors model from the models directory. 
// This model defines the schema/structure for rumors in the database.
const Rumors = require("../models/Rumors");

//Gets all rumors from the database
const getAllRumours = async(req, res) => {
    try {
      const rms = await Rumors.find(); //Mongoose method to fetch all documents
      res.json(rms);                   //Sends the rumors as JSON response
    } catch (error) {
      console.log(error);
      res.status(500).send("internal sever error"); 
    }
};

//Gets a single rumor by ID
const getRumorsById = async (req, res) => {
  try {
    const id = req?.params.id;     //Optional chaining to get ID from URL params
    const rumor = await Rumors.findById(id); //Finds rumor by MongoDB ID
    if (!rumor){
      return res.status(404).json({message: "rumor not found"});
    }
    res.json(rumor);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("internal sever error");    
  }
 
};

//Updates an existing rumor
// Gets ID from params and update data from request body
// Finds the rumor first, returns 404 if not found
// Updates each field (some with conditional updates)
// Saves the updated document
// Returns success message and updated data
const updateRumorById = async(req, res) => {
  try {
    const id = req.params.id;
    const rummerUpdate = req.body;
    
    const rumour = await Rumors.findById(id);
    console.log(id);
    if (!rumour) {
      return res.status(404).json({ message: "rummour not found" });
    }
    // Update fields if they exist in request, otherwise keep old values
    rumour.name = rummerUpdate.name ? rummerUpdate.name : rumour.name;
    rumour.sign = rummerUpdate.sign;
    rumour.description = rummerUpdate.description;
    rumour.region = rummerUpdate.region;
    rumour.zone = rummerUpdate.zone;
    rumour.kebele = rummerUpdate.kebele;
    rumour.number_of_case = rummerUpdate.number_of_case;
    rumour.number_of_death = rummerUpdate.number_of_death;
    rumour.reporting_date = rummerUpdate.reporting_date;
    await rumour.save();
    res.json({ message: "successfully updated", data: rumour });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }};

// Creates a new rumor
// Builds rumor object from request body
// Creates new Rumors document and saves it
// Returns 201 (Created) status with new rumor
// Good error handling with specific message
const createNewRumor = async (req, res) => {
  try {
    const rum = {
      name: req.body.name,
      sign: req.body.sign,
      description: req.body.description,
      region: req.body.region,
      zone: req.body.zone,
      woreda: req.body.woreda,
      kebele: req.body.kebele,
      number_of_case: req.body.number_of_case,
      number_of_death: req.body.number_of_death,
      reporting_date: req.body.reporting_date
    };
    const newRumor = new Rumors(rum);
    await newRumor.save();
    res.status(201).json(newRumor); // 201 = Created
  } catch (error) {
    res.status(500).json({ message: "Error creating rumor", error: error.message });
  }
};

// Deletes a rumor by ID
// Uses findByIdAndDelete for one-step find+delete
// Returns 404 if not found
// Returns success message on deletion
// Handles server errors
const deletRumorById = async(req, res) => {
  try {
    const id = req.params.id;
    const rumor = await Rumors.findByIdAndDelete(id);
    if (!rumor) {
      return res.status(404).json({message: "rumor not found"});
    }

    res.json({message: "rumor is deleted successfuly"})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "internal server error"});
    
  }
}

//Exports all controller functions for use in routes
module.exports = {
    getAllRumours,
    getRumorsById,
    updateRumorById,
    createNewRumor,
    deletRumorById
    
};
