import React, { useEffect, useState } from 'react';
import axios from '../../api';
import { useNavigate } from 'react-router-dom';
import { FaPenClip, FaPenToSquare } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsImages } from "react-icons/bs";
import styles from './Book.module.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/books')
            .then(Response => {
                setBooks(Response.data);
            })
            .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchBooks = () => {
        axios.get('/books')
            .then(Response => {
                setBooks(Response.data);
            })
            .catch(error => console.error("Ocorreu um erro: ", error));
    };

    function deleteBook(id) {
        axios.delete(`/books/${id}`)
            .then(() => {
                alert('Livro excluído com sucesso!');
                fetchBooks();
            })
            .catch(error => console.error("Ocorreu um erro: ", error));
    }

    return (
        <div className={`${styles.container} mt-5`}>

            <h2 className={styles.cabeca}>Lista de Livros</h2>

            <div className={styles.form}>

                <div>
                    <button onClick={() => navigate('/add-livro')} className='btn btn-primary mb-2'>Adicionar Livro</button>
                </div>
                <div className={styles.componentPesquisar}>                                        
                    <div>                        
                        <input type="text" className={styles.pesquisar} id="pesquisar" name="pesquisar" />
                    </div>
                    <div>
                        <button title='detalhes do livro' className="btn btn-sm btn-secondary" onClick={() => navigate(`/veterinary/resenha-equino/${equine.id}`)}>
                            <BsImages className={styles.btAssistir} />
                        </button>
                    </div>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Editora</th>
                            <th>Estoque</th>
                            <th>Data de Publicação</th>
                            <th>Gênero</th>
                            <th>Disponibilidade</th>
                            <th>Edição</th>                        
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                                <td>{book.stock}</td>
                                <td>{book.publicationDate}</td>
                                <td>{book.genre}</td>
                                <td>{book.availabilityStatus}</td>
                                <td>{book.edition}</td>                            
                                <td className={styles.btAcao}>
                                    <button title='editar' className="btn btn-sm btn-warning" onClick={() => navigate(`/editar-livro/${book.id}`)}>
                                        <FaPenClip className={styles.btEditar} />
                                    </button>
                                    <button title='excluir' onClick={() => deleteBook(book.id)} className="btn btn-sm btn-danger">
                                        <FaRegTrashAlt className={styles.btExcluir} />
                                    </button>
                                    <button title='emprestar' className="btn btn-sm btn-info" onClick={() => navigate(`/veterinary/assistir-equino/${equine.id}`)}>
                                        <FaPenToSquare className={styles.btAssistir} />
                                    </button>
                                    <button title='detalhes do livro' className="btn btn-sm btn-secondary" onClick={() => navigate(`/veterinary/resenha-equino/${equine.id}`)}>
                                        <BsImages className={styles.btAssistir} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookList;
