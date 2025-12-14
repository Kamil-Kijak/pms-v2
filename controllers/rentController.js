
const Rent = require("../models/Rent");
const withErrorHandling = require("../middlewares/withErrorHandling");

exports.insertRent = withErrorHandling(async (req, res) => {
    const {idRenter, startDate, endDate, rental, issueRentalFactureDate, idLand} = req.body;
    await Rent.create({
        id:idLand,
        idRenter,
        startDate,
        endDate,
        rental,
        issueRentalFactureDate
    });
    res.status(201).json({success:true, message:"Dodano dzierżawe"});
});

exports.updateRent = withErrorHandling(async (req, res) => {
    const {idRent, idRenter, startDate, endDate, rental, issueRentalFactureDate} = req.body;
    const [affectedRows] = await Rent.update({idRenter, startDate, endDate, rental, issueRentalFactureDate}, {where:{id:idRent}})
    res.status(200).json({success:true, message:"zaktualizowano dzierżawe", affectedRows})
});

exports.deleteRent = withErrorHandling(async (req, res) => {
    const {idRent} = req.body;
    const deletedCount = await Rent.destroy({where:{id:idRent}})
    res.status(200).json({success:true, message:"usunięto dzierżawce", deletedCount});
});
