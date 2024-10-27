const url = "https://script.google.com/macros/s/AKfycbwlDDXSn4oyUNEAmzAayWN9bljmOkOBPjerBc3Os1jDLN-GVjgxZlxgL9GUXvkDTg/exec";
const grade = ['國三', '國二', '國一', '高三', '高一', '老師', '範本'];

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        gradename: params.get('gradename'),
        number: params.get('number')
    };
}

window.onload = async function() {

    const params = getQueryParams();

    const gradename = grade[parseInt(params.gradename)];
    
    try {

        const response = await fetch(`${url}?name=${gradename}`);
        const data = await response.json();
        
        let found = false;

        data.forEach(entry => {
            if (entry[0] === params.number) {
                window.location.href = `/2024-Fhehs-Run/ScoreSearch?number=${entry[0]}&name=${entry[1]}&score=${entry[6]}`;
                found = true;
            }
        });

        if (!found) {
            window.location.href = `/2024-Fhehs-Run/NotFind`;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        window.location.href = `/2024-Fhehs-Run/NotFind`;
    }
    
};