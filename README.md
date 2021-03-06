# TMDB Films Database

Create a web application for browsing the popular movies, display a short detail page of a selected movie and play a short movie trailer.
Please, also make sure to log the hours spent on creating the project and report them back to us together with your results.
For this purpose you have to use The Movie Data Base API.

# DEMO TEST

It is possible to see a running demo test in the next link:
https://joseluis-tmdb-24i.web.app/

# DEMO

![](demo.gif)

# Features

- [x] It is possible to navigate between films/series pressing shift+mousewhell or using trackpad.
- [x] Allow search pressing Enter key and clickSearch.
- [x] Dont allow special characters in input search.
- [x] Folder scafolding.
- [x] Splitted into components and pages.
- [x] Axios used as HTTP client to manage promises.
- [x] Checked responsivity in many devices.
- [x] Manage errors during promises and detail page.
- [x] Commented the code, and documentation with readme.
- [x] Video interface has been changed to display only important buttons.
- [x] The webApp has been deployed in the previous url to make it easier to see the results.
- [x] Have been tested in different resolutions, also using Chrome, and Safari (both mobile and desktop).

# Things to check

- [x] The hls video is played with no problems in safari/mozilla web-browsers
- [-] In Chrome there is a problem with CORSS

# Steps to do

- [x] Get the TMDB Api Key (10 mins)
- [x] Create React App and configure initial react-state (15 mins)
- [x] Get All movies & build the rows (30-45 mins)
- [x] Build the banner of the app (15 mins)
- [x] Build the detail page (45 mins)
- [x] Investigate how Shaka Video Player works, and tests (around 3 hours)
- [x] Set the trailer video player (30 - 45 mins)
- [x] Optional Tasks:
  - [x] Make the app responsive
  - [x] Implement Search Funcionality
  - [x] Create at least one unit test

# General information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
