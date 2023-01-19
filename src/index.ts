//  nanostring
//  An alternative to nanoid with no import troubles

export default (
    length = 16,
    args = {
        lowercase: true,
        uppercase: false,
        numbers: true
    }) => {

    let output = '';
    if (length <= 0)
        length = 1;
    if (length > 65535)
        length = 65535;

    const chars: string[] = [];

    if (args.lowercase)
        for(let i=97; i<123; i++)
            chars.push(String.fromCharCode(i));

    if (args.uppercase)
        for(let i=65; i<91; i++)
            chars.push(String.fromCharCode(i));

    if (args.numbers)
        for(let i=0; i<10; i++)
            chars.push(String(i));

    if (!chars.length)
        chars.push('?');

    for(let i=0; i<length; i++)
        output += chars[Math.floor(Math.random()*chars.length)];

    return output;
}