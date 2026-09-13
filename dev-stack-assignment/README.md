# 🚀 Dev Stack

<p align="center">
  A modern technology discovery platform for developers.
</p>

<p align="center">
  Explore Technologies • Build Your Stack • Grow Your Skills
</p>

---

## 🌐 About The Project

**Dev Stack** is a modern and responsive web application where developers can explore popular technologies and create their own personalized tech stack.

Each technology includes useful information such as its category, difficulty level, rating, description, and icon.

---

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🔔 React-Toastify
- 📄 JSON
- 🌐 Netlify

---

## ✨ Features

### 🔎 Explore Technologies
Browse popular technologies with their category, difficulty level, rating, description, and icon.

### 📚 Build Your Own Stack
Add technologies to your personal stack and easily manage your selected technologies.

### 🔔 Toast Notifications
Get notifications when adding, removing, or trying to add a technology that is already in your stack.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to read and write.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data stored inside a component that can change over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a component to store and update data.

I used it in the `Technologies` component to store the technologies selected by the user.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects in a React component, such as fetching data.

I did not use `useEffect` in this project. I used React's `use()` hook with a Promise to load the JSON data.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.

It allows React to efficiently update, add, or remove the correct item.

In this project, I used the technology `id` as the key.

---

## 6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition.

I used it for the user's stack.

When the stack is empty, the page shows:

**Your stack is empty.**

When technologies are selected, it shows the selected technologies instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

The child can send something back by calling a function that the parent passes through props.

For example, the parent can pass a technology and an `onAdd` function to the child.

---