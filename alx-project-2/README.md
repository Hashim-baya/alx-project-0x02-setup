# Next.js Project Setup and Basics

Welcome to my `alx-project-0x02-setup` repository! This project serves as a comprehensive guide and a practical implementation of fundamental Next.js concepts. Throughout this repository, I'll walk you through setting up a Next.js application with TypeScript and Tailwind CSS, implementing routing, creating reusable components, and fetching data from external APIs.

---

## 0. Creating the GitHub Repository and Initial Setup

I began by creating a new GitHub repository named `alx-project-0x02-setup`. I initialized it with a `README.md` file, where I added the title "Next.js Project Setup and Basics" and this brief introduction to explain the repository's purpose.

---

## 1. Setting Up a Next.js Project

For this step, I scaffolded a new Next.js project using `npx create-next-app@latest`. I named the project `alx-project-0x02` and configured it to use **TypeScript**, **ESLint**, and **Tailwind CSS**.

I then set up the following essential folder structure:
- `/components/layout/Header.tsx`
- `/interfaces/index.ts`
- `/public/assets/images`

To verify the setup, I added a simple welcome message to `pages/index.tsx`. Finally, I ran the application using `npm run dev -- -p 3000` and confirmed that it was accessible and working correctly on `http://localhost:3000`.

---

## 2. Basic Routing in Next.js

I implemented basic routing using Next.js's Pages Router. I created two new pages: `pages/home.tsx` and `pages/about.tsx`, each with a basic `h1` element to identify them.

To enable navigation, I modified `components/layout/Header.tsx` to include navigation links to `/home` and `/about`. I then tested the routing by navigating between these pages to ensure everything was functioning as expected.

---

## 3. Creating a Reusable Card Component

To enhance reusability, I created a dynamic `Card` component. First, I defined a `CardProps` interface in `interfaces/index.ts`.

Next, I implemented the `Card` component in `components/common/Card.tsx`. This component is designed to accept `title` and `content` as props. I then used this `Card` component on the `pages/home.tsx` page, passing in different titles and content to demonstrate its reusability.

---

<h2>4. Implementing a Modal Component</h2>

I implemented a **modal component** to handle user input dynamically. I created the `PostModal` component in `components/common/PostModal.tsx`.

Inside this modal, I included a form to accept user input for both `title` and `content`. The key functionality here is passing the data entered in the modal back to the parent component, allowing me to display the newly added content on the `/home` page. I also added a button on the `/home` page to trigger the modal's opening.

---

<h2>5. Creating and Using a Button Component</h2>

I created a reusable `Button` component to ensure consistency and flexibility across the application. I started by defining a `ButtonProps` interface in `interfaces/index.ts` to type the component's props.

The `Button` component itself is located in `components/common/Button.tsx`. It accepts `size` (which can be 'small', 'medium', or 'large') and `shape` (such as 'rounded-sm', 'rounded-md', or 'rounded-full') as props. I then used this `Button` component on the `/about` page, displaying three different buttons to showcase its various sizes and shapes.

---

<h2>6. Implementing Navigation and Layout</h2>

I focused on establishing a consistent navigation and layout throughout the application. I created the `Header.tsx` component within `components/layout/Header.tsx`.

Within this `Header` component, I added navigation links to `/home`, `/about`, and `/posts` pages. To ensure a unified navigation experience, I imported and used the `Header` component in `pages/home.tsx`, `pages/about.tsx`, and `pages/posts.tsx`. I verified that navigation worked seamlessly across all these pages.

---

<h2>7. Implementing a PostCard Component</h2>

To display a list of posts effectively, I implemented a `PostCard` component. I started by defining a `PostProps` interface in `interfaces/index.ts` to type the properties for a post.

Then, I created the `PostCard.tsx` component in `components/common/PostCard.tsx`. This component is designed to accept `title`, `content`, and `userId` as props. To demonstrate its functionality, I fetched data from an external API (specifically, JSONPlaceholder) and then used the `PostCard` component to display a list of these fetched posts on the `pages/posts.tsx` page.

---

<h2>8. Building a UserCard Component</h2>

Finally, I built a `UserCard` component to display user details. I began by defining a `UserProps` interface in `interfaces/index.ts` to outline the structure of user data.

I then created the `UserCard.tsx` component in `components/common/UserCard.tsx`. This component is responsible for displaying user details such as their name, email, and address. To populate this component, I fetched user data from a public API and displayed it on the `/users` page using the `UserCard` component for each user.
