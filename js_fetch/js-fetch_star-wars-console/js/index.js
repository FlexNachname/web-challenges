console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    try {
        // Hole die Daten von der URL
        const response = await fetch(url);
        
        // Antwort: Umwandlung in json
        const data = await response.json();

        // Logge die gesamte Datenstruktur
        console.log("Vollständige Daten:", data);

        // Logge bestimmte Werte, z. B. Namen der Charaktere
        console.log("Alle Charaktere:");
        data.results.forEach(character => {
            console.log(character.name);
        });

        // Bonus: Finde R2-D2's Augenfarbe
        const r2d2 = data.results.find(character => character.name === "R2-D2");
        if (r2d2) {
            console.log("R2-D2 Augenfarbe:", r2d2.eye_color);
        }

    } catch (error) {
        // Fehlerbehandlung falls etwas schiefgeht
        console.error("Fehler beim Abrufen der Daten:", error);
    }
}

fetchData(url);
