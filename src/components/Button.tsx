import styles from './Button.module.css';
import { PlusCircle } from "@phosphor-icons/react";


export function Button({
    ...rest
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >){

    return(
            <div className={styles.buttonForm}>
                <button type="submit" 
                        {...rest}>
                            Criar 
                    <div className={styles.taskformPlus}>  <PlusCircle size={20} weight='bold'/></div>
                    
                </button>
            </div>
)}