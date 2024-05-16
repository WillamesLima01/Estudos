import React, { useEffect, useState } from 'react'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'

const bookList = () => {
    const [ books, setBooks ] = useState([])
    const navigate = useNavate()

    useEffect(() => {
        axios.get('/books')
        .then(Response => {
            setBooks(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])

    const fetchBooks = () => {
        axios.get('/books')
        .then(Response => {
            setBooks(Response.data)
        })
        .catch(error => consol.error("Ocorreu um erro: ", error))
    }

    function deleteBook(id) {
        axios.delete(`/books/${id}`)
        .then(() => {
            alert('Livro excluído com sucesso!')
            fetchBooks()
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }

  return (
    <div className='container mt-5'>
        <h2 className='mb-4'>Lista de Livros</h2>
        <button onClick={() => navigate('/add-livro')} className='btn btn-primary mb-2'>Adicionar Livro</button>

        <table className='table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>ISBN</th>
                    <th>Data de Publicação</th>
                    <th>Gênero</th>
                    <th>Linguagem</th>
                    <th>Nº de Páginas</th>
                    <th>Descrição</th>
                    <th>Status de disponibilidade</th>
                    <th>Edição</th>
                    <th>avaliação</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book => (
                        <tr key = {book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publicationDate}</td>
                            <td>{book.genre}</td>
                            <td>{book.language}</td>
                            <td>{book.numberOfPages}</td>
                            <td>{book.description}</td>                            
                            <td>{book.availabilityStatus}</td>
                            <td>{book.edition}</td>
                            <td>{book.rating}</td>
                            <td>
                                <button className='btn btn-sm btn-warning mr-2' onClick={() => navigate(`/editar-livro/${book.id}`)}>Editar</button>
                                <button onClick={() => deleteBook(book.id)} className="btn btn-sm btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default bookList