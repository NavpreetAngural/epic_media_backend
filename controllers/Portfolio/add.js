const Portfolio = require("../../models/Portfolio.model");

const add = async (req, res) => {
    try {
        const { orientation } = req.body;

        if (!req.file) {
            return res.status(400).json({ msg: "Media file is required." });
        }


        const addPortfolio = new Portfolio({
            image: req.file.filename, // or `/uploads/${req.file.filename}` if you want full path
            orientation,
        });

        


        await addPortfolio.save();

        res.status(200).json({
            msg: "Portfolio added successfully",
            success: true,
            data: addPortfolio,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error While Adding Portfolio", err });
    }
};

module.exports = add;
