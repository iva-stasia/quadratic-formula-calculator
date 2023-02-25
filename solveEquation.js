function solveEquation(a, b, c) {
    let answer = [];
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant >= 0) {
        answer.push(((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(1));
    }
    if (discriminant > 0) {
        answer.push(((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(1));
    }

    return answer;
}
