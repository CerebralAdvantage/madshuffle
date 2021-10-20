# Mad Shuffle

This guy (https://stackoverflow.com/questions/2145510/random-is-barely-random-at-all), is disappointed with the tendency for his PRNG to repeat itself.  He is experiencing the Birthday Paradox.  The tendency for a range-constrained RNG to repeat itself after sampling roughly the square root of the range.  For instance, if your constraint range is 100, you will repeat after roughly 10 samples.  This is counter-intuitive and frustrating.

Enter the madshuffle. This code produces 10,000 random numbers that may be dealt like a deck of cards.  If you deal out all 10,000, you will see the numbers from 0 to 9999 without ever seeing a repeat.  However, you can deal from one of the small "paragraphs" and mask all but the last two digits to see the numbers 0-99.  Or, you can start at any multiple of 1000 and mask all but the last 3 digits to see 0-999, nicely distributed, with no repeats.  In this way, you can set the list of numbers up on your server once, and users can simply walk the list to get a stream of non-repeating values.  This saves the server having to generate a different list for each user.

Outside of storing the shared, shuffled 10,000-item array, each user stores the index of the next "random" value.
That's 4 bytes per user.
