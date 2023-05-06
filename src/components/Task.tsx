import { useState, ChangeEvent, MouseEventHandler} from 'react'
import styles from './Task.module.css'
import plusLogo from '../assets/plus.svg'
import trash from '../assets/trash.svg'
import { NoTask } from './NoTask'


type Task = {
  text: string;
  isChecked: boolean;
}

export function Task() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Array<Task>>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(){
    const newTaskObject: Task = {
      text: newTask,
      isChecked: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  }

  function handleDeleteTask(task: Task){
    const newTasks = tasks.filter((t)=>{
      return t !== task
    });
    setTasks(newTasks)
  }

  function handleToggleTask(task: Task) {
    const newTasks = tasks.map((t) => {
      if (t === task) {
        return {
          ...t,
          isChecked: !t.isChecked,
        };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  }


  return (
    <div className={styles.container}>
      <div className={styles.areaInput}>
        <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={handleNewTaskChange} />
          <button className={styles.button} onClick={handleCreateNewTask}>
            Criar <img src={plusLogo}/>
          </button>
      </div>

      <div className={styles.content}>
        <header className={styles.headerContent}>
          <div className={styles.headerControlTasks}>
            <span className={styles.labelTarefasCriadas}>Tarefas criadas</span>
            <small>{tasks.length}</small>
          </div>
          <div className={styles.headerControlTasks}>
            <span className={styles.labelTarefasConcluidas}>Concluídas</span>
            <small>{tasks.filter((t) => t.isChecked).length}</small>
          </div>
        </header>
        
          { tasks.map((task) => (
            <main key={task.text} className={styles.taskList}>
              <input 
                type="checkbox"
                className={styles.doneTask}
                onChange={() => handleToggleTask(task)}
                checked={task.isChecked}
              />
              
              <span>
                {task.isChecked? <s>{task.text}</s> : task.text}
              </span>
              <button onClick={() => handleDeleteTask(task)}>
                <img src={trash}/>
              </button>
            </main>
          ))}
      </div>
    </div>
  )
}
