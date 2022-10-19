interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세붝인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 이턴하는 함수 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const jeongbin = new FullTimeEmployee();
const bob = new PartTimeEmployee();
jeongbin.workFullTime();
bob.workPartTime();

// 가능하면 as를 쓰는 건 좋지 않다
const jeongbinAfterPay = pay(jeongbin) as FullTimeEmployee;
const bobAfterPay = pay(bob);
jeongbinAfterPay.workFullTime();

const obj = {
  name: "jeongbin",
  age: 20,
};

const obj2 = {
  animal: "🐶",
};

// keyof : 어떤 오브젝트 안에 있는 key의 타입
function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // jeongbin
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐶
