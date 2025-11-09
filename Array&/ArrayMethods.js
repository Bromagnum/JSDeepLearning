let x;

const arr = [34, 55, 95, 20, 15];
// sona ekleme
// arr.push(100);

// // silme
// arr.pop();
// //başa ekleme
// arr.unshift(99)

// // çıkartma
// arr.shift()
// // arrayin tam tersine çevirir
// arr.reverse()

// Array in içindeki var mı yok mu boolean
x = arr.includes(20);

x = arr.indexOf(34);
// arrayi değiştirmez
x = arr.slice(1,4);
// arrayin içinden çıkartır arrayi değiştirir
// x = arr.splice(1,4)

// x = arr.splice(3,1)

x = arr.splice(1,4).reverse().toString().charAt(0)

console.log(x);
