const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 32,
    },
  },
  { timestamp: true }
);

module.export = mongoose.model("Category", categorySchema);
