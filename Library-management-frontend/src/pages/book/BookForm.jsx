import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api';
import styles from './Book.module.css';

const BookForm = () => {
    const [books, setBooks] = useState({
        title: "", author: "", publisher: "", isbn: "", publicationDate: "",
        genre: "", language: "", numberOfPages: "", description: "",
        availabilityStatus: "", edition: "", rating: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`/books/${id}`)
                .then(response => setBooks(response.data))
                .catch(error => console.error("Erro ao buscar livro", error));
        } else {
            setBooks({
                title: "", author: "", publisher: "", isbn: "", publicationDate: "",
                genre: "", language: "", numberOfPages: "", description: "",
                availabilityStatus: "", edition: "", rating: ""
            });
        }
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setBooks(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id ? `/books/${id}` : '/books';

        axios[method](url, books)
            .then(() => {
                alert(`Livro ${id ? 'atualizado' : 'adicionado'} com sucesso!`);
                navigate("/listar-livros");
            })
            .catch(error => {
                console.error("Ocorreu um erro: ", error);
                setErrorMessage("Ocorreu um erro ao salvar o livro. Tente novamente.");
            });
    }

    return (
        <div className={`${styles.containerForm} mt-5`}>            
            <h2 className={styles.cabeca}>{id ? 'Editar Livro' : 'Adicionar Livro'}</h2>
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" className="form-control" id="title" name="title" value={books.title || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Autor:</label>
                    <input type="text" className="form-control" id="author" name="author" value={books.author || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="publisher">Editora:</label>
                    <input type="text" className="form-control" id="publisher" name="publisher" value={books.publisher || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="isbn">ISBN:</label>
                    <input type="text" className="form-control" id="isbn" name="isbn" value={books.isbn || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Quantidade:</label>
                    <input type="text" className="form-control" id="stock" name="stock" value={books.stock || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="publicationDate">Data de Publicação:</label>
                    <input type="date" className="form-control" id="publicationDate" name="publicationDate" value={books.publicationDate || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Gênero:</label>
                    <input type="text" className="form-control" id="genre" name="genre" value={books.genre || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="language">Linguagem:</label>
                    <input type="text" className="form-control" id="language" name="language" value={books.language || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfPages">Número de Páginas:</label>
                    <input type="text" className="form-control" id="numberOfPages" name="numberOfPages" value={books.numberOfPages || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" className="form-control" id="description" name="description" value={books.description || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="availabilityStatus">Status de Disponibilidade:</label>
                    <input type="text" className="form-control" id="availabilityStatus" name="availabilityStatus" value={books.availabilityStatus || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="edition">Edição:</label>
                    <input type="text" className="form-control" id="edition" name="edition" value={books.edition || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Avaliação:</label>
                    <input type="text" className="form-control" id="rating" name="rating" value={books.rating || ''} onChange={handleChange} required />
                </div>
                
                <div className={styles.botao}>
                    <button type="submit" className={`btn btn-success me-md-2`}>{id ? 'Atualizar' : 'Adicionar'}</button>
                </div>
                
            </form>
        </div>
    );
}

export default BookForm;
