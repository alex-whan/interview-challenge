# Helpful Human Applicant Interview Challenge

## Instructions for App Startup

- Run `npm i` to install all required dependencies for back end functionality.
- The front end can be run independently of the back end. If no server is running locally, the front end will pull offline color data from the local dataset.
- Create a `.env` file in the root directory for the back end - titled `back-end` - by running `touch .env`.
- Use the provided `.env.example` file to fill out the `.env` as shown.
- In the `back-end` directory, start the server by running `node index.js` as the entry point to the back end. This command will also trigger the `script` in `index.js` that will populate the connected database via MongoDB with the offline color data.
  - **Note:** Do this step before firing up the front end in order to have the application pull from the database rather than the offline backup dataset.
- At this point, you may either interact with the front end via the deployed webpage [here](https://alex-whan-interview-challenge.netlify.app/) or by navigating to the root directory of the application and using the `npm start` command to run the front end locally.

## Challenge

Welcome to Helpful Human's at home proficiency challenge! This challenge gauges your knowledge on a few different metrics that we use, in part, to evaluate your skills. In this repo, you will find the assets that are required to replicate the design that is also included in this repo. Both .sketch and .png assets are available.

To get started, clone this repo. Add your work to it in whatever structure you prefer, then push it to your own, renamed repo. When you are finished, follow the instructions at the end of this document.

This challenge has different milestones.

## Core

Stated briefly, the core goal is to create a simple but functional app that has a data, view and logic layer. The app will display color swatches, and that's about it!

The core goals should be completed in full.

## Stretch

The stretch goals can also be met if you choose to do so. Not completing the stretch goals does not disqualify you in any way nor will it lead to a disadvantage in comparison to other applicants.

## Bonus Stretch

Bonus stretch goals inherit properties of stretch goals but completing these goals will say to us, "I believe the code I've written for the core goals and the stretch goals is production ready".

## Additional Information

An applicant completing a well thought out solution to the core challenges is just as meaningful to us as a solution that completes all goals but is not implemented very well.

If you'd like to implement additional functionality, or change the functionality of this challenge, feel free but be prepared to discuss your reasoning for doing so. We like critical thinking. We don't like improper implementation without reason.

## Time

Keep track of how much time you spent on the challenge but also feel free to spend as much time as you want. Your time is very valuable and we are thankful you're taking the time demonstrate your skills for us.

## Core Goals

- Replicate design
  - [Font](./FONT.md)
  - Styles
  - Iconography
- Replicate functionality
  - Create a database of colors (minimum 100)
  - Paginate your data to show a certain number of swatches at a time
  - Display both the color swatch and the label of the color
  - Ability to select random color and modify view accordingly
  - Clicking swatch changes to color detail view

## Stretch Goals

- Design
  - Make it responsive
- Functionality
  - Generate color list from a script

## Bonus Stretch Goals

- Design

  - Include interaction design
  - Add tints/shades in detail view

- Functionality

  - Add search functionality
  - Color generation script guarantees same colors and order
  - Group by color (Make sidebar menu functional)

- Data
  - Fetch data with GraphQL

## Deliverables

In your email submission response to the test invitation from AngelList, please include the following:

- Link to your repo
- URL to your hosted App (Use a free hosting service of your choice)
- [Include a Donger](http://dongerlist.com/) that best represents your state of mind when complete

Thanks and we look forward to your submission!

ლ ( ◕ ᗜ ◕ ) ლ
