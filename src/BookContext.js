import React, {createContext, useContext, useReducer, useRef} from "react";

const BookListR = [
    {
        id : 1,
        writer : '피콜로',
        title : '나메크성의 동물 수렵 일지',
        year : 2022,
    },
    {
        id : 2,
        writer : '박성수',
        title : '편의점 알바 하나부터 열까지',
        year : 2021,
    },
    {
        id : 3,
        writer : '선풍기맨',
        title : '귀찮은 친구를 돌보는 법',
        year : 2020,
    },
]

const BookState = createContext();
const BookDispatch = createContext();
const BookNextId = createContext()

function BookReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.book);
        case 'REFINDYEAR':  
            return state.filter(book=>action.year === book.year);
        default:
            return state;
    }
}


export function BookProvider({children}){
    const nextId = useRef(4);
    const [ state, dispatch ] = useReducer(BookReducer, BookListR);
    return (
        <BookState.Provider value={state}>
            <BookDispatch.Provider value={dispatch}>
                <BookNextId.Provider value={nextId}>
                    {children}
                </BookNextId.Provider>
            </BookDispatch.Provider>
        </BookState.Provider>
    )
}

export function useBookState(){
    return useContext(BookState);
};

export function useBookDispatch(){
    return useContext(BookDispatch);
};

export function useBookNextId(){
    return useContext(BookNextId);
};