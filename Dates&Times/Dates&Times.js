let d;

d = new Date();
d = new Date(2022, 0, 10, 12, 30, 30);

d = new Date("2022-07-10T12:30:00");
d = new Date("07/10/2025 12:30:00");
d = new Date("07-10-2025 12:30:00");

d = Date.now(); //milisocond

d = new Date("07-10-2025 12:30:00");
d = d.getTime();

d = Math.floor(Date.now() / 1000);

let x;
let b = new Date();
// both gives us time stamp
x = b.getTime();
x = b.valueOf();

// Specific part of

x = b.getFullYear();

x = b.getMonth() + 1;

x = b.getDate();

x = b.getDay();

x = b.getHours();

x = b.getMinutes();

x = `${b.getFullYear()}-${b.getMonth() + 1}`;

// Using API

x = Intl.DateTimeFormat("en-US").format(b);
// Ayın string versiyonu
x = Intl.DateTimeFormat("default", { month: "long" }).format(b);

// short version

x = b.toLocaleString("default", { month: "short" });

// new way using date and time suggested version
x = b.toLocaleString("default", { 
    month: "short",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
   
});

console.log(x);
