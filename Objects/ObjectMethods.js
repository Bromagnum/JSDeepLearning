const toDo = new Object();
toDo.id = 1;
toDo.name = "Kürek";
toDo.completed = false;
x = toDo;

//spread operator {...obj1,...obj2}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const toDos = [
  { id: 1, name: "Dalga" },
  { id: 2, name: "Kürek" },
  { id: 3, name: "Kayık" },
];

x = toDos[0].name;
x = Object.keys(toDo)

x = Object.keys(toDo).length

x = Object.values(toDo)

x = Object.entries(toDo)
x = Object.hasOwnProperty("name")
// console.log(x);
