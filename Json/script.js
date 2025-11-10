const post = {
  id: 1,
  title: "Post One",
  body: "this is a fuckn body",
};

// Convert to JSON string => propertylere  ulaşılamaz
const str = JSON.stringify(post);

// Parse JSON => propetry e ulaşabilrsin 

const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "this is a fuckn body",
  },
  {
    id: 2,
    title: "Post two",
    body: "this is a fuckn body",
  },
];


const str2 = JSON.stringify(posts)
console.log(str2);
