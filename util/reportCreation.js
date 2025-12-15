
const Land = require("../models/Land");
const Town = require("../models/Town");
const Location = require("../models/Location");
const Rent = require("../models/Rent");
const Renter = require("../models/Renter");
const { Op } = require("sequelize");
const config = require("./config");
const transporter = require("./mailTransporter");


const createReport = async () => {
    const today = new Date();
    try {
        const result = await Land.findAll({
            attributes:["landNumber"],
            include:[
                {
                    model:Town,
                    as:"town",
                    attributes:["name"],
                    include:{
                        model:Location,
                        as:"location",
                        attributes:["province", "district", "commune"]
                    }
                },
                {
                    model:Rent,
                    as:"rent",
                    attributes:["endDate"],
                    include:{
                        model:Renter,
                        as:"renter",
                        attributes:["name", "phone"]
                    },
                    where:{
                        endDate:{
                            [Op.between]:[today, new Date(new Date().setMonth(today.getMonth() + 6))]
                        }
                    }
                }
            ]
        });
        if(result.length >= 0) {
            if(result.length >= 0) {
            const mailOptions = {
                from:config.mailUser,
                to:config.mailAdmin,
                subject:`Raport SK invest z dnia ${today.toLocaleDateString("pl-PL")}`,
                html:`
                <h1 style="text-align:center;color:black;">Raport z systemu SK INVEST</h1>
                <h2 style="text-align:center;color:black">SK INVEST</h2>
                <hr/>
                <h2 style="text-align:center;color:black">Kończące się dzierżawy</h2>
                ${result.length == 0 ? `<h3 style="text-align:center;color:black">BRAK</h3>` : `<h3 style="text-align:center;color:black">Znaleziono ${result.length} kończących się</h3>`}
                ${result.length > 0 ?
                `
                    <table style="margin:auto">
                <thread>
                    <tr style="background-color:lime">
                    <th style="text-align:center">Nr działki</th>
                    <th style="text-align:center">Miejscowość</th>
                    <th style="text-align:center">Lokalizacja</th>
                    <th style="text-align:center">data zakończenia</th>
                    <th style="text-align:center">Dzierżawca</th>
                    </tr>
                </thread>
                <tbody>
                ${
                result.map((obj) =>{
                    const endDate = obj.rent.endDate
                    return `<tr style="background-color:#DADADB">
                        <td style="text-align:center">${obj.landNumber}</td>
                        <td style="text-align:center">${obj.town.name}</td>
                        <td style="text-align:center">${obj.town.location.commune}, ${obj.town.location.district}, ${obj.town.location.province}</td>
                        <td style="text-align:center">${endDate.toLocaleDateString("pl-PL")}</td>
                        <td style="text-align:center">${obj.rent.renter.name}, tel:${obj.rent.renter.phone}</td>
                    </tr>`})
                }
                </tbody>
                </table>
                ` : ""}
                <p>Wiadomość generowana automatycznie. Proszę na nią nie odpowiadać</p>
                `
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) {
                console.log("Bład przy wysyłaniu email", error)
                } else {
                console.log("Email wysłany ", info.response)
                }
            })
        }
        }
    } catch(err) {
        console.log({message:"Bład przy generowaniu raportu", error:err})
    }
}

module.exports = createReport;