import styles from './NoTask.module.css';
import noTaskLogo from '../assets/noTask.svg';

export function NoTask() {

  return (
    <main className={styles.main}>
      <img src={noTaskLogo}/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </main>
  )
}