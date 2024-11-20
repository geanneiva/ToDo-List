import styles from './Empty.module.css';
import { ClipboardText } from '@phosphor-icons/react';


export function Empty() {
    return(
            <div className={styles.listEmpty}>
                <span><ClipboardText size={56}/></span>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
    )}