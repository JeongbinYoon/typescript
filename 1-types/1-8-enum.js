{
    /**
     * Enum
     */
    // JavaScript
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // enum처럼 표현하기
    var dayOfToday = DAYS_ENUM.MONDAY;
    //   TypeScript;
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["WEDNESDAY"] = 3] = "WEDNESDAY";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
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
    var day = Days.Saturday;
    day = Days.Tuesday;
    day = 10;
    console.log(day);
}
