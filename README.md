### Making Updates
Updating the course website is super simple: just follow these steps! You must have [Node installed](https://nodejs.org/en/download/). 

1. Clone this repository to your local machine, then run npm install react-scripts.
2. Run the website locally in development mode by running npm start and opening http://localhost:3000/ in a web browser. 
3. Find the page/component you would like to update by navigating to the src directory. If you want to update the content of the page, you will probably want to look in src/Info, while if you want to update the code or structure of the page, you should look in src/Components or src/Pages.
4. Make and commit your changes, leaving a descriptive commit message.
5. Pull from GitHub (in case any changes have been pushed since you last pulled) and resolve any merge conflicts.
6. Push your changes to Github.
7. Run npm run build && npm run deploy to actually build and deploy your changes to the website.