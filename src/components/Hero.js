import Button from 'react-bootstrap/Button';
import $ from 'jquery';
function heroList() {
  $.getJSON('https://api.opendota.com/api/heroes')
    .then(({ results }) => {
    var json = {results};
    console.log(results[0].id);});
}
function Hero() {
  return (
    <div id = "hero">Hero<Button style= {{width: "50px"}} variant = "danger" onClick={heroList}>X</Button></div>

  );
}



export default Hero;
