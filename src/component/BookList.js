import React from 'react';
import { useBookState } from '../BookContext';



const BookList = () => {
    const Books = useBookState();
    return (
        <div id='bookList'>
            <ul>
                <li>글쓴이</li>
                <li>제목</li>
                <li>년도</li>
            </ul>
        {Books.map(book=>(
            <ul>
                <li>{book.writer}</li>
                <li>{book.title}</li>
                <li>{book.year}</li>
            </ul>
        ))}
        </div>
    );
};

export default BookList;