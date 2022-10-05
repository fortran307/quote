let quote = [
    {
        text: 'Безнадёжно — это когда на крышку гроба падает земля. Остальное можно исправить.',
        autor: 'Перевозчик'
    },
    {
        text: 'Ох уж эти женщины! И жить с ними невозможно, и пристрелить жалко.',
        autor: 'Правдивая ложь'
    },
    {
        text: 'Вот и будем вдвоем жить! Дура! и рыцарь.',
        autor: 'Интерны'
    },    
    {
        text: 'Не любить женщину — преступление, любить — наказание.',
        autor: 'Холостяки'
    },    
    {
        text: 'От судьбы не уйдёшь, а вот со свадьбы сбежать можно.',
        autor: 'Черная кошка, белый кот'
    },    
    {
        text: 'У вас повреждение мозга. Вы обречены хорошо себя чувствовать до конца жизни.',
        autor: 'Доктор Хаус'
    },    
    {
        text: 'Люблю запах напалма поутру',
        autor: 'Апокалипсис сегодня'
    },    
    {
        text: 'Вы знаете, кто опаснее дурака? Дурак с инициативой.',
        autor: 'Иду на грозу'
    },    
    {
        text: 'Фугас мне в глаз, мы всё ещё в Нью-Йорке!',
        autor: 'Мадагаскар'
    }
]

function newQuote(){
    let myQuote = quote[Math.floor(Math.random() * quote.length)]
    document.getElementById('quote').textContent = myQuote.text
    document.getElementById('autor').textContent = myQuote.autor
}

//Если не указать getElementById('generateQuote'), то срабатывать будет не только по кнопке,
//а по любому месту
document.getElementById('generateQuote').addEventListener('click', newQuote)