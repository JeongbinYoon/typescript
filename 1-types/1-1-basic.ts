{
  /**
   * JavaScript
   * Primitive: numeber, string, boolean, bigint, symbol, null, undefined
   * Object: function, array .....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 3;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π©
  let notSure: unknown;
  notSure = "he";
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // π©

  // never
  // μλ¬λ₯Ό λμ§λμ§ λλμ§ μκ² μ½λ©ν΄μΌν¨
  function throwError(message: string): never {
    // mewssage -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // object
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "jb" });
  acceptSomeObject({ animal: "dog" });
}
