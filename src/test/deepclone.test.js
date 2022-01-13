const testObj = {
  name: "aaaa",
  age: 17,
  hobboes: {
    one: "123",
    two: "456",
    three: "789"
  }
}

const newObj = deepclone(testObj)
newObj.hobboes.one = "hahahah"

console.log(newObj);
console.log(testObj);