# SOlent Search

## Setup
- Clone and the project and run `npm install`
- To start the project run `npm run start`

## Live
- Live version can be found [here](https://searchstaff-cf81b.web.app/)
- Compiled with webpack and hosted on Firebase.

## Instructions
The aim of this task is to produce a profile listing component that uses the [RandomUser](https://randomuser.me/) API.

## Library List
- [Axios](https://github.com/axios/axios) for interactions with the API.
- [MomentJS](https://momentjs.com/) for simple conversion of dates and times to readable data.
- [React Moment](https://github.com/headzoo/react-moment#readme) created React JS components from the moment JS libary allowed for easier use within the application. 
-[React Helmet](https://github.com/nfl/react-helmet#readme) for creating meta data for the Home and Profile page.
-[React Spinners](github.com/davidhu2000/react-spinners) Simple library containing different loaders/spinners in the forms of react components. It was used to show a loading effect to the user.
-[Styled Components](https://styled-components.com/) for the styling of the application.
-[Yup](https://github.com/jquense/yup) Validation schema which was used with [React Hook Forms](https://react-hook-form.com/) to handle the validation of input and submission of form data.
## API
The RandomUser API was used for this task. No signup or auth token is required. You can find the documentation for the API here https://randomuser.me/documentation.

## Assets
You can find the assets in the `/public` folder. Webpack has been already set up for you with [file-loader](https://webpack.js.org/loaders/file-loader/) for images and [SVGR](https://github.com/gregberge/svgr) for SVG's. If you need an example, the `Example` component shows how you would import and use images and SVG's.