import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>

                <Avatar hasBorder src={"https://github.com/maryane-castro.png"}/>


                <strong>Maryane Castro</strong>
                <span>Data Science</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}