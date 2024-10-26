const url = "https://script.google.com/macros/s/AKfycbwlDDXSn4oyUNEAmzAayWN9bljmOkOBPjerBc3Os1jDLN-GVjgxZlxgL9GUXvkDTg/exec";
const grade = ['國三', '國二', '國一', '高三', '高一', '老師', '範本'];

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        gradename: params.get('gradename'),
        number: params.get('number')
    };
}

async function fetchData() {
    const params = getQueryParams();
    // if (!params.gradename || !params.number) {
    //     alert("查詢參數不完整");
    //     return;
    // }

    const gradename = grade[parseInt(params.gradename)];
    try {
        const response = await fetch(`${url}?name=${gradename}`);
        const data = await response.json();
        
        let found = false;
        data.forEach(entry => {
            if (entry[0] === params.number) {
                document.getElementById("number").textContent = entry[0];
                document.getElementById("name").textContent = entry[1];
                document.getElementById("score").textContent = entry[6];
                found = true;
            }
        });

        if (!found) {
            displayNoResult();
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        displayNoResult();
    }
}

function displayNoResult() {
    document.getElementById("number").textContent = "-";
    document.getElementById("name").textContent = "查無此人";
    document.getElementById("score").textContent = "請確認年級與號碼是否有誤";
}

function goBack() {
    window.location.href = "/Home";
}

window.onload = fetchData;