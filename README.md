# Movie App

A React-based movie application built with Vite, featuring movie search, details, watchlist management, and user authentication. This project was developed by following a tutorial to enhance my skills in modern React development.

## Features

- **Movie Search and Discovery**: Search for movies using the TMDB API and browse popular movies.
- **Movie Details**: View detailed information about movies, including cast, ratings, and similar movies.
- **Watchlist**: Add/remove movies to/from a personal watchlist, persisted in localStorage.
- **User Authentication**: Simple login and registration forms with validation.
- **Theming**: Toggle between light and dark modes.
- **Responsive Design**: Mobile-friendly UI using Bootstrap.

## Technologies Used

- **Frontend**: React, React Router, Vite
- **Styling**: Bootstrap
- **API**: TMDB API for movie data
- **State Management**: React Context API
- **Validation**: Custom hooks and utility functions
- **Build Tool**: Vite with ESLint

## React Skills Applied

This project allowed me to practice and apply key React concepts:

### Core React Concepts

- **Functional Components**: Built the application using modern functional components
- **JSX**: Writing clean JSX with proper component structure
- **Props & State**: Handling component props and local state management
- **Component Lifecycle**: Working with component mounting and updating

### React Hooks Experience

- **useState**: Managing local component state for forms and UI elements
- **useEffect**: Handling side effects like API calls and cleanup operations
- **useContext**: Using global state from Theme and User contexts
- **useParams & useSearchParams**: Working with React Router hooks for URL handling
- **Custom Hooks**: Created `useInput` hook for form validation logic

### React Patterns Practiced

- **Context API**: Implemented global state for themes and user data
- **Component Composition**: Building layouts through component composition
- **Conditional Rendering**: Dynamic UI based on application state
- **List Rendering**: Rendering movie lists with proper key management
- **Error Handling**: Basic error handling in API calls

### React Router Usage

- **Client-Side Routing**: Set up routing with `createBrowserRouter`
- **Dynamic Routes**: Implemented routes with parameters (`/movies/:id`)
- **Query Parameters**: Handled search functionality with URL queries
- **Navigation**: Basic programmatic navigation

### State Management Approach

- **Local State**: Component-level state with useState
- **Global State**: Context API for shared data
- **State Lifting**: Moving state to parent components when needed
- **Persistent State**: localStorage integration for data persistence

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ygenc11/movie-app.git
   cd movie-app
   ```

## Screenshots

Project screenshots (click to view full size). Images are stored in public/images.

<p align="center">
  <img src="/public/images/1.png" alt="Home" width="320" />
  <img src="/public/images/2.png" alt="Search" width="320" />
  <img src="/public/images/3.png" alt="Movie Details" width="320" />
</p>

<p align="center">
  <img src="/public/images/4.png" alt="Watchlist" width="320" />
  <img src="/public/images/5.png" alt="Extra" width="320" />
</p>
