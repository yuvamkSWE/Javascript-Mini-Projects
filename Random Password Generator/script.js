function generate(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;':";

    let allowedChars = '';
    let password = '';

    if (includeLowercase) {
        allowedChars += lowercaseChars;
    }
    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numbers;
    }
    if (includeSymbols) {
        allowedChars += symbols;
    }

    if (length <= 0) {
        return `(Password length must be at least 1)`;
    }
    if (allowedChars.length == 0) {
        return `(No characters selected)`;
    }
    for (let i = 0; i < length; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    return password;
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generate(parseInt(length), includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password-output').innerText = password;
}