function shortcut(s1, s2) {
     if (!s1 || !s2) {
        return '';
    }

    const initialLetters = s1.charAt(0).toUpperCase() + s2.charAt(0).toLowerCase();
    return initialLetters;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
