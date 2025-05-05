const rummers = [
    {
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
    res.json(rummers);
};

module.exports = {
    getAllRumours,
};
