# Interview Scheduler
## Project Description

The App utilizes  React built-in and custom hooks and allows users to add, edit and delete appointments in real time.

## Project Features
- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
- Days display currently remaining spots and capture updates after each modification
The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time.

## Screenshots

!["Create an appointment"](https://github.com/MichaelDHuy/scheduler/blob/master/docs/Create-Appointment.png?raw=true)

!["Create an appointment successfully"](https://github.com/MichaelDHuy/scheduler/blob/master/docs/Create-Appointment-Successfully.png?raw=true)

!["Delete an appointment"](https://github.com/MichaelDHuy/scheduler/blob/master/docs/Screen%20Shot%202022-11-11%20at%201.36.06%20AM.png?raw=true)

!["Delete an appointment successfully"](https://github.com/MichaelDHuy/scheduler/blob/master/docs/Delete-Appointment-Successfully.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies
"axios": "^0.20.0"
"classnames": "^2.2.6"
"cypress": "^9.7.0"
"normalize.css": "^8.0.1"
"react": "^16.9.0"
"react-dom": "^16.9.0"
"react-hooks": "^1.0.1"
"react-scripts": "3.4.4"

## API github repo
https://github.com/MichaelDHuy/scheduler-api