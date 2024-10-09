const time = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const fetchUserDeatils = async (userID) => {
  console.log("Fetching user details");
  await time(500);
  return `http://image.example.com/${userID}`;
};

const downloadImage = async (imageURL) => {
  console.log("Downloading the image");
  await time(500);
  return `Image data for ${imageURL}`;
};

const render = async (image) => {
  await time(300);
  console.log("Render Image");
};

const run = async () => {
  const imageURL = await fetchUserDeatils("John");
  const imageData = await downloadImage(imageURL);
  await render(imageData);
};

run();

// fetchUserDeatils("john", (imageURL) => {
//   downloadImage(imageURL, (imagedata) => {
//     render(imagedata);
//   });
// });

// fetchUserDeatils("John")
//   .then((imageURL) => downloadImage(imageURL))
//   .then((image) => render(image))
//   .catch((error) => {
//     console.log(error);
//   });
