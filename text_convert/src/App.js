import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Text"/> */}
    <Navbar title="TextUtils" />
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container my-3">

    <TextForm heading="Enter the text to analyze"/>
    <br/>
    <br/>
    <br/>
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
