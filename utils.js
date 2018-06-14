function splitAndMerge(string, separator) {
    const words_arr = string.split(' ');
    let symbol_arr = [];
    for (let i=0; i < words_arr.length; i++)
        symbol_arr.push(words_arr[i].split('').join(separator))
    return symbol_arr.join(separator);
}

// console.log (splitAndMerge('Hello world!', ' '));

function convert(hash) {
    let arr = [];
    for (let key in hash){
        arr.push([key.toString(), hash[key]])
    }
    return arr;
}

// console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

function toCamelCase(string) {
    const words_arr = string.split(/[-_]/);
    let camel_str = '';
    if (words_arr.length > 1) {
        camel_str = words_arr[0];
        for (let i=1; i < words_arr.length; i++) {
            if (words_arr[i].length > 1)
                camel_str += words_arr[i][0].toUpperCase() + words_arr[i].substr(1);
            else if (words_arr[i].length === 1)
                camel_str += words_arr[i][0].toUpperCase()
        }
    }
    return camel_str;
}

// console.log(toCamelCase('The_stealth_warrior_a'));

function reverseEachWord(string) {
    let res_str = '';
    for (let i=0; i<string.length; i++){
        if (string[i] === ' ')
            res_str += string[i];
        else {
            let word = [string[i]];
            while (string[i+1] !== ' ' && i+1 !== string.length){
                word.push(string[i+1]);
                ++i;
            }
            res_str += word.reverse().join('');
        }
    }
    return res_str;
}

// console.log(reverseEachWord(" A fun little challenge! "));

function stringExpansion(string) {
    let res_string = '';
    for (let i=0; i<string.length; i++){
        if (string[i]>='0' && string[i]<='9'){
            if ((string[i+1]>='a' && string[i+1]<='z') || (string[i+1]>='A' && string[i+1]<='Z')) {
                res_string += string[i + 1].repeat(string[i].valueOf());
                ++i;
            }
        }
        else if ((string[i]>='a' && string[i]<='z') || (string[i]>='A' && string[i]<='Z'))
            res_string += string[i];
    }
    return res_string;
}

// console.log(stringExpansion('3d332f2a'));
// console.log(stringExpansion('abcde'));
// console.log(stringExpansion(''));