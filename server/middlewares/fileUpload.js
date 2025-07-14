const multer = require("multer");
const path = require("path");
const fs = require("fs");

/**
 * Creates a dynamic multer upload middleware
 * @param {Object} options - options object
 * @param {'thumb'|'video'} options.type - upload type
 * @returns multer middleware
 */
const createUploadMiddleware = ({ type }) => {
  // Set allowed types and limits
  let allowedTypes = [];
  let maxSize = 0;
  let folderName = "";

  if (type === "thumb") {
    allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    maxSize = 5 * 1024 * 1024; // 5MB
    folderName = "thumbnails";
  } else if (type === "video") {
    allowedTypes = ["video/mp4", "video/mkv", "video/webm"];
    maxSize = 100 * 1024 * 1024; // 100MB
    folderName = "videos";
  } else {
    throw new Error("Invalid upload type. Must be 'image' or 'video'.");
  }

  // Storage configuration
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = `./uploads/${folderName}`;
      // Ensure folder exists
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
  });

  // Filter
  const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type for ${type}.`), false);
    }
  };

  return multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter,
  });
};

module.exports = createUploadMiddleware;
