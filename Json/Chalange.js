// Object Chalange

// step 1
const library = [
  {
    title: "Lotr",
    author: "tolkien",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "falanFilan",
    author: "salladım",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Kitap",
    author: "Birisi yazmış",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// console.log(library);

//step 3

const {title:firstBook} =library[0]

// console.log(firstBook);

// step 4

const libraryJSON = JSON.stringify(library)

console.log(libraryJSON);