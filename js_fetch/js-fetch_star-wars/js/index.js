import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// Dom element angelegt für die karte und an root appended
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  try {
    // Hole die Daten
    const response = await fetch("https://swapi.py4e.com/api/people");

    // Umwandlung in JSON
    const data = await response.json();
    console.log("Empfangene Daten:", data);

    // Optional: Wir können auch auf bestimmte Teile der Daten zugreifen und loggen, falls gewünscht (Unfo: kann auch mit Punkt-notation gemacht werden)
    console.log("Erster Charakter:", data.results[0]);

    data.results.forEach(character => {
      // Erstelle die Karte mit den Daten des Charakters
      const card = Card(character);  
      // Render die Karte im DOM
      renderElement(card);          
    });

  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}