# React Tic Tac Toe Xo

This project is example implementation for a recruitment process where I was given a certain design and implemented as much as I could giving a time constraint.

Below you will find explanation on some of the choices made as well as a list of incoming enhancements.

## Starter project

For this objective, I decided to use create-react-app as the base for the project development. Personally, I don't like having a non-ejected choice because I like more control over webpack and how certain things are implemented and installed such as bundling options and additional css plugins to make engineers life easier.

The other reason to have more control over webpack is the ability to have also more control over server-side rendering and hydration.

## Development phase and breakdown

For this project, I decided to start following a model that I've worked with in the past that I find very valuable: designing and implementing small components in isolation. For this purpose, we have some components created in storybook (see instructions below on how to see it) to facilitate the customization and design flexibility with great tools provided by storybook such as handlers, color customization, etc.

## Small considerations

This project leverages yarn, thus yarn.lock was submitted to the repo. That means the following script commands will be executed with `yarn`. Personal preference.

## Storybook

To see components created in storybook, run the following commands:

`yarn build-storybook`

and 

`yarn storybook`

Go to your browser and visit:

`localhost:6006`

Lastly, use the left panel to navigate through the components created.


## Project: Folder structure

The folder structure is divided into:

`components`
 - Where we keep small components (hopefully simple enough) designed to do one thing and one thing only

`pages`
- Beefier pages designed to bring pages designed to life by aggregating components

`stories`
- Where we keep storybook stories

`styles`
- Where we keep styles, globals, themes, etc.

`tests`
- Tests


## Project: Running it


To run the project, please execute the command below:

`yarn start`


## Compromises 

 Mostly because of time, I'd like to have created a more elegante structure for the pages. We have everything in the Root.jsx file that is meant to host primarily the main page and an introductory home page. Instead, we have possibly two(2) pages in it that are doing a little more. I also didn't have the time to reach the actual board game part which was my primary goal. That said, the board was created and is available in storybook for visualization. 

## Future improvements
- [ ] Separate pages, create proper routes for home and games
- [ ] Create game components and logic
- [ ] Create page for records. Leverage browser storage to keep user history information (temporary to a certain point).
- [ ] Introduce network / online gameplay leveraging web sockets
- [ ] Create tests. Functional and integration tests for communication logic server -> client
- [ ] Introduce QOL changes to improve user experience by implementing better network error handling and connection issues
- [ ] Introducing Rated games. Create service to manage ratings and ladder.
