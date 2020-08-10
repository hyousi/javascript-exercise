export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source)
    .map(Number)
    .reduce((prev, curr) => prev + curr);
}
