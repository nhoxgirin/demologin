
//function 
//binh thuong
function TEN_FUNCTION() {
    return "???"
}
const str = TEN_FUNCTION();
//errow function
() => {
    return ""
}
() => 4
    (a)=> a + 1 // dang 1
a => a + 1 //dang 2

let a = () => {
    return ""
}
setTimeout(() => {
    //logic
}, time)



//const list = [] // hằng số
let list = []
let b = [3, 5, 7, 8, , 912, 1, 515]
list.push({ name: "task 2", age: 3 }, { name: "task 3", age: 5 }, { name: "task 1", age: 1 });
list.map((task, index) => { })
list.splice(1, 1)//start,count deleted
list.sort((a, b) => a - b)//gim dần b-a,tăng dần a-b
//list.sort((a, b) => a.age - b.age)//gim dần b-a,tăng dần a-b
list.filter()
b.length//=>7

b.filter(num => num > 10) //=>[912,515]
let c = []
for (i = 0, i < b.length, i++) {
    if (b[i] > 10) {
        c.push(b[i])
    }
}
c //=>[912,515]

// {} OBJECT
const user = { name: "user1" }
user.name // =>user1

let numb = 9
numb = numb.toString()
//String(numb)
const strr = "aAgbaB"
strr.toUpperCase()
strr.toLowerCase()
strr.charAt(1)  // vi tri bat dau
const chuoi = "a,b,c,d,e" //=> 
const arr = chuoi.split(",") // => ["a","b","c","d","e"]
const arr2 = chuoi.split("") // => ["a",",","b",",","c",",","d",",","e"]

const user1 = { name: "abab", age: 15 }
Object.keys(user1) // {"name","age"}
Object.values(user1) // {"abab","15"}
