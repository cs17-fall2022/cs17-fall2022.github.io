### Setting Up the Website
The initial setting up of the website is the hardest part.

You should follow the instructions for deploying a React app with Github pages [here](https://github.com/gitname/react-gh-pages). 

A few notes before you set up:
* Historically, we've forked from the previous year's website for the next year, but for Fall 2022 we ran into some hiccups. Some of this had to do with set up itself and some of these were dependency issues. It's unsure whether forking was related to these problems. 
* If things aren’t going well with forking, you may want to directly follow Steps 1 & 2 in the instructions linked (i.e. making a new repository and a new React app) and then just then move the website code into the React app you just created and not fork. 
* `npm start` should still load the website locally so you can double check that the website loads after copying the React code over. If things are broken, you may have some debugging to do.
* We already have a package.json, but don’t completely override the old one. Cross-reference in case there are any package/dependency updates and update any details are necessary (e.g. the homepage).
* Please do the optional step so more than one HTA can update the website. You’ll only have to set up the website *once* as once the source code is in the website repository, everyone else can just pull. 


### Making Updates
Updating the course website is super simple: just follow these steps! You must have [Node installed](https://nodejs.org/en/download/). 

1. Clone this repository to your local machine, then run `npm install react-scripts`.
2. Run the website locally in development mode by running `npm start` and opening http://localhost:3000/ in a web browser. 
3. Find the page/component you would like to update by navigating to the src directory. If you want to update the content of the page, you will probably want to look in `src/Info`, while if you want to update the code or structure of the page, you should look in `src/Components` or `src/Pages`.
4. Most of the time you will look in `src/Info` to release assignments, labs, and projects.
5. If you want to update the Announcements, go to `src/Pages/HomePage/HomePage.js` and update the
div with the class-name "home-announcement". You’ll have to use new line tags `<br/>` if you don’t want everything jumbled into one paragraph
6. Make and commit your changes, leaving a descriptive commit message.
7. Pull from GitHub (in case any changes have been pushed since you last pulled) and resolve any merge conflicts.
8. Double check that your edits don't break the website by running locally with `npm start`. 
9. Push your changes to Github.
10. Run `npm run build` && `npm run deploy` to actually build and deploy your changes to the website.