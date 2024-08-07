export default function groceriesList() {
  const groceriesMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const list = Array.from(Object.keys(obj));
  list.map((item) => groceriesMap.set(item, obj[item]));

  return groceriesMap;
}
