function calculateResult() {
    let answer1 = document.getElementById("q1").value;
    let resultText = (answer1 == "1") ? "Your child may enjoy indoor hobbies like reading or drawing!" : "Your child may enjoy outdoor hobbies like sports or gardening!";
    document.getElementById("result").innerText = resultText;
}
