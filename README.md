# Interactive CSS Interview Questions
###### Demo: http://cssquestions.deepankara.com
###### Docker image: deesus/css-interview-questions:1
An interactive CSS questions app -- a list of coding challenges for job interviews (and for practice).

Questions have been developed in such a way that they should be **solved by only CSS** (no JS and no markup changes).
Open up your browser, select a question, and use DevTools to add/edit styles in order to solve a given problem.

Note that the questions are ordered by relative difficultly: from easiest (first) to hardest (last).


## Additional Questions:
You can add (or remove) questions from the app.
You'll need to:
- Create a question as a `.vue` component (use the template found in the `/templates` folder)
- Import it in `questionList.js`
- Inside `questionList.js`, give your question object a unique route


## Running the app via Docker:
1. Unsure you have installed Docker.
2. In Bash, pull and run the image from the remote public repo:
```bash
$ docker run -it -p 8080:80 --rm deesus/css-interview-questions:1
```
3. In your browser, you can access the app on http://localhost:8080


## Dev Quickstart:
1. clone repo and cd to directory
2. install packages: `$ npm install`
3. run the dev server: $npm run dev (code changes will automatically be updated in the browser)
4. consult `package.json` for additional npm scripts (e.g. for building and running in production)


## Dev Notes/FAQ:
Scoped style tags (e.g. `<style scoped>`) is employed to prevent the style changes made in DevTools (by users/interviewees) from affecting other elements in the app.

###### Technologies utilized:
- Vue
- Vue Router
- Vuex
- Docker
- Nginx
- CSS Grids and Flexbox
- Less
- Webpack 


## License:
Copyright © 2018-2019 Dee Reddy. BSD-2 License.
