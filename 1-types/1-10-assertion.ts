{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱 // 진짜진짜 장담해

  const numbers2 = findNumbers()!; // 진짜진짜 장담해
  numbers2.push(3); // 😱

  const button = document.querySelector("class")!;
}
