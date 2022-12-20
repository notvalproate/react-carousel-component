import Carousel from './components/Carousel';

function App() {  
  return (
    <div style={{backgroundColor: "rgb(0, 0, 51)", display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"}}>
      <Carousel width="1280px" height="720px" margin="0px"/>
    </div>
  );
}

export default App;
