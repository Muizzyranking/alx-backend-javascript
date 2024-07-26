export default function createIteratorObject(report) {
  const list = [];
  for (const item of Object.values(report.allEmployees)) {
    list.push(...item);
  }

  return list;
}
