This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Overview:
React application for movie information including movie details, ratings and reviews.

This is leveraging themoviedb.org api for informationa nd image assets


Tools
React
Redux
Node-sass and CSS Grid
Github
Docker
AWS S3
AWS Cloudfront
Slack
Sentry
App Usage Locally
Clone the repo

Run npm install

Create an account on https://www.themoviedb.org/ and obtain an API key.

Create a .env file in the root of the project and add

REACT_APP_API_SECRET=your api key

## Terraform Notes:
- make sure that you have your aws keys configured within your local environment before running

Terraform is leveraging aws s3 as well as aws cloudfront distribution

- we're not utilizing route 53 or a custom domain name for this project since it is just a demo - if migrating to prodcution and leveraging route 53 or a domain name you'll have to update the "target_origin_id"

- there are no geo restrictions configrued within this project as its a demo but that can be changed within the cloudfront.tf "restrictions" variables

- tags are a local variable defined in the main.tf file and they are populated across s3 and terraform by leveraging the local.common_tags - if you want resource specific tags you will need to change that

1. run terraform init
2. run terraform fmt (after initial configureation to make sure all files are formated correctly)
3. run terraform validate (after configuration) to pre-check all code is valid
4. run terraform plan
5. run terraform apply

---- can also run "terraform destroy" in order to get rid of resources


## Circli CI Notes
- make sure that all attributes from local ENV file are coppied into circle ci environment variables


Terraform destroy job added to circle CI pipeline but it is on hold 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
