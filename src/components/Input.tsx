import styles from './Input.module.css';


export function Input({
    ...rest
  }: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >){

        return(
        <div className={styles.taskform}>
            <textarea   name ="TaskInput"
                        placeholder="Adicione uma nova tarefa"
                        {...rest}/>
        </div>
        
    )
}