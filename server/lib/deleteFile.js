const fs = require("fs");
const path = require("path");
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    if (filePath.includes("thumb")) {
      fs.unlink(
        `${path.join(__dirname, "../uploads/thumbnails")}/${filePath}`,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    }
  });
};

module.exports = deleteFile;
