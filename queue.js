function createQueue(){
    const queue=[]
    return {
        enque:function(value){
            queue.unshift(value);
        },   
        deque:function(){
            queue.pop();
        },
        peek:function(){
            return queue[queue.length -1]
        },
        size:function(){
            return queue.length;
        }

        //deque
        //peek
        //size
    }
}
const  q=createQueue();
q.enque("create javascript for data strukturr");
q.enque("create code example from data struktur course");
q.enque("record data structure course");

q.deque();
q.deque();
console.log(q.peek())