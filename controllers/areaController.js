
const LandArea = require("../models/LandArea");
const withErrorHandling = require("../middlewares/withErrorHandling");

exports.insertArea = withErrorHandling(async (req, res) => {
    const {idLand, idGroundClass, area} = req.body;
    await LandArea.create({
        idLand,
        idGroundClass,
        area,
    });
    res.status(201).json({success:true, message:"Dodano powierzchnie działki"});
});

exports.updateArea = withErrorHandling(async (req, res) => {
    const {idArea, idGroundClass, area} = req.body;
    const [affectedRows] = await LandArea.update({
        idGroundClass,
        area,
    }, {where:{id:idArea}});
    res.status(200).json({success:true, message:"Zaktualizowano powierzchnie działki", affectedRows})
})

exports.deleteArea = withErrorHandling(async (req, res) => {
    const {idArea} = req.body;
    const deletedCount = await LandArea.destroy({where:{id:idArea}})
    res.status(200).json({success:true, message:"Usunięto powierzchnie działki", deletedCount})
});