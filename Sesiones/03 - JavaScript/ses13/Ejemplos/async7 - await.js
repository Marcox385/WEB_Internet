/* Uso de async/await */

// Función sin async/await
function loadJson(url) {
    return fetch(url).then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
}

loadJson('user.json').catch(alert);

// Función con async/await
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson('user.json').catch(alert);
