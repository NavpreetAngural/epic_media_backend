const Category = require("../../models/Category.model");

const add = async (req, res) => {
  try {
    const { cName, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ msg: "Media file is required." });
    }

    const addCategory = new Category({
      cName,
      description,
      media: req.file.filename,
    });

    await addCategory.save();

    res.status(200).json({
      msg: `${cName} added successfully`,
      success: true,
      data: addCategory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
      err,
    });
  }
};

module.exports = add;
