import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='menu'>
        <div>
            <Link to = "/">Painel de Controle</Link>
            <Link to = "/listar-livros">Listar Livros</Link>
            <Link to = "/add-livro">Cadastrar Livro</Link>
            <Link to = "/listar-usuarios">Listar Usuários</Link>
            <Link to = "/add-usuario">Adicionar Usuário</Link>
            <Link to = "/listar-livros">Listar Livros</Link>
            <Link to = "/listar-emprestimo">Listar Empréstimo</Link>
        </div>
    </nav>
        
  )
}

export default NavBar
