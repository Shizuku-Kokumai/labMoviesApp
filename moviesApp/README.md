# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Shizuku Kokumai

## Overview.
I added "POPULAR", "TOP RELATED", and "UPCOMING" in the site header. In POPULAR, it shows the a list of the current popular movies on TMDB, and this list updates daily. In TOP RELATED, it shows a list of the top related movies on TMDB. In "UP COMING", it shows a list of upcoming movies in theatres. And I changed the valuatoin color based on how well they're rated. If it is less than 7, the color is blue. If it is greater than 7, the color is red.

### New Pages.

+ List of popular movies.
+ List of top related movies
+ List of upcoming movies
+ Modified the voluation color

### New Features.

[ Provide a bullet-point list of the __new features__ you added to the Movies Fan app.] 

+ The color of the number of ratings depends on the height of the rating

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

Nothing.

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.

+ /movies/popularmovies - the list of popular muvies
+ /movies/toprelated - the list of top related movies
+ /movies/upcoming - the list of upcoming movies

## App Design.

### Component catalogue.

[ Insert a screenshot from the Storybook UI, and highlight the stories that relate to your __new/modified components__ - see the example screenshot below.] .......

![ ](./images/82.png)
>This is the current popular movies page.

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](./images/detail.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/review.png)

>Shows the full review for a movie.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

e.g. 

+ /actors - displays a list of popular actors.
+ /actors/:id - shows details about a particular actor.
+ /actors/:id/movies (protected) - an actor's movie credits.
+ etc.

[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).
