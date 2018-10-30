# Mad Shuffle

If, like this guy (https://stackoverflow.com/questions/2145510/random-is-barely-random-at-all), you have been disappointed with the tendency for your PRNG to repeat itself, then you have had to deal with, what I call the Birthday Effect (see below).  After a lot of discussing the Birthday (Whatever), and a lot of "You should know better"-style put-downs (I mean, who can resist?  Right?), the original poster concluded that he didn't need to "...study probability to see the obvious here..." And he's right.  The fact is our exectations far outweight what actually happens... It's "obvious".  But it's also math, and you don't need a faulty PRNG to see the results.  Our intuition is simply out-of-sync with the reality, so our subjective reality insists that something is broken.  Magic tricks (see below) have little place in programming, even if they are steeped in math.

Which brings me to this code.  Of course the "answer" to wanting to see a stream of non-repeating random picks from a relatively small range of choices is to turn the range into a deck (think: deck of cards) and deal them off, one at a time.  By dealing them off and NOT returning them to the original deck, you achieve a perfect distribution, AND no repeats.  And card people (magicians and blackjack enthusiasts) will tell you that you also create a security hole, for card counters.  A card counter is someone who guesses the next random card based on counting all the other cards that have been dealt.  So if you are using a "shuffled deck" technique to avoid repeating values, only deal half the deck before re-shuffling.  Or better yet, don't use the technique in secure code.

Wouldn't it be neat, I thought, after long consideration of using a shuffled deck in a client/server scenario...  Wouldn't it be neat to have a shuffled deck that had the following attributes:
If you take a number and mod it by 100 (take the remainder after dividing by 100), you would get a full random deck, 0-99, with no repeats.  If you also took those same numbers and modded them by 1000, you would get 0-999, again, without repeats.  And the same if you mod by 10,000.  To look at these numbers, they would appear simply random.  To look at each modded output: likewise random.  And yet perfectly distributed with no repeats (a boon for card counters!).  This code does that.


### The Birthday Effect
I learned it as the Birthday Attack, and it has been called the Birthday Problem, the Birthday Paradox, you get the idea.  The Birthday Effect is the counter-intuitive reality of picking numbers freely from a constrained range.  If you have, say, a hat full of 100 numbered beads (numbered 0-99), and you shuffle them up and pick one out at random, you will be surprised how soon you pick one of the numbers that you already picked (assuming you put the numbered bead back in the hat and reshuffle).  If you have 100 numbers, the feeling is that you should be able to pull out at least 20 or 30 before you pick one that you already picked.  The number is closer to 10 (about the square root of the total).  This gives the feeling that something is rigged ("Johnny shouldn't get TWO door prizes!!!").  And the solution is simply not to put the beads that you picked out back into the hat.  The reason it is called the Birthday (whatever) is because it has been used by magicians addressing small audiences and "magically" finding two people with the same birthday in the audience.  The constrained range in that case is 365 (possible different birthdays), the square root of which is 19.105.  The tipping point of liklihood (where the odds get good) is around 23, so if you have an audience of 40 or 50 people, the odds are excellent that you have two people with the same birthday.