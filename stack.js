function createStack(){
    const arr=[];
    return {
        push:function(item){
            arr.push(item);
        },
        pop:function(){
            arr.pop();
        },
        peek:function(){
            return arr[arr.length -1];
        },
        size:function(){
            return arr.length;
        },
        // pop
        // peek
        // size
    }
}
const bookStack =createStack();
bookStack.push("the effectice engineer");
bookStack.push("tsss");
bookStack.push("start with");
console.log(bookStack.peek())