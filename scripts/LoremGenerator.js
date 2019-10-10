function GenerateLoremString(wordsAmount, doParagraphs)
{
    let str = "";
    let totalAmount = 0;
    let sentenceLength = GetRandomSentenceLength(wordsAmount);
    let sentenceCounter = 0;

    if (wordsAmount > 999999)
        wordsAmount = 999999;

    while (totalAmount < wordsAmount)
    {
        for(let i = 0; i < sentenceLength - 1; i++)
        {
            if (IsSeparator())
                strTemp = GetRandomWord() + ", ";
            else
                strTemp = GetRandomWord() + " ";
            
            if (i == 0)
                strTemp = strTemp.charAt(0).toUpperCase() + strTemp.substring(1);

            str += strTemp;
        }

        str += GetRandomWord() + ". ";

        totalAmount += sentenceLength;
        sentenceCounter++;

        if (doParagraphs && IsNewParagraph(sentenceCounter))
        {
            str += "<br><br>";
            sentenceCounter = 0;
        }
    }
    
    return str;
}

let Words = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras',
];

function GetRandomWord()
{
    return Words[Math.ceil(Math.random() * Words.length) - 1];
}

function GetRandomSentenceLength(wordsAmount)
{
    let f = Math.ceil(Math.random() * 20) + 5;

    if (f > wordsAmount)
        f = wordsAmount;

    return f;
}

function IsSeparator()
{
    return Math.ceil(Math.random() * 10) == 1;
}

function IsNewParagraph(i)
{
    return i > 2 ? (Math.ceil(Math.random() * 4) == 1) : false;
}

function CallGenerator(doParagraph)
{
    document.getElementById("GeneratorOutput").innerHTML = GenerateLoremString(TryParseInt(prompt("Amount of Words:")), doParagraph);
}

function TryParseInt(str)
{
    let retValue = 0;

    if(str !== null)
        if(str.length > 0)
            if (!isNaN(str))
                retValue = parseInt(str);

    return retValue;
}