# Trivi

Trivi helps you become better at trivia by generating a series 10 random questions.

Live App: [Trivi](https://trivi.vercel.app/)

## Tech Stack

- React
- CSS3
- HTML5
- Deployed with Vercel

## Codebase Structure

### /src/App.js

Renders the <main> and controls which screen is shown through conditional rendering.

### /src/Apprentice_TandemFor400_Data.json

20 trivia questions with question, correct, and incorrect answers. Data provided by Tandem.

### /src/components

#### /Start.js

Rendered if quiz has not yet been started. Has button to start quiz.

#### /Quiz.js

Wraps and controls flow of quiz questions. JSON data is imported and manipulated here and sent into the components in /questions as props. Stops quiz after 10th question.

#### /question

Contains three components, Question.js, and its two child components, Answers.js, which renders the individual answers, and Result.js, which shows if the selected answer was correct.

#### /Results.js

Rendered after 10th question. This page shows the score and has a button to return to Start.js

### /styles

#### /global.css

Contains global variables

#### /main.css

Contains styles for quiz body

#### /header.css

Styles the header

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Prompt

### from [Tandem](https://madeintandem.com/)

While weʼre all knowledgeable in our own right, only one person can be crowned trivia champion with
the highest score. Your goal is to create an application that others will be able to use in order to help
improve their trivia skills.

Train to improve your trivia knowledge by creating your own trivia training app!

### Assumptions

A round of trivia has 10 Questions

All questions are multiple-choice questions

Your score does not need to update in real time

Results can update on form submit, button click, or any interaction you choose

We will provide you with the trivia data such as the questions, correct and incorrect answers via a
Assumptions
JSON file.

### Criteria

A user can view questions.
Questions with their multiple choice options must be displayed one at a time.

Questions should not repeat in a round.
A user can select only 1 answer out of the 4 possible answers.

The correct answer must be revealed after a user has submitted their answer
A user can see the score they received at the end of the round
