//const {DevModel} = require("./../models/dev/dev-model");

const {TeamModel} = require("./../models/team/team-model");

const teamsIncomplete = async(req, res) => {
    try {
        //query a los teams incompletos
        const Teams = await TeamModel.find({isComplete: "true"});
        //leer propiedad devs
        Teams.forEach(element => {
          console.log(element.devs)
        });
        
        return console(Teams);
      } catch (error) {
        return res.status(400).send("NO Teams found");
      }
}

teamsIncomplete();


