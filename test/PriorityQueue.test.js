import { PriorityQueue } from '../collections/PriorityQueue';

var priorityQueue = PriorityQueue();
console.info("-------------------");
console.info("PriorityQueue - Test");
console.info("-------------------");


console.log("isEmpty : " + priorityQueue.isEmpty());

console.log("enqueue : 'First Element' priority:2");
priorityQueue.enqueue(["First Element",2]);

console.log("enqueue : 'Second Element' priority:3");
priorityQueue.enqueue(["Second Element",3]);

console.log("print : ");
priorityQueue.print();

console.log("dequeue :");
priorityQueue.dequeue();

console.log("front : " + priorityQueue.front());

console.log("size : " + priorityQueue.size());

console.log("isEmpty : " + priorityQueue.isEmpty());
