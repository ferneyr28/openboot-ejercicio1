import logo from './logo.svg';
import './App.css';
import ContactsComponent from './components/container/ContactsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactsComponent></ContactsComponent>
      </header>
    </div>
  );
}

export default App;
