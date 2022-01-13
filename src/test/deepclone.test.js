const s1 = Symbol()
const s2 = Symbol()

const testObj = {
  name: "aaaa",
  age: 17,
  hobboes: {
    one: "123",
    two: "456",
    three: "789"
  },

  animal: ["qwer", "tyui"],

  getName: function () {
    console.log(this.name);
  },

  [s1]: "symbol作为键",
  symbolValue: s2,

  setValue: new Set(['123', "121", "456"]),

  mapValue: new Map([['1', "1234"], ["123", "768585"]])
}

// 循环引用
testObj.info = testObj

const newObj = deepclone(testObj)
newObj.hobboes.one = "hahahah"

console.log(newObj);
console.log(testObj);
console.log(newObj.symbolValue === testObj.symbolValue);