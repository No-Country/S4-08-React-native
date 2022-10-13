const { DevModel } = require("../../models/dev/dev-model");
const { TeamModel } = require("../../models/team/team-model");

const teamProfilesController = async (req, res) => {
  try {
    const Teams = await TeamModel.find();
    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

const teamProfileController = async (req, res) => {
  const { id } = req.params;
  try {
    const Teams = await TeamModel.findById(id);
    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

//algorithm testing
const teamsIncomplete = async (req, res) => {
  try {
    //query a los teams incompletos. populate array de devs
    const Teams = await TeamModel.find({ isComplete: "false" })
      .populate({
        path: "devs",
        //match: { $not: [{role: {$eq: "backend"}}, {role: {$eq: "frontend"}}, {role: {$eq: "tester"}}, {role: {$eq: "frontend"}}]},
        select: "role -_id",
      })
      .exec();

    //copio los resultados de la query en una objeto
    const teamsData = [...Teams];

    //ciclo para array
    for (let i = 0; i < teamsData.length; i++) {
      const roleDev = teamsData[i].devs;
      const idTeam = teamsData[i]._id;

      //if roleDev.includes("backend")
      //hacer con el rol del dev registrado como funcion dinamica
      //
      //else teamData[i].devs.push()      


      //instanciar variables de roles
      const backend = roleDev.some((dev) => dev.role == "backend");
      const frontend = roleDev.some((dev) => dev.role == "frontend");
      const tester = roleDev.some((dev) => dev.role == "tester");
      const uxui = roleDev.some((dev) => dev.role == "uxui");

      //comprobar roles de devs en teams. query de DEVS segun rol y sin equipo
      if (!backend) {
        console.log(`team ${idTeam} uncomplete. missing backend`);
        //buscar dev por rol y agregar al team
        const dev = await DevModel.find({role: "backend", currentTeam: null}).exec();

        //falta agregarlo al team
        console.log(dev);
      }
      if (!frontend) {
        console.log(`team ${idTeam} uncomplete. missing frontend`);
        const dev = await DevModel.find({role: "frontend", currentTeam: null}).exec();
        console.log(dev);
      }
      if (!tester) {
        console.log(`team ${idTeam} uncomplete. missing tester`);
        const dev = await DevModel.find({role: "tester", currentTeam: null}).exec();
        console.log(dev);
      }
      if (!uxui) {
        console.log(`team ${idTeam} uncomplete. missing uxui`);
        const dev = await DevModel.find({role: "uxui", currentTeam: null}).exec();
        console.log(dev);
      }
    }
    //falta agregar los devs a los teams

    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

module.exports = {
  teamProfilesController,
  teamProfileController,
  teamsIncomplete,
};
