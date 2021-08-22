# Skillsoft Programming Challenge

Tech to use Node.js/React

## Code challenge:
- Build a simple node service that consumes the Star Wars API found here: https://swapi.dev/
- It should consume the ‘people’ list API and convert the REST endpoint to a GraphQL operation.
- Use that GraphQL operation to build a simple page that lists the people in the order that the API returns them.
- Only display the name, origin, height, mass, and birth date.
- Make the card responsive to where a phone sized screen shows 1 card across and a desktop shows up to 3 cards across.
- Allow me to ‘load more’ for the next page of the API.
- Upload this to a GitHub repo, provide instruction for staring the server in a readme as well as things you want to mention about the task.

## Starting the App
1. Clone the app locally.
2. `npm install` for server dependencies. Developed with Node `v14.17.3`.
3. Build the React client:
   1. `cd client`
   2. `npm install` the client dependencies.
   3. `npm build` for a production build of the React client.
   4. `cd ..` to get back to the root of the project
4. Start the server:
   1. `npm start` to run the server, which also serves the client app.
   2. Alternatively, for a non-production, developer setup that hot reloads client and server as files are modified: `npm run startDev`.
5. Open browser to http://localhost:4000 to view the app.

## TODO List
- [x] Create TODO list
- [x] Create git repo locally.
- [x] Create Star Wars data model
  - [x] Create Jest tests for data model
  - [x] Node service fetch Star Wars people endpoint.
- [x] Create node service
  - [x] Implement graphql operation for sw people.
    - [x] Define the schema
    - [x] Implement the resolvers
    - [ ] Document GraphQL schema
    - [ ] Add GraphQL testing library? (Apollo)
- [x] Create React front-end (mobile first)
  - [x] Update Node.js to serve react front-end
  - [x] Fetch SW data in front-end
  - [x] Display: name, origin, height, mass, and birth date.
    - [x] Make one card wide.
  - [ ] Handle client-side routes to the various paginated SW data
  - [ ] Add testing with React Testing Library?
  - [ ] Remove old express endpoints
- [x] Page data
  - [ ] Add load more link to React front-end
- [ ] Style the app
  - [ ] Make responsive for desktop (3 cards wide)
  - [ ] Use Star Wars fonts?
- [x] Push to GitHub
  - [x] Provide instructions for starting
  - [ ] Add any commentary you'd like about the task
  - [ ] Send link to repo to Skillsoft

## Open Questions

## Comments
- I would always use https professionally, but didn't for this small example.
- Most larger full stack examples would use a database but this small example didn't explicitly state one was required.
  - If the dataset was larger, I'd consider memoizing the fetch of Star Wars data.
