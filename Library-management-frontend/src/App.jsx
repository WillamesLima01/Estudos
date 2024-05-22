import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BookForm from './pages/book/BookForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './pages/book/BookList'
import styles from './pages/book/Book.module.css';

const App = () => {
  return (    
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<bookList />} />
          <Route path="/listar-livros" element={<BookList />} />
          <Route path="/add-livro" element={<BookForm />} />
        </Routes>
      </div>    
    </BrowserRouter>
    
  )
}

export default App
