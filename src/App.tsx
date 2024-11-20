import{ Header } from './components/Header';
import styles from './App.module.css';
import{ Input } from'./components/Input';
import{ Button } from './components/Button';
import { ChangeEvent, useState } from 'react';
import { Task } from './components/List/Task';
import { Empty } from './components/List/Empty';
import { HeaderList } from './components/List/HeaderList';

export interface Task {
  id:number;
  content:string;
  status:boolean;
}

export function App(){

  const[inputTask,setInputTask]=useState('');
  const[tasks,setTasks]=useState<Task[]>([]);

  function handleNewTask(){
          if (!inputTask){
            return
          }

          const newTask:Task = {
            id:new Date().getTime(),
            content: inputTask,
            status:false,
          }

          setTasks([...tasks,newTask])
          setInputTask('')
  }

  function handleInputChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Entrada Incorreta');
        setInputTask(event.target.value)
  }

  function handleRemoveTask(id:number){
    const listWithDeletedOnes = tasks.filter(task => task.id !== id)
    
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    
    setTasks(listWithDeletedOnes)
  }

  function handleCheckboxStatus({ id, value }: { id: number; value: boolean }){
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  const taskFineshed = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.status) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return(
    <div>
        <Header/>
          <div className={styles.whapper}>
            <main>
              <div className={styles.inputTask}>
                <Input onChange={handleInputChange} value={inputTask}/>
                <Button onClick={handleNewTask}/>
              </div>
                <div>
                  <HeaderList 
                    taskCreated={tasks.length}
                    taskFineshed={taskFineshed}/>

                    <div className={styles.tasks}>
                      {tasks.length === 0 ?(
                        <Empty/>
                      ):(tasks.map(task => (
                        <Task taskInfo={task}
                              key={task.id}
                              removeTask={handleRemoveTask}
                              taskStatus={handleCheckboxStatus}
                        />
                      )))}
                    </div>
                  </div>
            </main>
          </div>
    </div>
    
  )
} 