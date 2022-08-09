

function copyToClipboard(elementID) {
    console.log(elementID)
    let element = document.getElementById(elementID); //select the element
    
    if (element) {
        let elementText = element.textContent; //get the text content from the element
        copyText(elementText); //use the copyText function below
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

export default copyToClipboard