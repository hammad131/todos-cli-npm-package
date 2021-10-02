const fs = require('fs')
import * as path from 'path';
import * as os from 'os';

const todoFile = path.join(__dirname, '/todos.json');

interface Todo {
    done: boolean;
    todo: string;
}

class TodoAPI {

    //variables (not necessary in typescript)
    
    //constructor

    constructor(private todos : Todo[] = []) {

        this.todos = JSON.parse(fs.readFileSync(todoFile, { encoding: 'utf-8' }))

    }

    //methods

    private saveTodos():void {
        
        //first create folder
        
        if (!fs.existsSync(path.dirname(todoFile))) {
            fs.mkdirSync(path.dirname(todoFile))
        }
        
        //Now save data in todos.json

        const data = JSON.stringify(this.todos);
        fs.writeFileSync(todoFile, data, { encoding: 'utf-8' })
    }

    add (todo:string, done ? : boolean):void{
        done = done || false
        const newTodo : Todo = {done:done, todo: todo};
        this.todos.push(newTodo);
        this.saveTodos();
    }

    remove (index:number):void{
        this.todos.splice(index,1);
        this.saveTodos();
    }
    
    list ():Todo[]{
        return this.todos;
    }

    get (index:number):Todo{
        return this.todos[index];
    }

    done (index:number){
        this.todos[index].done = true;
        this.saveTodos();
    }
    
    unDone (index:number){
        this.todos[index].done = false;
        this.saveTodos();
    }

}

const api: TodoAPI = new TodoAPI();

export default api