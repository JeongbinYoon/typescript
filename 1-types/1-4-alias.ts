{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "Jeongbin";
  const address: Text = "Korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Jeongbin",
    age: 25,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let jbName: Name;
  jbName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
