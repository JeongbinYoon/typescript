{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // enum처럼 표현하기
  const dayOfToday = DAYS_ENUM.MONDAY;

  //   TypeScript;
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // Union
  enum Days {
    Monday = 1, // default:0
    Tuesday,
    WEDNESDAY,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  //   enum Days {
  //     Monday = "mo",
  //     Tuesday = "tu",
  //     WEDNESDAY = "we",
  //     Thursday = "th",
  //     Friday = "fr",
  //     Saturday = "sa",
  //     Sunday = "su",
  //   }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 관련 없는 값이 들어갈 수 있기 때문에 enum보다는 union 타입을 이용하는 것이 타입을 보장하기 좋다.
  console.log(day);

  let daysOfWeek: DaysOfWeek = "Monday";
  daysOfWeek = "Tuesday";
}
