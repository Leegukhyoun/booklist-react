import React from 'react';
import { useBookDispatch, } from '../BookContext';

const BookHead = () => {
    const dispatch = useBookDispatch();
    const onYear = (e) => {
        dispatch({type : 'REFINDYEAR', year:e.target.value});
        console.log(e.target.value);
    }
    return (
        <div id='bookHead'>
            <h1>Booklist</h1>
            <ul>
                <li onClick={onYear} value='2022'>2022년도</li>
                <li onClick={onYear} value='2021'>2021년도</li>
                <li onClick={onYear} value='2020'>2020년도</li>
                <li onClick={onYear} value='2019'>2019년도</li>
            </ul>
        </div>
    );
};

export default BookHead;