import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import FileEncryptor from './Components/FileEncryptor/FileEncryptor';
import FileEncList from './Components/FileList/FileEncList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FileEncryptor}/>
      <Route path="/files" component={FileEncList} />
    </BrowserRouter>
  );
}

export default App;
