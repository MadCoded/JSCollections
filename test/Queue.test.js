import { Queue } from '../collections/Queue';

var queue = Queue();
console.info("-------------------");
console.info("Queue - Test");
console.info("-------------------");


console.log("isEmpty : " + queue.isEmpty());

console.log("enqueue : 'First Element'");
queue.enqueue("First Element");

console.log("enqueue : 'Second Element'");
queue.enqueue("Second Element");

console.log("print : ");
queue.print();

console.log("dequeue :");
queue.dequeue();

console.log("front : " + queue.front());

console.log("size : " + queue.size());

console.log("isEmpty : " + queue.isEmpty());
