{
  // Array 2가지 방식
  const fruits: string[] = ["🍎", "🍉"];
  const scores: Array<number> = [1, 3, 4];
  // function printArray(fruits: readonly Array<string>) {} // readonly 사용 시 안 됨
  function printArray2(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체해서 사용할 수 있음
  // 사용하는 것을 권장하지 않음
  // 인덱스로 접근하는 것이 가독성이 떨어짐
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student; // 이렇게 접근하면 좀 더 명확하게 확인할 수는 있음
}
