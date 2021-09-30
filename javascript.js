var quotes = [
    'The Way Get Started Is To Quit Talking And Begin Doing. - Walt Disney',
    'The Pessimist Sees Difficulty In Every Oppertunity. The Optimist Sees The Oppertunity In Every Difficulty. - Winston Churchill',
    'Don\'t Let Yesterday Take Up Too Much of Today. - Will Rogers',
    'You Learn More From Failure Than From Sucess. Don\'t Let It Stop You. Failure Builds Character. - Unknown',
    'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. -Vince Lombardi',
    'If You Are Working You On Something that you really care about, You Don\'t have to be pushed. The vision pulls you. - Steve Jobs',
    'People Who are crazy enough to think they can change the world, are the ones who Do. - Rob Siltanen',
    'Failure will never overtake me if my determination to suceed is strong enough. - Og Mandino',
    'Entreprenerors are great at dealing with uncertinity and also very good at minimizing risk. that\'s the classic entrepreneur. - Mohnish Pabrai',
    'We may encounter many defeats but we must not be defeated. - Maya Angelou'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}