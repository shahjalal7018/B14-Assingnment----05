# DevStack - Tech Stack Explorer

A sleek and interactive web application built for developers to explore, discover, and organize essential modern technologies, libraries, and frameworks.

---

##  Technologies Used

- **Frontend:** React.js, TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Build Tool:** Vite
- **Notifications:** React-Toastify
- **Data Source:** JSON

---

##  Key Features

1. **Interactive Tech Directory:** Browse through a rich list of technologies with categories, difficulty levels, and ratings.
2. **Dynamic Filtering:** Filter technologies based on skills and categories seamlessly without reloading the page.
3. **Custom Stack Builder:** Add technologies to your personal stack with real-time Toast notifications to prevent duplicates.

---

##  React Concepts & QA

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes writing and understanding component structure much easier and more visual compared to using raw JavaScript DOM methods.

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed from a parent component down to a child component.
- **State:** Internal data managed within a component that can change over time and triggers a re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** useState is a React hook used to store and manage dynamic data (state) in a component. When the state updates, React automatically re-renders the component to reflect changes on the UI.
1.To store the list of available technologies loaded from the JSON file (e.g., const [technologies, setTechnologies] = useState([])).
2.​To track and update the user's selected items in the stack list (e.g., const [myStack, setMyStack] = useState([])).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects in React components, such as data fetching or subscriptions. I used it to fetch the `technologies.json` file from the `public` folder once when the component initially mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or removed. This helps React optimize rendering performance by updating only the specific elements that changed rather than re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering different UI elements or components based on specific conditions (like `if` statements or ternary operators). 
*Example from project:* Displaying an "Empty Stack" message when the user hasn't added any technology cards yet:
```tsx

{selectedTechs.length === 0 ? (
  <p className="text-gray-400">No technology added yet.</p>
) : }

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
​Answer:
​Parent to Child: Data is passed down via Props.
​Child to Parent: The parent passes a callback function as a prop to the child, and the child calls that function with data as arguments.