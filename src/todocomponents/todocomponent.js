import React from 'react';
import AddItem from './additem';
import TodoItem from './todoitem';
class TodoComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onAdd(item){
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        })
    }
    onDelete(item) {
        let updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    }
    render() {
        let todos = this.state.todos;
        let todo = todos.map((item,index)=>{
            return (<TodoItem key={index} item={item} onDelete={this.onDelete}></TodoItem>)
        })
        return(
            <div id="todo-list">
                <ul>
                   {todo}
                </ul>  
                <AddItem onAdd={this.onAdd}/> 
            </div>    
        )
    }
}

export default TodoComponent;