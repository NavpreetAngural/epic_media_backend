const Portfolio = require("../../models/Portfolio.model")

const deletePortfolio = async (req , res ) => {
    try{
        const deletedPortfolio = await Portfolio.findByIdAndDelete(req.params.id);
        if(!deletedPortfolio){
            return res.status(400).json({ msg: "Portfolio Not Found" });
        }
        res.status(200).json({
            message: "Portfolio Deleted Successfully",
            deletedPortfolio
        });
    }
    catch(err){
        res.status(500).json({ message: "Error While Deleting Portfolio", err });
        console.error("Error while deleting Portfolio:", err);
    }
}

module.exports = deletePortfolio;