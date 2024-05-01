function canFormTriangle(a, b, c) {
    // Sprawdzenie nierówności trójkąta
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function calculateTriangleArea(a, b, c) {
    if (canFormTriangle(a, b, c)) {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        document.getElementById('result').textContent = `Pole trójkąta wynosi: ${area.toFixed(2)}`;
    } else {
        console.log("Podane długości nie tworzą trójkąta.");
        document.getElementById('result').textContent = "Podane długości nie tworzą trójkąta.";
    }
}