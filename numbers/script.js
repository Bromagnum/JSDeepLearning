let x;

const num = new Number(5);

x = num.toString().length;

// Add digit after decimal

x = num.toFixed(2);

x = num.toPrecision(2);
x = num.valueOf();

// Math()

x = Math.sqrt(9); // Karekök

x = Math.abs(-5); // abs => absolute negatif olsadea 5 i gösterir sadece

x = Math.round(4.9); // yuvarlar

x = Math.ceil(4.2); // yukarı yuvarlar

x = Math.floor(4.9); // aşşağıya yuvarlar

x = Math.pow(2, 3); // 2 üstü 3 = 8

x = Math.min(4, 5, 6, 7); // en küçük sayıyı verir

x = Math.max(4, 5, 6, 7); // büyüğünü döner

x = Math.random();// decimal sayı verir

x = Math.floor(Math.random() * 10 + 1); // yuvarlar ve 1 ile 10 arası sayı verir

console.log(x);
