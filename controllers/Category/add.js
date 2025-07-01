const Category = require("../../models/Category.model")
const add = async (req, res) => {
    try {
        const { cName, description } = req.body

        const addCategory = new Category({
            cName,
            description,
            cImage: req.file.filename
        })
        await addCategory.save()
        res.status(200).json({
            msg: `${cName} Added Successfully`,
            succcess: true,
            data: addCategory
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "internal server error",
            err
        })
    }
}

module.exports = add