const { TeamModel } = require("../../models/team/team-model");

const teamProfilesController = async (req, res) => {
  try {
    const Teams = await TeamModel.find();
    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};


const teamsIncomplete = async(req, res) => {
  try {

      //query a los teams incompletos. populate array de devs
      const Teams = await TeamModel.find({isComplete: "false"})
      .populate({
        path: "devs",
        //match: { $not: [{role: {$eq: "backend"}}, {role: {$eq: "frontend"}}, {role: {$eq: "tester"}}, {role: {$eq: "frontend"}}]},
        select: "role -_id"
      })
      .exec();

      //copio los resultados de la query en una constante
      const teamsData = [...Teams];
      //console.log(teamsData);
      
      /*
      //guardo en una constante los roles de devs que ya contiene el team(desarrollar ciclo for)
      teamsData.forEach(dev => {
        for (const role in dev) {
          console.log(dev[role]);
          //if (Object.hasOwnProperty.call(dev, role)) {}
        }
      });
      */
      const roleDev = teamsData[0].devs;
      
      //comparar si el equipo tiene todos los roles
      const back = roleDev.some(dev => dev.role =="backend");
      const front = roleDev.some(dev => dev.role =="frontend");
      const test = roleDev.some(dev => dev.role =="tester");
      const uxui = roleDev.some(dev => dev.role =="uxui");

      if(!back) { 
        console.log("team uncomplete. missing backend")
      };
      if(!front) { console.log("team uncomplete. missing frontend")};
      if(!test) { console.log("team uncomplete. missing tester")};
      if(!uxui) { console.log("team uncomplete. missing uxui")};
 
       //falta agregar los devs a los teams

       
      /*const verifyRoles = roleDev.some(dev => dev.role == back 
        && dev.role == front 
        && dev.role == test 
        && dev.role == uxui)
      */
     
      
      
      

      return res.send(Teams);
    } catch (error) {
      return res.status(400).send("NO Teams found");
    }
}

module.exports = { teamProfilesController, teamsIncomplete };