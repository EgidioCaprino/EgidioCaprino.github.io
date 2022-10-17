---
layout: post
title:  "What does it really mean writing code?"
---
If I would ask you what a programmer does, your answer would probably be something like
_"a programmer writes computer applications"_. A more detailed definition is that a programmer designs algorithms and
translate them into code that can be executed by a computer. So a programmer starts their job by thinking about the
steps to perform to produce the expected result. For instance, it may be something like:
_"when this function runs, it will receive the list of products the user wants to buy, so I have to check whether the
products are still available, then compute the total amount to be paid and create a new order in the database for the
current user"_. The algorithm is defined. At this point the programmer will jump to their keyboard, open a new file
and start coding the algorithm that lives in their head. After a few rounds of testing the functions does what it
should do. Perfect, you might think. Mission accomplished.

Wrong!

If this would be your approach you would end up with some code that (probably) works, but that is terribly hard to
read. As soon as you have written it, the code is fresh in your mind and it will be easy for you to read and understand.
In a month's time, it will take you 10 or 15 minutes to recall why you did that particular step. In 6 months' time it
will cost you much more time. And we are only considering yourself as the programmer who wrote the code. If you go on
vacation or start working for a different company, one of your colleagues will pick up your work and will be very
frustrated trying to understand what that variable means.

This leads us to an important aspect of software products that is usually overlooked: **maintenance cost**. If we consider
the overall cost of a software product, from when we start gathering the requirements to when we dismiss it, the
maintenance takes more than half of the total cost (Massimo Pica, _Systems Lifecycle Cost-Effectiveness_, 2016). But
there is a more important fact that will give you a better idea of maintenance costs. If fixing a bug found while
gathering the requirements costs you $100, fixing it during the QA testing phase will cost you $1,500 and $10,000 while
the product is in production (from a 2003 study by the Department of Commerce’s National Institute of Standards
and Technology).

Those are concrete costs that companies pay. But there is another one which is less visible: developer happiness.
I never met anybody that said _"Look at that messy procedure. I look forward to diving into it"_. Working on code that
is hard to read and understand is frustrating and will reduce the quality perceived by the developers and their trust
in it. That's why I love this quote:

<blockquote class="blockquote">
  <p class="mb-0">
    Always write code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you
    live.
  </p>
</blockquote>

For this reason, I believe that being a programmer does not only mean writing code that works. Ideally, you want
someone who isn't a programmer to read your code and to understand what it does. This may sound impossible, but that's
exactly the goal you should have in your mind when coding. Whenever you have to choose a name for a variable or a
function then ask yourself: _"Would the man on the street understand what the code does"_? At the end of the day, your
code is mostly composed of words you chose to use. Choose significative words. Whenever you feel the need to add a
comment try to refactor your code so that it will communicate the message that you would have written in the comment
instead. Prefer speaking names rather than meaningless or ambiguous abbreviations or worst, single-letter names!

In the long run, writing maintainable code is the winning choice. The implementation will cost slightly more, but
finding bugs and introducing new functionalities will cost less and it won't be painful for developers to work on it.
There are many techniques your team can adopt to increase code maintainability, like _test-driven development_
and _peer code reviews_, but those are broad topics that deserve dedicated space.
