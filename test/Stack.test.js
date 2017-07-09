import { Stack } from '../collections/Stack';

var stack = Stack();
console.info("-------------------");
console.info("Stack - Test");
console.info("-------------------");

console.log("push : 'First Element'");
stack.push("First Element");

console.log("push : 'Second Element'");
stack.push("Second Element");

console.log("size : " + stack.size());

console.log("peek : " + stack.peek());

console.log("pop :");
stack.pop();

console.log("size : " + stack.size());

console.log("peek : " + stack.peek());
