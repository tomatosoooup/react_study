console.log("hello world");

let age: number = 24;

age = 12;

let userName: string;

userName = "David";

let isInstructor: boolean;

isInstructor = true;

// we don't use null
//  number, string and boolean is core feature
//  More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"]; // no numbers

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "David",
  age: 32,
};

let people: Person[];

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 7);
console.log(updatedArray);
const stringArray = insertAtBeginning(["hello", "bye", "welcome"], "welldone");
stringArray[0].split("");
