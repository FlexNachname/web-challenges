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
    console.log("Hex-Wert der nächsten benannten Farbe:", closestHex);
    console.log("Name der nächsten benannten Farbe:", closestName);

    // Rufe setColorToGuess() auf, um die Farbe zu setzen
    setColorToGuess(closestHex, closestName);
  } catch (error) {
    console.error("Fehler beim Abrufen oder Verarbeiten der Daten:", error);
  }
}
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--

