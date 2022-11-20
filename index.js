export function onEvent(event, meta) {
    var api_key = meta.config.api_key
    var raw = JSON.stringify({
        data: event,
    })

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': api_key,
        },
        body: raw,
        redirect: 'follow',
    }
    fetch('https://data.production.paceapp.com/events', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error('error', error))
}