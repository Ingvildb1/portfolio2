import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Works from "./components/works/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Works />
    </div>
  );
}

export default App;
