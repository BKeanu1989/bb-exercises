// alles mit diesem anfang '//' wird vom programm nicht verarbeitet - wird meistens als kommentarfunktion genutzt
// anzahl an spalten für die aufgabenstellung
const rows = 8 // in total 
// spaltenbezeichnungen
const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
// node js's - (programmiersprache) weise sachen auszugeben

process.stdout.write('a) \n')
// da die aufgabenstellung den spaltenbeginn mit 8 fordert, setzen wir die 8 als start und 'schleifen' uns via "row--" runter. solange bis die 1 erreicht ist
// die erste schleife, benennen wir sie einfach als hauptschleife ist für die spalten zuständig
for (let row = rows; row >= 1; row--) {
    // die innere schleife ist für die spalten zuständig
    // hier setzen wir den index des arrays (oder wie auch immer das in java heißt) auf den anfang -> 'A' und machen das solange bis wir das ende erreicht haben
    // pro schleife erweitern wir den index um 1 (col++)
    for (let col = 0; col < cols.length; col++) {
        // hier setzen wir die basis ausgabe
        let string = `${cols[col]}${row}` 
        // solange nicht das ende der spalte erreicht ist, fügen wir noch ein leerzeichen hinzu.
        if (col !== cols.length -1) string += ' '
        // hier erfolgt die ausgabe des zusammengesetzen strings
        process.stdout.write(`${string}`)
    }
    // ab hier ist das ende der inneren schleife aka spaltenschleife erreicht
    // also brauchen wir eine neue reihe der ausgabe - das erreichen wir via \n -> newline
    process.stdout.write('\n')
}

process.stdout.write('b) \n')
for (let row = 1; row < rows + 1; row++) {

    for (let colIndex = cols.length - 1; colIndex >= 0; colIndex--) {
        let string = `${cols[colIndex]}${row}`
        if (colIndex !== 0) string += ' '
        process.stdout.write(string)
    }
    process.stdout.write('\n')
}
