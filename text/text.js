var quotes = [
	'I would rather belong to a poor nation that was free than to a rich nation that had ceased to be in love with liberty.',
	'It\'s easier to do a job right, than to explain why you didn\'t.',
	'A president\'s hardest task is not to do what is right, but to know what is right.',
	'One man with courage makes a majority.',
	'War should never be entered upon until every agency of peace has failed.',
	'The only thing we have to fear is fear itself.',
	'This country, with its institutions, belongs to the people who inhabit it. Whenever they shall grow weary of the existing government, they can exercise their constitutional right of amending it or their revolutionary right to dismember or overthrow it.',
	'Liberty without learning is always in peril, and learning without liberty is always in vain.',
	'Being a politician is a poor profession. Being a public servant is a noble one.',
	'Think about every problem, every challenge, we face. The solution to each starts with education.',
	'He serves his party best who serves the country best.',
	'We the people tell the government what to do, it doesn\'t tell us.',
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
	'We need to internalize this idea of excellence. Not many folks spend a lot of time trying to be excellent.',


]

var anti = [
	'There is nothing which I dread so much as a division of the republic into two great parties, each arranged under its leader, and concerting measures in opposition to each other. This, in my humble apprehension, is to be dreaded as the greatest political evil under our Constitution. - John Adams',
	'The happiness of society depends so much on preventing party spirit from infecting the common intercourse of life, that nothing should be spared to harmonize and amalgamate the two parties in social circles. - Thomas Jefferson ',
	'The alternate domination of one faction over another, sharpened by the spirit of revenge, natural to party dissension, which in different ages and countries has perpetrated the most horrid enormities, is itself a frightful despotism. - George Washington',
	'It is the steady abuse of power in other governments which renders that of opposition always the popular party. -Thomas Jefferson',
	'I am no believer in the amalgamation of parties, nor do I consider it as either desirable or useful for the public; but only that, like religious differences, a difference in politics should never be permitted to enter into social intercourse or to disturb its friendships, its charities or justice. In that form, they are censors of the conduct of each other and useful watchmen for the public. -Thomas Jefferson',
	'I can scarcely contemplate a more incalculable evil than the breaking of the Union into two or more parts. -Thomas Jefferson',
	'If we keep together we shall be safe, and when error is so apparent as to become visible to the majority, they will correct it. -Thomas Jefferson'
]

var answer = [
	'Woodrow Wilson, the 28th President of the United States, Democrat',
	'Martin Van Buren, the 8th President of the United States, Democrat',
	'Lyndon B. Johnson, the 36th President of the United States, Democrat',
	'Andrew Jackson,the 7th President of the United States, Democrat',
	'William McKinley, the 25th President of the United States, Republican',
	'Franklin D. Roosevelt, the 32nd President of the United States, Democrat',
	'Abraham Lincoln, the 16th President of the United States, Republican',	
	'John F. Kennedy, the 35th President of the United States, Democrat',
	'Herbert Hoover, the 31st President of the United States, Republican',
	'George H.W. Bush, the 41st President of the United States, Republican',
	'Rutherford B. Hayes, the 19th President of the United States, Republican',
	'Ronald Reagan, the 40th President of the United States, Republican',
	'Benjamon Harrison, the 23rd President of the United States, Republican',
	'Andrew Jackson, the 7th President of the United States, Democrat',
	'Martin Van Buren, the 8th President of the United States, Democrat',
	'James K. Polk, the 11th President of the United States, Democrat',
	'Abraham Licoln, the 16th President of the United States, Republican',
	'Uylsses S. Grant, the 18th President of the United States, Republican',
	'Rutherford B. Hayes, the 19th President of the United States, Republican',
	'James Garfield, the 20th President of the United States, Republican',
	'Chester Arthur, the 21st President of the United States, Republican',
	'Grover Cleveland, the 22nd President of the United States, Democrat',
	'William McKinley, the 25th President of the United States, Republican',
	'Theodore Roosevelt, the 26th President of the United States, Republican',
	'William Taft, the 27th President of the United States, Republican',
	'Woodrow Wilson, the 28th President of the United States, Democrat',
	'Warren G. Harding, the 29th President of the United States, Republican',
	'Calvin Coolidge, the 30th President of the United States, Republican',
	'Herbert Hoover, the 31st President of the United States, Republican',
	'Franklin D. Roosevelt, the 32nd President of the United States, Democrat',
	'Harry S. Truman, the 33rd President of the United States, Democrat',
	'Barack Obama, the 44th President of the United States, Democrat',
]



var urls = [
	"index.html",
	"alt.html",
]


function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	$('quoteDisplay').innerHTML = quotes[randomNumber];
}

function antiQuote() {
	var randomNumber = Math.floor(Math.random() * (anti.length));
	$('antiDisplay').innerHTML = anti[randomNumber];
}

function goSomewhere() {
    var url = urls[Math.floor(Math.random()*urls.length)];
   	window.location = url;
}

function answerQuote() {
	var match = window.location.hash.match(/^#?(.*)$/)[1];
	$('answerDisplay').innerHTML = answer[match];
}













