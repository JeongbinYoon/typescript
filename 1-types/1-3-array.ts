{
  // Array 2κ°μ§ λ°©μ
  const fruits: string[] = ["π", "π"];
  const scores: Array<number> = [1, 3, 4];
  // function printArray(fruits: readonly Array<string>) {} // readonly μ¬μ© μ μ λ¨
  function printArray2(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, classλ‘ λμ²΄ν΄μ μ¬μ©ν  μ μμ
  // μ¬μ©νλ κ²μ κΆμ₯νμ§ μμ
  // μΈλ±μ€λ‘ μ κ·Όνλ κ²μ΄ κ°λμ±μ΄ λ¨μ΄μ§
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student; // μ΄λ κ² μ κ·Όνλ©΄ μ’ λ λͺννκ² νμΈν  μλ μμ
}
