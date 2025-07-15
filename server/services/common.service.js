const thumbImageGenerator = (thumb) => {
  if (thumb) {
    if (thumb.includes("thumb")) {
      let link =
        process.env.SYSTEM_ENV == "development"
          ? `http://localhost:5000/thumbnails/${thumb}`
          : `https://code-duniya.onrender.com/uploads/${thumb}`;
      return link;
    } else if (thumb.includes("avatar")) {
      let link =
        process.env.SYSTEM_ENV == "development"
          ? `http://localhost:5000/avatars/${thumb}`
          : `https://code-duniya.onrender.com/uploads/${thumb}`;
      return link;
    }
  }
};

const videoPathGenerator = (video) => {
  if (video) {
    let link =
      process.env.SYSTEM_ENV == "development"
        ? `http://localhost:5000/videos/${video}`
        : `https://code-duniya.onrender.com/uploads/${video}`;
    return link;
  }
};

module.exports = {
  thumbImageGenerator,
  videoPathGenerator,
};
