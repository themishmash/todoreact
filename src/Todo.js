import React from 'react';
import Navbar from './Navbar';
import styles from './Todo.module.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: '',
      numberTasks: null
      // inputError: ''
    };
  }
  
    
handleChange = (event) => {
  this.setState({ input: event.target.value });
}

//Validate input not work?
// validateInput = () => {
//   const { input}  = this.state;
//   this.setState({
//     inputError:
//     input.length > 3 ? null : 'Input must be longer than 3 characters'
//   });
// }


//Why this not work???
// handleChange = () => {
//   this.setState(state => ({
//     input: this.state.value
//   }));
// }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.input], 
      input: ''
    });
    
  }



//do i need bind this?
  deleteTask = (index) => {
    //debugger
    console.log(index)
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1)
    this.setState({tasks: tasks})
  }


//why is modules.css not working? ul and li - inheriting things from navbar

  render () {

    return (<div>
      <div><Navbar /></div>
      <div className={styles.picAndTodo}>
      <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.allTodos}>
      <h1>My To Do List</h1>
        {
          this.state.tasks.map((task, i) => 
          <p key={i}  >
            {task}
            
          <button key={i} onClick={this.deleteTask.bind(this, i)}>
            X
          </button>
          </p>
          )}
        <div>
          <input placeholder='Enter task' value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.addTask} onKeyDown={this.addTask}>Add task</button>
        </div>

        <div>
          <p>You currently have {this.state.tasks.length} tasks to complete</p>
        </div>
        </div>

        
          </div>
        </div>
        <div className={styles.pic}>
        <img src='./todoImage.jpg' className={styles.img} alt='todo-list' width='700' height='740'/>
        </div>
        </div>
    </div>)
  }
}

export default Todo