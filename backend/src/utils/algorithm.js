const { DevModel } = require("./../models/dev/dev-model");

const { TeamModel } = require("./../models/team/team-model");

const teamsIncomplete = async (req, res, role) => {
  try {
    //query a los teams incompletos. populate array de devs
    const Teams = await TeamModel.find({ isComplete: "false" })
      .populate({
        path: "devs",
        select: "role -_id",
      })
      .exec();

    //copio los resultados de la query en una objeto
    const teamsData = [...Teams];
    for (let i = 0; i < teamsData.length; i++) {
      const roleDev = teamsData[i].devs;
      const idTeam = teamsData[i]._id;

      const role = roleDev.some((dev) => dev.role == role);

      if (!role) {
        console.log(`team ${idTeam} uncomplete. missing ${role}`);
        //
        const dev = await DevModel.find({role: role, currentTeam: null}).exec();

        //falta agregarlo al team
        console.log(dev);
      }
    }

    return res.send(teamsData);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

teamsIncomplete();
