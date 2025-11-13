// Array.forEach

const socials = ["Twitter", "Linkdn", "Facebook", "Instagram"];

// socials.forEach(function(social){
// console.log(social);
// })

// socials.forEach((social,index,arr) => console.log(`${index} -${social}`,arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: "Twiiter", url: "twitter.com" },
  { name: "Facebook", url: "facebook.com" },
  { name: "Linkdn", url: "linkdn.com" },
  { name: "Instagram", url: "instagram.com" },
];

socialObjs.forEach(item => console.log(item.ur))