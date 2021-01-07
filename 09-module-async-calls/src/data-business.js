
export function getCharacters() {
    return fetch("https://www.breakingbadapi.com/api/characters").then(
        response => response.json()
    );
}

export function getCharactersById(id) {
    return fetch("https://www.breakingbadapi.com/api/characters/" + id).then(
        response => response.json()
    );
}

