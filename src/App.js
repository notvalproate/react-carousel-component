import Carousel from './components/Carousel';

function App() {

  return (
    <>
      <Carousel items={[  
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG"/>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 2</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG"/>,
        <div style={{width: "100%", padding: "5%"}}><h1>Item 4</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <img src="https://source.unsplash.com/user/erondu/800x450" alt="IMG"/>
      ]}
      width={1280}
      height={720}
      />
    </>
  );
}

export default App;
