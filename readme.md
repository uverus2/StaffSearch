# Interview practical test

## Setup

You'll need to have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and a code editor like [Visual Studio Code](https://code.visualstudio.com/) installed.

Clone this project using git.

Install NPM modules with `npm install`

Run the project with `npm start`

## Instructions

The aim of this task is to produce a profile listing component that uses the [RandomUser](https://randomuser.me/) API.

**Requirements:**

- On page load, 10 random profiles showing their avatar and name should be listed.
- These profiles can be filtered by their name with a text input box.
- When clicking one of the profile items, this needs to take the user to a new page or open a pop-up modal, that gives more details about the person they have clicked on.
- It needs to match the designs given, be responsive, and use the assets provided.
- Only needs to work in Chrome.

## Submission

Once complete, push them up to a repository you've created on a git hosting platform of your choice. We will discuss the task and take a look at your submission in your interview.

## Designs

You can find the designs in the `/designs` folder.

## Create component/requirements

You should create your component(s) in the components folder located in `/src/app/components`.

You can show the profile details on a new page using React Router, in which you just need to add a new route to the `routes.js` file located in `/src/core/routing/`. Or create a pop-up model to show the data if you don't wish to use React router.

You should use Styled Components for styling your components. You can find documentation for Styled Components [here]( https://styled-components.com/).

## API

You should use the RandomUser API for this task. No signup or auth token is required. You can find the documentation for the API here https://randomuser.me/documentation.

## Assets

You can find the assets in the `/public` folder. Webpack has been already set up for you with [file-loader](https://webpack.js.org/loaders/file-loader/) for images and [SVGR](https://github.com/gregberge/svgr) for SVG's. If you need an example, the `Example` component shows how you would import and use images and SVG's. 

# Have a question or issue?

Submit a new issue in the issue tracker [here](https://gitlab.com/solent-university/public/solent-interview-project/-/issues).
