# GitHub User Search

An exercise in putting my own twist on the GitHub user search APIs.

Demo can be found here: [https://jsec-github-user-search.netlify.app/](https://jsec-github-user-search.netlify.app/)

## Running Locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

--NOTE-- You will need to provide a GitHub OAuth token for interacting with the API, and provide it as an environment variable. Details can be found [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Things I Wish I Had More Time To Work On

- A more comprehensive unit test suite
- Updating the loading spinner overlay so it only spans over the result list rather than the entire search results div
- Sorting by follower count/repo count/stars, etc. This would have required the switch over to the V4 GraphQL API, which there wasn't time for
- Light mode/dark mode
