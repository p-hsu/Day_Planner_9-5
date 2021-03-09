# Day_Planner_9-5

## A work day scheduler

This project provides the user with a planner that is interactive for the hours 0900 - 1700. Please refer to the points below for project-build aspects and functionality.

### Project-build aspects

The following was used to build the code for this day planner:

1. HTML and CSS *see **Credit** section*
2. Bootstrap used to build main section for DOM manipulation as commented in `index.html`
3. Moment.js used in `script.js` to present and manipulate time within DOM and JavaScript
3. JQuery used for DOM manipulation in `script.js`

### Functionality

The following lists all functions within the project:

* current **date** and **time** displayed above timer
    * *not **live**/**dynamic** due to moment.js not set within setInterval function*
* each time-block is color-coded to reflect "past" = grey, "present" = red, "future" = green
* an area within each time-block to enter entries for activities or to-do's
* save button will store entries to localStorage
* entries will be saved when planner is refreshed
* entries can be cleared with the **"Clear all entries!"** button below date/time stamp
* alert windows to give users a response to user-interactive functions

### Process

Writing pseudo-code provides logical steps in breaking down a bigger problem into each
individual blocks. Please refer to the comments retained in the `script.js` file.

## Installation

1. Clone this repository onto local workspace
2. Open Terminal (MacOS) or Git Bash (Windows) and change location to where you want the cloned directory
3. Type `git clone` and paste copied respository
4. Directory should include the following:
    * assets folder
        * images folder *for `README.md` only*
        * javascript folder: `script.js`
        * css folder: `style.css`
    * `index.html` *modified with a `.clearBtn` in header and BootStrap structure in body*
    * `README.md`

## Screenshot

**Password Generator Application**

![Animated GIF of application:](./assets/images/day-planner.gif)


## Deployment

Please use the following link to deploy live URL of this project:

[Password Generator Application](https://p-hsu.github.io/Day_Planner_9-5/)

## Credit

* Original HTML, and CSS code are owned by © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand
* Animated GIF created using screencastify
* Learning Assistant tutor helped with issues pertaining to: local storage data `.setItem` and `.getItem`
