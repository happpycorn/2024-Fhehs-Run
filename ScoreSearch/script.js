function goBack() {
    window.location.href = "/2024-Fhehs-Run/Home";
}

window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    document.getElementById("number").textContent = params.get('number');
    document.getElementById("name").textContent = params.get('name');
    document.getElementById("score").textContent = params.get('score');
};