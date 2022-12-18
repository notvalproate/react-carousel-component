import Carousel from './components/Carousel';

function App() {

  return (
    <div style={{marginLeft: "1280px"}}>
      <Carousel 
      items={[
        <div style={{width: "100%", padding: "5%"}}><h1>Item 1</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 2</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 3</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 4</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 5</h1><p>Hey guys this is a test if it works for divs</p></div>, 
        <div style={{width: "100%", padding: "5%"}}><h1>Item 6</h1><p>Hey guys this is a test if it works for divs</p></div> 
      ]}
      width={1280}
      height={720}
      />
    </div>
  );
}

export default App;
