import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode(); // Generiere ein zufälligen Hex-Code
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  try {
    // Hole die Daten von der Color API
    const response = await fetch(colorApiUrl);

    // Überprüfe, ob der Abruf erfolgreich war
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Farbdaten");
    }

    // Wandeln die Antwort in JSON um
    const data = await response.json();

    // Logge die gesamte Antwort, um die Struktur zu untersuchen (optional)
    console.log("Antwort von der Color API:", data);

    // Extrahiere den Hex-Wert und den Namen der benannten Farbe
    const closestHex = data.name.closest_named_hex;  // Der Hex-Wert der nächsten benannten Farbe
    const closestName = data.name.value;            // Der Name der nächsten benannten Farbe

    // Logge die extrahierten Werte
    console.log("Hex-Wert der nächsten Farbe:", closestHex);
    console.log("Name der nächsten Farbe:", closestName);

    // Rufe setColorToGuess() auf, zum Farbe setzen
    setColorToGuess(closestHex, closestName);
  } catch (error) {
    console.error("Fehler:", error);
  }
}
