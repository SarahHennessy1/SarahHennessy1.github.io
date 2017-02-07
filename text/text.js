

var quotes = [
	'We the people tell the government what to do, it doesn\’t tell us.',
	'I would rather belong to a poor nation that was free than to a rich nation that had ceased to be in love with liberty.',
	'It\’s easier to do a job right, than to explain why you didn\’t.',
	'A president\'s hardest task is not to do what is right, but to know what is right.',
	'One man with courage makes a majority.',
	'War should never be entered upon until every agency of peace has failed.',
	'The only thing we have to fear is fear itself.',
	'This country, with its institutions, belongs to the people who inhabit it. Whenever they shall grow weary of the existing government, they can exercise their constitutional right of amending it or their revolutionary right to dismember or overthrow it.',
	'Liberty without learning is always in peril, and learning without liberty is always in vain.',
	'Being a politician is a poor profession. Being a public servant is a noble one.',
	'Think about every problem, every challenge, we face. The solution to each starts with education.',
	'He serves his party best who serves the country best.',
	'I pity the man who wants a coat so cheap that the man or woman who produces the cloth or shapes it into a garment will starve in the process.',
	'Take time to deliberate; but when the time for action arrives, stop thinking and go in.',
	'All the lessons of history and experience must be lost upon us if we are content to trust alone to the peculiar advantages we happen to possess.',
	'May the boldest fear and the wisest tremble when incurring responsibilities on which may depend our country\'s peace and prosperity, and in some degree the hopes and happiness of the whole human family.',
	'Always bear in mind that your own resolution to succeed is more important than any other one thing.',
	'The art of war is simple enough. Find out where your enemy is. Get at him as soon as you can. Strike him as hard as you can, and keep moving on.',
	'For honest merit to succeed amid the tricks and intrigues which are now so lamentably common, I know is difficult; but the honor of success is increased by the obstacles which are to be surmounted. Let me triumph as a man or not at all.',
	'Be fit for more than the thing you are now doing. Let everyone know that you have a reserve in yourself; that you have more power than you are now using. If you are not too large for the place you occupy, you are too small for it.',
	'Good ball players make good citizens.',
	'A truly American sentiment recognizes the dignity of labor and the fact that honor lies in honest toil.',
	'Our differences are policies; our agreements, principles.',
	'We must dare to be great; and we must realize that greatness is the fruit of toil and sacrifice and high courage.',
	'Don\'t write so that you can be understood, write so that you can\'t be misunderstood.',
	'One cool judgment is worth a thousand hasty counsels. The thing to be supplied is light, not heat.',
	'America\'s present need is not heroics, but healing; not nostrums, but normalcy; not revolution, but restoration; not agitation, but adjustment; not surgery, but serenity; not the dramatic, but the dispassionate; not experiment, but equipoise; not submergence in internationality, but sustainment in triumphant nationality.',
	'Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb ... Persistence and determination alone are omnipotent.',
	'Older men declare war. But it is youth that must fight and die. And it is youth who must inherit the tribulation, the sorrow and the triumphs that are the aftermath of war.',
	'Yours is not the task of making your way in the world, but the task of remaking the world which you will find before you.',
	'I have found the best way to give advice to your children is to find out what they want and then advise them to do it.',


]

function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}








