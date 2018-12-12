# Interactive CSS Interview Questions
List of interactive CSS questions for job interviews (and practice).

Questions have been developed in such a way that they should be **solved by only CSS** (no JS and no markup changes).
Open up your browser, select a question, and use DevTools to add/edit styles in order to solve a given problem.

Note that the questions are ordered by relative difficultly, from easiest (first) to hardest (last).


## Notes/FAQ:
I used 'scoped' style tags (e.g. `<style scoped>`) to prevent style changes made by interviewees (in the DevTools)DevTools from affecting other elements in the app.


## Additional Questions:
You can add (or remove) questions from the app.
You'll need to:
- Create a question as a `.vue` component (follow the template of the other questions)
- Import it in `questionList.js`

#### Dev Setup Quickstart:
1. clone repo and cd to directory
2. install packages: `$ npm install`
3. run the dev server: $npm run dev (code changes will automatically be updated in the browser)

###### Technologies utilized:
- Vue
- Vue Router
- Vuex
- CSS Grids and Flexbox
- Less
- Webpack 


## License:
Copyright © 2018 Dee Reddy. BSD-2 License.
