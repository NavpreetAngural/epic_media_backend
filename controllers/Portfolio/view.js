const Portfolio = require("../../models/Portfolio.model")
const view = async (req, res) => {
    try {
        const data = await Portfolio.find()
        res.json({
            data,
            msg : "Portfolio data loaded Successfully "
    })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "failed to load Portfolio data",
            err
        })

    }
}

module.exports = view