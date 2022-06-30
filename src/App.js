
import './App.css';
import { BookProvider } from './BookContext';
import BookAdd from './component/BookAdd';
import BookHead from './component/BookHead';
import BookList from './component/BookList';
import BookTemplate from './component/BookTemplate';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <BookTemplate>
          <BookHead/>
          <BookList/>
          <BookAdd/>
        </BookTemplate>
      </BookProvider>
    </div>
  );
}

export default App;
