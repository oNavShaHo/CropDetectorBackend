const fs=require('fs')
function lb(img) {
  console.log(img);
  fs.unlink(img, (err) => {
    if (err) {
      console.error(`Error deleting image: ${err}`);
    } else {
      console.log(`Image deleted successfully: ${img}`);
    }
  });
  return Math.floor(Math.random() * 5);
}

module.exports = { lb };
