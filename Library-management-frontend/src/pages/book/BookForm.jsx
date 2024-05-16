import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = () => {
    const [ books, setBooks ] = useState({title: "", author: "", publication: "", ISBN: "", publicationDate: "", genre: "", language: "", numberOfPages: "", description: "", coverImage: "", availabilityStatus: "", edition: "", rating: "" })
    const navigate = useNavigate();    

    useEffect(() => {
        axios.get('/books')
        .then(Response => {
            setBooks(Response.data)
        })
        .catch(error => { console.error("Erro ao buscar livros", error)            
        })
    })

    function handleChange(event) {
        const { title, value } = event.target
        setBooks(prevState => ({...prevState, [title]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const method = id ? 'put' : 'post'
        const url = id ? `/books/${id}` : '/books' 

        axios[method](url, id)
        .then(() => {
            alert(`Livro ${id ? 'atualizado' : 'adicionado'} com sucesso!`)
            navigate("/listar-livros")
        })
        .catch(error => {  console.error("Ocorreu um erro: ", error)
            
        })
    }

  return (
    <div className="container mt-5">
        <h2>{id ? 'Editar Produto' : 'Adicionar Produto'}</h2>
        {errorMessage && (
            <div className="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        )}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Título:</label>
                <input type="text" className="form-control" id="title" name="title" value={books.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="author">Autor:</label>
                <input type="text" className="form-control" id="author" name="author" value={books.author} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="publisher">Editora:</label>
                <input type="text" className="form-control" id="publisher" name="publisher" value={books.publisher} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="ISBN">ISBN:</label>
                <input type="text" className="form-control" id="ISBN" name="ISBN" value={books.ISBN} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="publicationDate">Data de Publicação:</label>
                <input type="date" className="form-control" id="publicationDate" name="publicationDate" value={books.publicationDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="genre">Gênero:</label>
                <input type="text" className="form-control" id="genre" name="genre" value={books.genre} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="language">Linguagem</label>
                <input type="text" className="form-control" id="language" name="language" value={books.language} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfPages">Número de Páginas</label>
                <input type="text" className="form-control" id="numberOfPages" name="numberOfPages" value={books.numberOfPages} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input type="text" className="form-control" id="description" name="description" value={books.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="availabilityStatus">Status de avaliação</label>
                <input type="text" className="form-control" id="availabilityStatus" name="availabilityStatus" value={books.availabilityStatus} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="edition">Editora</label>
                <input type="text" className="form-control" id="edition" name="edition" value={books.edition} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Editora</label>
                <input type="text" className="form-control" id="edition" name="edition" value={books.edition} onChange={handleChange} required />
            </div>
            
            <button type="submit" className="btn btn-success">{id ? 'Atualizar' : 'Adicionar'}</button>
        </form>

    </div>  
  )
}

export default BookForm
