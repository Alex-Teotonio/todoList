import styles from './Task.module.css'
import plusLogo from '../assets/plus.svg'
import { NoTask } from './NoTask'
export function Task() {

  return (
    <div className={styles.container}>
      <div className={styles.areaInput}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
          <button className={styles.button}>
            Criar <img src={plusLogo}/>
          </button>
      </div>

      <div className={styles.content}>
        <header className={styles.headerContent}>
          <div className={styles.headerControlTasks}>
            <span className={styles.labelTarefasCriadas}>Tarefas criadas</span>
            <small>0</small>
          </div>
          <div className={styles.headerControlTasks}>
            <span className={styles.labelTarefasConcluidas}>Concluídas</span>
            <small>0</small>
          </div>
        </header>
          <NoTask/>
      </div>
    </div>
  )
}