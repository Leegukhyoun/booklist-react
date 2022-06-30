import React, { useState } from 'react';
import { useBookDispatch, useBookNextId } from '../BookContext';

const BookAdd = () => {
    const [open,setOpen] = useState(false);
    const dispatch = useBookDispatch();
    const nextId = useBookNextId();
    function Open(){
        setOpen(!open); 
    }
    const [ value1, setValue1 ] = useState('');
    const [ value2, setValue2 ] = useState('');
    const [ value3, setValue3 ] = useState('');

    const onChange1 = e => {
        setValue1(e.target.value);
        console.log(e.target.value);
    }
    const onChange2 = e => {
        setValue2(e.target.value);
        console.log(e.target.value);
    }
    const onChange3 = e => {
        setValue3(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            book: {id:nextId.current, writer:value1, title:value2, year:Number(value3)}
        })
        setValue1('');
        setValue2('');
        setValue3('');
        Open();
        nextId.current += 1;
    }
    return (
        <div id='bookAdd'>
            <div className={open === true ? 'btn on': 'btn'} id='addBtn' onClick={Open}>+</div>
            <div id='hidden' className={open === true ? 'on': ''}>
                <input placeholder='글쓴이' value={value1} onChange={onChange1}></input>
                <input placeholder='제목'  value={value2} onChange={onChange2}></input>
                <input placeholder='년도' value={value3} onChange={onChange3}></input>
                <button className='btn' id='btn2' onClick={onSubmit}>O</button>
                <button className='btn' id='closeBtn' onClick={Open}>+</button>
            </div>
        </div>  
    );
};

export default BookAdd;