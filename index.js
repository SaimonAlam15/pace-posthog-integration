export async function onEvent(event, meta) {
    const api_key = meta.config.api_key
    const raw = JSON.stringify({
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
        .catch((error) => console.error('error:', error))
}
