import { LinkedList } from '../collections/LinkedList';

var linkedList = LinkedList();
console.info("-------------------");
console.info("LinkedList - Test");
console.info("-------------------");

console.log("add : 'First Element'");
linkedList.add("First Element");

console.log("add : 'Second Element'");
linkedList.add("Second Element");

console.log("size : "+linkedList.size());

console.log("head : "+linkedList.head().element);

console.log("remove : 'First Element'");
linkedList.remove("First Element")

console.log("size : "+linkedList.size());

console.log("head : "+linkedList.head().element);

