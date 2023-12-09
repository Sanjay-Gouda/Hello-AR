const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

export const Songs = [
  {
    id: 1,
    formValues: {
      name: "Stop Giving Me Advice",
      source: "Youtube",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },

    thumbnail: {
      url: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6572edaf7710d9262c580ca4/COLLECTION_110976925956458.jpg",
      name: "Stop Giving Me Advice",
    },
    currentDate: currentDate,
  },
  {
    id: 2,
    formValues: {
      name: "Stop Giving Me Advice",
      source: "Youtube",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },

    thumbnail: {
      url: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6572edaf7710d9262c580ca4/COLLECTION_110976925956458.jpg",
      name: "Stop Giving Me Advice",
    },
    currentDate: currentDate,
  },
];
