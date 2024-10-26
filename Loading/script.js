window.onload = function() {

    const params = new URLSearchParams(window.location.search);
    const gradename = params.get("gradename");
    const number = params.get("number");

    window.location.href = `/ScoreSearch?gradename=${gradename}&number=${number}`;
};