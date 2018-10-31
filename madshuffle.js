// This code is dedicated to Michael Angeletti (orokusaki), who made me ask "why not?!"

let deck = [];


function init_deck(deck_size)
{
	let a,b,c,z, tmp;
	let i,j, overkill = deck_size * 20;

	//init the deck to identities
	for(i = 0; i < deck_size; i++) deck[i] = i;

	// first, shuffle the 10 different thousands digits
	for(i=0;i<overkill;i++)
	{
		a = Math.trunc((Math.random()*10)); // this just gives us
		b = Math.trunc((Math.random()*10)); // a random digit
		if(a!=b)
		{
			c = Math.trunc((Math.random()*1000));
			a *= 1000;
			b *= 1000;
			a += c;
			b += c;		
			tmp = deck[a];
			deck[a] = deck[b];
			deck[b] = tmp;
		}
	}
	
	// next, shuffle within a given cell of 1000
	for(i=0;i<overkill;i++) // we always overkill
	{
		a = Math.trunc((Math.random()*10)); // this just gives us
		b = Math.trunc((Math.random()*10)); // a random digit
		if(a!=b) // We're SWAPPING, here, people!
		{
			z = Math.trunc((Math.random()*10)); // first, get a digit
			z *= 1000; // then, pick a cell of 1000 (0, 1000, 2000, 3000, etc)
 			a = a*100+z; // This time, we're picking a random "100"
			b = b*100+z; // in a given cell of 1000 (z)
			c = Math.trunc((Math.random()*100)); // and this gives us our units
			a += c;
			b += c;		
			tmp = deck[a];
			deck[a] = deck[b];
			deck[b] = tmp; // cross fingers!
		}
	}

	// finally, shuffle each cell of 100
	for(i = 0; i < 10000; i += 100)
	{
		for(j = 99; j > 0; j--)
		{
			a = Math.trunc(Math.random()*j);
			tmp = deck[a+i];
			deck[a+i] = deck[j+i];
			deck[j+i] = tmp;
		}
	}
	// ... AND THAT'S IT, FOLKS.  At this point, the deck should conform to the magical
	// mod 100, mod 1000, mod 10000 distribution properties.  Testers... Start your engines!
}

let start, finish;

start = Date.now();
init_deck(10000);
finish = Date.now();

let x = [];
let bad = false;

for (i=0;i<10000;i+=100)
{
	for(j=0;j<100;j++)
		x[j] = 0;
	for(j=0;j<100;j++)
	{
		x[deck[j+i] % 100] = deck[j+i] % 100;
	}
	// now test
	bad = false;
	for(j=0;j<100;j++)
	{
		if(x[j] != j) bad = true;
	}
	//console.log("mod 100 test for cell ", i/100, " is ", bad==false);
}

for (i=0;i<10000;i+=1000)
{
	for(j=0;j<1000;j++)
		x[j] = 0;
	for(j=0;j<1000;j++)
	{
		x[deck[j+i] % 1000] = deck[j+i] % 1000;
	}
	// now test
	bad = false;
	for(j=0;j<1000;j++)
	{
		if(x[j] != j) bad = true;
	}
	//console.log("mod 1000 test for cell ", i/1000, " is ", bad==false);
}

for (i=0;i<10000;i+=1000)
{
	for(j=0;j<1000;j++)
		x[j] = 0;
	for(j=0;j<1000;j++)
	{
		x[deck[j+i] % 1000] = deck[j+i] % 1000;
	}
	// now test
	bad = false;
	for(j=0;j<1000;j++)
	{
		if(x[j] != j) bad = true;
	}
	//console.log("mod 1000 test for cell ", i/1000, " is ", bad==false);
}


	for(j=0;j<10000;j++)
		x[j] = 0;
	for(j=0;j<10000;j++)
	{
		x[deck[j]] = deck[j];
	}
	// now test
	bad = false;
	for(j=0;j<10000;j++)
	{
		if(x[j] != j) bad = true;
	}
	//console.log("mod 10000 test is ", bad==false);


//console.log("Time spent = ", finish-start, " milliseconds.");
let line = "";
let xx = 0;

for(i=0;i<500;i++) 
{
	line = "";
	for(j=0; j< 20; j++)
	{
		xx = deck[i*20+j];
		if (xx < 1000) line += " ";
		if (xx < 100) line += " ";
		if (xx < 10) line += " ";
		line += xx + " ";
	}
	console.log(line);
	if ((i+1)%5==0) console.log("");
}




