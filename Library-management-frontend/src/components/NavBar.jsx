import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.menu}>
        <div>
            <Link to = "/">Painel de Controle</Link>
            <Link to = "/listar-livros">Listar Livros</Link>            
            <Link to = "/listar-usuarios">Listar Usuários</Link>    
            <Link to = "/listar-emprestimo">Listar Empréstimo</Link>
        </div>
    </nav>
        
  )
}

export default NavBar
