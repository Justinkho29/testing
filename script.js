// Effect 1: Generate Floating Background Hearts
const heartBg = document.getElementById('heart-bg');
const heartSymbols = ['❤️', '💖', '✨', '💕'];

for (let i = 0; i < 20; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartBg.appendChild(heart);
}

// Effect 2: The Dodging "No" Button
function dodgeButton() {
    const btn = document.getElementById('no-btn');
    
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// Effect 3: Transition to Next Page
function goToPage2() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    page1.style.display = 'none';
    page2.style.display = 'block';
    page2.classList.add('fade-in');
}

// Effect 4: Send via Mailto (Opens Email App with responses)
const loveForm = document.getElementById('love-form');

loveForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Pigilan ang default page reload

    // Kunin ang mga isinagot
    const favThing = document.getElementById('fav-thing').value;
    const nextDate = document.getElementById('next-date').value;
    const loveScore = document.getElementById('love-score').value;

    // ILAGAY ANG SARILI MONG EMAIL DITO:
    const myEmail = "justindavekho29@gmail.com"; 

    // Ayusin ang itsura ng mensahe na dadating sa email mo
    const subject = encodeURIComponent("Survey Results from My Love! 💕");
    const body = encodeURIComponent(
        `Eto na ang mga sagot ko sa survey mo:\n\n` +
        `1. Favorite thing about you: ${favThing}\n` +
        `2. Next date idea: ${nextDate}\n` +
        `3. How much I love you: ${loveScore}/100\n\n` +
        `I love you! ❤️`
    );

    // Bukasin ang email client
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
});
