import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div id = "hero">Hero<Button variant = "primary" onClick={() => console.log("deleteThis")}>X</Button></div>

  );
}

export default Hero;
