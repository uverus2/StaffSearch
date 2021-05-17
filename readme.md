# Solent Search

## Setup
- Clone and the project and run `npm install`
- Create a .env file
- Add an entry to the .env file called `NASA_API_KEY` and obtain an API key from [Nasa API](https://api.nasa.gov/)
- To start the project run `npm run start`

## Live
- Live version can be found [here](https://searchstaff-cf81b.web.app/)
- Compiled with Webpack and hosted on Firebase.

## User Stories

The aim of this task is to produce a profile listing component that uses the [RandomUser](https://randomuser.me/) API.

### Pages Available: 

- Home page "/"
- Profile "/profile/uuid" - UUID is returned from the API 

### As a user you are able to: 

- See 10 initial users being loaded to the page with their picture and name. 
- Load 10 more users when you click on load more button.
- Search for a specific user returned by the API by clicking on the search icon. The search is based on their full name.
  - Once a search is completed:
    - You will see the result and your value entered in the search box will be cleared.
    - You will a button to clear the searches if you wish. 
    - The load more button will not be shown unless you clear the results
    - If nothing is found you will get an error which will be displayed for 3 seconds and then cleared
- You can view each profile displayed by clicking on each user card
- In each user profile you will see basic information of the user such as email, dob and phone number.
- You are able to click on the email which send an email or click on the phone which will open a calling application of your choice. 
- On the profile you will see more information button which will display a little bit more details about the selected profile. The Information includes:
  - Location
  - Gender
  - Nationality
  - Age
  - When the account was created
- On the profile page you will also see a back button to take you back to the homepage
- Scroll to the bottom and see in the footer a picture of the day fed by the NASA APOD API 

### Error Handling

- If no results are returned by the API you will see an error message.
- If there is a an issue with the API such as a 500, 400 (future change of parameters) and etc an error message will be displayed.
- If special characters or numbers are entered in the search box you will get an error message
- If you try a different URL not listed above you will be shown an error page allowing you to go back to the homepage
- If user does not have UUID the profile page will show as an error allowing you to go back to the  homepage
- If fields are not found or returned by the API the fields will show as empty

## Library List
- [Axios](https://github.com/axios/axios) for interactions with the API.
- [MomentJS](https://momentjs.com/) for simple conversion of dates and times to readable data.
- [React Moment](https://github.com/headzoo/react-moment#readme) created React JS components from the moment JS libary allowed for easier use within the application.
- [React Helmet](https://github.com/nfl/react-helmet#readme) for creating meta data for the Home and Profile page.
- [React Spinners](github.com/davidhu2000/react-spinners) Simple library containing different loaders/spinners in the forms of react components. It was used to show a loading effect to the user.
- [Styled Components](https://styled-components.com/) for the styling of the application.
- [Yup](https://github.com/jquense/yup) Validation schema which was used with [React Hook Forms](https://react-hook-form.com/) to handle the validation of input and submission of form data.
## API
The RandomUser API was used for this task. No signup or auth token is required. You can find the documentation for the API here https://randomuser.me/documentation.

The Nasa APOD API is used for this task to return different astronomy related pictures to fill up the footer page. You will reuqire a key for the API. You can find the documentation for the API here https://github.com/nasa/apod-api.

## Assets
You can find the assets in the `/public` folder. Webpack has been already set up for you with [file-loader](https://webpack.js.org/loaders/file-loader/) for images and [SVGR](https://github.com/gregberge/svgr) for SVG's. If you need an example, the `Example` component shows how you would import and use images and SVG's.