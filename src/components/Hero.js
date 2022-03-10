import Button from "react-bootstrap/Button";
import $ from "jquery";
import SearchBar from './SearchBar';
import "./Hero.css"
import Heroes from '../heroes.json'
// constructor(props) {
//   super(props);
//   this.state = {
//     items: [],
//     isLoaded: false,
//   }
// }
function heroList() {
  fetch("https://api.opendota.com/api/heroes")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });

  // fetch("http://cdn.dota2.com/apps/dota2/images/heroes/")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   });
}
function Hero() {
  return (
    <div className="hero">
      <p></p>
      <SearchBar placeholder="Enter a hero name..." data={Heroes}></SearchBar>
      <Button id ="deleteButton" variant="danger" onClick={heroList}>X</Button>
    </div>
  );
}

export default Hero;
