import logo from './logo.svg';
import './App.css';
import SwaggerUIComponent from './swagger';

function App() {
  return (
    <div className="App">
      <SwaggerUIComponent url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
}

export default App;
