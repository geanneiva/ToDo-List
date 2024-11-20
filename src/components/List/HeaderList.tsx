import styles from './HeaderList.module.css';

interface counterTask {

    taskCreated:number
    taskFineshed:number
}

export function HeaderList( {taskCreated,taskFineshed}:counterTask) {
    return(
        <div className={styles.taskList}>
            <header className={styles.header}>
                <strong className={styles.taskCreated}>Tarefas Criadas<span>{taskCreated}</span></strong>
                <strong className={styles.taskFineshed}>Concluídas
                    <span>{taskFineshed === 0
                        ? taskFineshed
                        : `${taskFineshed} de ${taskCreated}`}</span></strong>
            </header>  
        </div>
            
        
        
        
        
        )
}