const quotes = [
	{ quote: "I love you more than yesterday, but less than tomorrow.", photo: "https://iili.io/JHOBYhX.jpg" },
	{ quote: "You are the missing piece I've been trying to find.", photo: "https://iili.io/JHOBCLg.jpg" },
	{ quote: "I never want to stop making memories with you.", photo: "https://iili.io/JHOB37V.jpg" },
	{ quote: "You are my sunshine on a cloudy day.", photo: "https://iili.io/JHOB2dQ.jpg" },
	{ quote: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.", photo: "https://iili.io/JHOBoBa.jpg" },
	{ quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.", photo: "https://iili.io/JHOBxEJ.jpg" },
	{ quote: "I need you like a heart needs a beat.", photo: "https://iili.io/JHOBT2R.jpg" },
	{ quote: "If I had a flower for every time I thought of you... I could walk through my garden forever.", photo: "https://iili.io/JHOBVv2.jpg" },
	{ quote: "Take my hand, take my whole life too. For I can’t help falling in love with you.", photo: "https://iili.io/JHOB14f.jpg" },
	{ quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.", photo: "https://iili.io/JHOBG24.jpg" },
	{ quote: "You’re the closest to heaven, that I’ll ever be.", photo: "https://iili.io/JHOBMYl.jpg" },
	{ quote: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.", photo: "https://iili.io/JHOBhT7.jpg" },
	{ quote: "I will never stop trying. Because when you find the one... you never give up.", photo: "https://iili.io/JHOBgyB.jpg" },
	{ quote: "I love you for all that you are, all that you have been and all that you will be.", photo: "https://iili.io/JHOBjj9.jpg" },
	{ quote: "To the world you may be one person, but to me you are the world.", photo: "https://iili.io/JHOBeEb.jpg" },
	{ quote: "I’ve tried so many times to think of a new way to say it, and it’s still I love you.", photo: "https://iili.io/JHOBUvV.jpg" },
	{ quote: "I love you more than I have ever found a way to say to you.", photo: "https://iili.io/JHOB83x.jpg" },
	{ quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", photo: "https://iili.io/JHOBLGa.jpg" },
	{ quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.", photo: "https://iili.io/JHOCHZX.jpg" },
	{ quote: "When I see your face, there’s not a thing that I would change, ’cause you’re amazing – just the way you are.", photo: "https://iili.io/JHOC2Gs.jpg" },
	{ quote: "In real love you want the other person's good. In romantic love you want the other person.", photo: "https://iili.io/JHOCfa4.jpg" },
	{ quote: "I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.", photo: "https://iili.io/JHOCKFf.jpg" },
];

const quoteContainer = document.querySelector(".quote-container");
const quoteText = quoteContainer.querySelector(".quote");
const quotePhoto = quoteContainer.querySelector("img");
const heartButton = document.querySelector(".heart-button");

heartButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteText.textContent = randomQuote.quote;
	quotePhoto.src = randomQuote.photo;
});