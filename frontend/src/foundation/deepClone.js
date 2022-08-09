

function deepClone(string) {
    return JSON.parse(JSON.stringify(string))
}


export { deepClone }