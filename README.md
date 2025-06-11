# Flashcards
## Description
A simple front-end application to create and manage sets of flashcard quizzes for studying.

Users can create topics, create flashcard quizzes and assign them to topics to keep them organized. 

In each flashcard quiz, you'll be presented with the front of a card. Try to recall the information stored on the back. Once you're ready to check your memory, click the card to "flip" it around, and see how you did!

---

## Features
- Reactive flashcards that "flip" between the front prompt, and back content on-click. 

- Fully customizable topics and quiz creation lets you study anything you want, and keep your quizzes organized.

---

## How to use
### Users
Head to *insert link* to try the app on the web!

### Developers
Simply `git clone` this public GitHub repo to your machine and play around!

---

## Technologies
- This project was bootstrapped using [`create-react-app` created by Facebook](https://create-react-app.dev/docs/getting-started/). 
    - State management for card "flipping" handled using `useSelector` and `useState()`
    - Navigation between features powered by a `BroswerRouter` provided by `react-router-dom` allows for in-app navigation without browser refreshes
- Core technologies: 
    - `node` v20.11.1
    - `npm` 10.2.4
    - `git` 2.43.0 (for version control)
    - VSCode editor for developement

## License & Copyright
This project is not open-source, and has no open-source liscense, "meaning that [I, Eric Hess] retain all rights to [my] source code and no one may reproduce, distribute, or create derivative works from [my] work," according to [GitHub's Liscensing Guidelines.](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) 

This is intended to be a portfolio project for me, and possibly a reference for any other Codecademy students interested in seeing how I completed the project. 