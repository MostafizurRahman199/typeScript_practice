const searchName = (value: string | null) => {
  if (value) {
    console.log(`searching for ${value}`);
  } else {
    console.log(`There is nothing to search`);
  }
};

const typeCheck = (value: unknown) => {
  if (typeof value === "string") {
    console.log(`string value is ${value}`);
  } else if (typeof value === "number") {
    console.log(`number value is ${value}`);
  } else if (typeof value === "boolean") {
    console.log(`boolean value is ${value}`);
  } else if (typeof value === "object") {
    console.log(`object value is ${value}`);
  }
};



function throwError(msg:string):never{
    throw new Error(msg);
}


throwError("Make a error");



typeCheck("Shifat");

searchName("Shifat");
searchName(null);
