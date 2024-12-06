function encodeBinary() {
    const input = document.getElementById("inputText").value;
    const output = input
        .split("")
        .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
    document.getElementById("outputText").value = output;
}

function decodeBinary() {
    const input = document.getElementById("inputText").value;
    try {
        const output = input
            .split(" ")
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join("");
        document.getElementById("outputText").value = output;
    } catch {
        document.getElementById("outputText").value = "Invalid binary input.";
    }
}
