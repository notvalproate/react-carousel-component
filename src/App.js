import Carousel from './components/Carousel';

function App() {
  const myStyle = {
    height: "100%",
  }

  return (
    <>
      <Carousel items={[
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG" style={myStyle}/>, 
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG" style={myStyle} />, 
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG" style={myStyle}/>
      ]}
      width={1280}
      height={720}
      />
    </>
  );
}

export default App;
