# Todo App

This is a simple Todo application built with React, TypeScript, and Vite. It allows users to add, view, filter, and remove tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks
- View a list of tasks
- Filter tasks by status (all, completed, active)
- Remove tasks

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Application

To start the development server:

```sh
npm run dev

This will start the development server. Open your browser and navigate to http://localhost:5173 to see the application in action.
```

## Assumptions and Decisions

- The project assumes a basic understanding of React and TypeScript.
- It uses Vite for its fast build times and modern features.
- Jest is used for testing to ensure the components work as expected.
- CSS Modules are used for styling components to keep styles scoped to the component.

## Branching Strategy

The project uses a simple branching strategy:

- **main**: This is the production branch. All feature branches should be merged into this branch once they have been reviewed and approved.
- **feature/{feature-name}**: Use this naming convention for new features or enhancements. Create a new branch from `main` for each feature or enhancement. Once the feature is complete, open a pull request to merge it into `main`.
- **bugfix/{bugfix-name}**: Use this naming convention for bug fixes. Create a new branch from `main` for each bug fix. Once the bug fix is complete, open a pull request to merge it into `main`.