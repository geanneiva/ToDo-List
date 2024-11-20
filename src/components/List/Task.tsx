import {Check, Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import type {Task} from '../../App';

interface TaskList{
    taskInfo:Task
    removeTask: (id: number) => void
    taskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({taskInfo, removeTask, taskStatus}:TaskList){
    
    function handleTaskStatus() {
        taskStatus({ id: taskInfo.id, value: !taskInfo.status })
      }

    function handleRemove(){
        removeTask(taskInfo.id)
    }



    const checkboxCheckedClassname = taskInfo.status
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = taskInfo.status
    ? styles['paragraph-checked']
    : ''
    
    return(
    <div className={styles.task}>
              <label htmlFor="checkbox" onClick={handleTaskStatus}>
                <input type="checkbox"  checked={taskInfo.status}/>
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                {taskInfo && <Check size={12} weight='bold' />}
          </span>
            </label>
            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {taskInfo.content}
            </p>
            <button onClick={handleRemove}>
                <Trash size={16}/>
            </button> 
    </div>
    )
}