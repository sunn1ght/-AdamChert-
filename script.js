let textInput = document.querySelector('#user-input');



document.querySelector('button').onclick = () => {

    let str = textInput.value; // input text
    let str2 = '';

    const letter = {
        'q' : 'й',  'Q' : 'Й',
        'w' : 'ц',  'W' : 'Ц', 
        'e' : 'у',  'E' : 'У',
        'r' : 'к',  'R' : 'К',
        't' : 'е',  'T' : 'Е',
        'y' : 'н',  'Y' : 'Н',
        'u' : 'г',  'U' : 'Г',
        'i' : 'ш',  'I' : 'Ш',
        'o' : 'щ',  'O' : 'Щ',
        'p' : 'з',  'P' : 'З',
        '[' : 'х',  
        ']' : 'ъ',  
        'a' : 'ф',  'A' : 'Ф',
        's' : 'ы',  'S' : 'Ы',
        'd' : 'в',  'D' : 'В',
        'f' : 'а',  'F' : 'А',
        'g' : 'п',  'G' : 'П',
        'h' : 'р',  'H' : 'Р',
        'j' : 'о',  'J' : 'О',
        'k' : 'л',  'K' : 'Л',
        'l' : 'д',  'L' : 'Д',
        ';' : 'ж',  
        "'" : 'э',  
        'z' : 'я',  'Z' : 'Я',
        'x' : 'ч',  'X' : 'Ч',
        'c' : 'с',  'C' : 'С',
        'v' : 'м',  'V' : 'М',
        'b' : 'и',  'B' : 'И',
        'n' : 'т',  'N' : 'Т',
        'm' : 'ь',  'M' : 'Ь',
        ',' : 'б',  
        '.' : 'ю', 
        '`' : 'ё',  
    };

    for (let i=0; i<str.length; i++){
        //console.log(str[i]); -  просто так, проверка для себя
        console.log(letter[ str[i]]);
        if(letter[str[i]]){
            str2 += letter[ str[i]];
        } else{
            str2 += str[i];
        }
    }

    document.querySelector('#out').textContent = str2;
}
