# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Screenshot](./design/desktop-design-dark.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/dashboard-social-media---react---ts-9Vb5xtUu--)
- Live Site URL: [Add live site URL here](https://dashboard-socialmedia.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- React Hooks
- TypeScript
- Reducer for state management

### What I learned

Working on this project helped me understand better how to implement a dark/light theme switcher using React and Tailwind CSS. Additionally, I improved my skills in building responsive layouts with CSS Grid and Flexbox. I also utilized React Hooks, TypeScript, and a Reducer for state management to make the application more scalable.

Some code snippets I'm proud of:

```typescript
import { useEffect, useReducer } from "react";
import { themeReducer, ThemeState } from "../reducers/themeReducer";

export const useTheme = () => {
  const [theme, dispatch] = useReducer(themeReducer, getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return { theme, toggleTheme };
};

const getInitialTheme = (): ThemeState => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  }
  return "light";
};
```

```css
.bicolor-bg::before,
.bicolor-bg::after {
  content: "";
  position: absolute;
  width: 100%;
  z-index: -1;
}

.bicolor-bg::before {
  top: 0;
  height: 32%; /* Adjust the top color to cover 32% */
  background-color: hsl(225, 100%, 98%);
}

.bicolor-bg::after {
  bottom: 0;
  height: 50%; /* Cover the bottom 50% */
  background-color: hsl(0, 0%, 100%);
}

/* Dark mode adjustments */
.dark .bicolor-bg::before {
  background-color: hsl(232, 19%, 15%);
}

.dark .bicolor-bg::after {
  background-color: hsl(230, 17%, 14%);
}
```

### Continued development

In future projects, I would like to explore:

- More complex state management solutions like Redux or Context API for better scalability.
- Enhancing accessibility features to ensure the application is usable by everyone.
- Implementing more advanced animations and transitions for a smoother user experience.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - This provided excellent guidance on how to utilize Tailwind's utility-first classes.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Helped me understand the best practices for building a React application.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Useful for understanding and implementing TypeScript in React projects.

## Author

- Name: Diego Meza
- Frontend Mentor - [@TanKleSs](https://www.frontendmentor.io/profile/TanKleSs10)
