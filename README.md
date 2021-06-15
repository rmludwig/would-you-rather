# My "Would You Rather" project

This was project 2 for the React Nano Degree coursework. Read the details below.

----------------------------------------------------------------
## Installing the Would You Rather application

1. Clone the repo from https://github.com/rmludwig/would-you-rather.git. For example:
``` git clone https://github.com/rmludwig/would-you-rather.git wyr ```
2. Change to the directory where it was cloned. For example:
```cd wyr```
3. Install all needed dependencies with npm. For example:
```npm install```
4. Start the application and enjoy! For example:
```npm start```


----------------------------------------------------------------
## Design Decisions and Citations

1. I used React Bootstrap for my visual elements. I used the component style behaviors
of React bootstrap. For practice and your viewing pleasure I worked to make the page
responsive to various screen sizes.

2. I used avatar images from https://www.flaticon.com/packs/avatars-90 as suggested in
the Udacity Help and Knowledge articles.

3. In the rubric is says "Once the user logs in, the home page is shown", and that is true
on initial login to home page. However if the user goes to a direct URL like /leaderboard,
then after they login the leaderboard will be displayed (rather than routing them to home
when they were trying to get to leaderboard).

4. I followed Tyler McGinnis's examples from the coursework and the chirper app examples to
aid in development of the application. For example I replicated the logger middleware to
assist in app testing.

5. I referenced other Udacity React Nano Degree coursework as well as other React
documentation online to aid in the development of this application.


----------------------------------------------------------------
## Project Instructions
1) Use React to build your application’s UI. Remember that composition is key. It’s
rarely a mistake to break a component into smaller pieces. Look for opportunities to
reuse your components.

2) We recommend using Create React App to generate your submission since it's the
easiest way to ensure you have everything the project reviewer will need to install
and run your app.

3) By walking through the Planning Stage and the Coding Stage of the Chirper Project,
we’ve given you a useful template for building Redux applications. We recommend using
this template for building your “Would You Rather?” Project. Remember that planning your
project and its architecture before starting to code will save you a lot of debugging
time later on!

4) Use Redux to manage your application state. For this application, most of the
application’s state should be managed by Redux. You may use component state to handle
form input fields and controlled components. Otherwise, the rest of the state for your
application should be controlled by your reducers.

5) While the focus (and specification) of this project is based on functionality rather
than styling, please ensure that your app is presentable and easy to navigate.

6) Please carefully test your app against the rubric to make sure all of the rubric
requirements are met. Your project must meet all of the rubric criteria in order to pass.


#### Rubric
https://review.udacity.com/#!/rubrics/1567/view


----------------------------------------------------------------
## Planning

### A Guide for the Planning Stages of Your Project
1. Identify What Each View Should Look Like
2. Break Each View Into a Hierarchy of Components
3. Determine What Events Happen in the App
4. Determine What Data Lives in the Store


----------------------------------------------------------------
## Initial Project planning for Views and other details

### User selection
- impersonate whatever user

#### MUST DO
- on direct links, show user selection first


### Home page
- toggle between answered and unanswered
- / (root) once logged in

#### MUST DO
- answered / unanswered order by create date
- display logged in user
- show unanswered by default


### Question view ( & 2 views for answered and unanswered)
- link = questions/:question_id
- must have
    - Text “Would You Rather”;
    - Avatar of the user who posted the polling question; and
    - Two options.
- if answered (by this user)
    - Text of the option;
    - Number of people who voted for that option; and
    - Percentage of people who voted for that option.
    - The option selected by the logged-in user should be clearly marked.
- if unanswered (by this guy)
    - voting buttons

#### MUST DO
- show a 404 page if the user is trying to access a poll that does not exist.
  (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.)
- HEADER: display a navigation bar so that the user can easily navigate anywhere in the application.
- after vote is cast, reload view as answered (and all details)
- question should move to the answered column after vote


### Add question
- /add
- show the text “Would You Rather”
- submit form

#### MUST DO
- Upon submitting the form, a new poll should be created
- the user should be taken to the home page
- the new polling question should appear in the correct category on the home page (for that user)


### Leader board
- /leaderboard
- User’s name;
- User’s picture;
- Number of questions the user asked; and
- Number of questions the user answered

#### MUST DO
- Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered.
- The more questions you ask and answer, the higher up you move.
- HEADER: The user should be able to navigate to the leaderboard
- HEADER: to a specific question
- HEADER: and to the form that allows the user to create a new poll
- ROUTING: both from within the app and by typing in the address into the address bar.
- AUTH FIRST: To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.

