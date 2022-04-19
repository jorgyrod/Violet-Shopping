const { Photo } = require("../../../db");

const addPhotos = async (photosArr, selectedItem) => {
  try {
    const photos = photosArr.map((p) => ({ url: p }));
    const newPhotos = await Photo.bulkCreate(photos);
    await selectedItem.addPhotos(newPhotos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = addPhotos;