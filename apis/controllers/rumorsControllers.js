const rumors = [
    {
        id: 1,
        name: "measels out break",
        sign: " fever,rush, vomiting",
        description: "50 people dead by measels out break around hawassa",
        region: "Sidama",
        zone: "hawassa",
        woreda: "tabor",
        kebele: "fara",
        number_of_case: 100,
        number_of_death: 50,
        reporting_date: "10/02/2025",
      },
      {
        id: 2,
        name: "malaria out break",
        sign: " fever, vomiting",
        description: "10 people dead by measels out break around hawassa",
        region: "Sidama",
        zone: "hawassa",
        woreda: "tabor",
        kebele: "ogena wacho",
        number_of_case: 20,
        number_of_death: 10,
        reporting_date: "10/03/2025",
      },
      {
        id: 3,
        name: "cholera out break",
        sign: " fever, vomiting, diarrhea",
        description: "15 people dead by measels out break around hawassa",
        region: "Sidama",
        zone: "hawassa",
        woreda: "tabor",
        kebele: "tilite",
        number_of_case: 35,
        number_of_death: 15,
        reporting_date: "10/04/2025",
      },
    ];
    
const getAllRumours = (req, res) => {
    res.json(rumors);
};

const getRumorsById = (req, res) => {
  const id = req.params.id;
  const rumor = rumors.find((rum) => rum.id == id);
  if (!rumor) {
    return res.status(404).json({message: "rumor no found"});
  }
  res.json(rumor);
};

const updateRumorById = (req, res) => {
  const id = req.params.id;
  const rumorUpdate = req.body;

  const rumor = rumors.find((rum) => rum.id == id);
  if (!rumor) {
    return res.status(404).json({message: "rumor no found"});
  }

  rumor.name = rumorUpdate.name ? rumorUpdate.name : rumor.name;
  rumor.sign = rumorUpdate.sign;
  rumor.description = rumorUpdate.description;
  rumor.region = rumorUpdate.region;
  rumor.zone = rumorUpdate.zone;
  rumor.woreda = rumorUpdate.woreda;
  rumor.kebele = rumorUpdate.kebele;
  rumor.number_of_case = rumorUpdate.number_of_case;
  rumor.number_of_death = rumorUpdate.number_of_death;
  rumor.reporting_date = rumorUpdate.reporting_date

  res.json({ message: "successfully updated", data: rumor });

};

const createNewRumor = (req, res) => {
  const newRumor = {
    id: rumors.length + 1,
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
  } 
  rumors.push(newRumor);
  res.json(newRumor);
}

const deletRumorById = (req, res) => {
  const id = req.params.id;
  const rumor = rumors.find((rum) => rum.id === parseInt(id));
  if (!rumor) {
    return res.status(404).json({message: "rumor not found"});
  }

  rumors.filter((rum) => rum.id !==id);
  res.json({message: "rumor is deleted successfuly"})
}

module.exports = {
    getAllRumours,
    getRumorsById,
    updateRumorById,
    createNewRumor,
    deletRumorById
    
};
