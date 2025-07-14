const thumbImageGenerator = (thumb) => {
  if (thumb) {
    let link =
      process.env.SYSTEM_ENV == "development"
        ? `http://localhost:5000/${thumb}`
        : `https://code-duniya.onrender.com/uploads/${thumb}`;
    return link;
  }
};

module.exports = {
  thumbImageGenerator,
};
