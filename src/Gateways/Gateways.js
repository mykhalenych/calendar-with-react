const baseUrl = 'https://5e64c3daa49c210016106bc4.mockapi.io/list'


export const fetchEventsList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(eventsList => { return eventsList })
}

export const createEvent = (newEvent) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newEvent)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create task');
            }
        })
}

export const updateEvent = (eventId, updatedEvent) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(updatedEvent)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update task');
            }
        });
}

export const deleteEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE'
    }).then(
        res => {
            if (!res.ok) {
                throw new Error('Failed to delete tasks')
            }
        }
    )
}