# FireBlog

FireBlog is a full-featured blogging platform built with React, Firebase, and Vite. This project includes authentication, protected routes, dynamic content rendering, and more. It provides a comprehensive example of how to build a modern web application with a focus on performance and user experience.

![image](./public/features/FireBlog.png)

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [Screenshots](#screenshots)
7. [Contributing](#contributing)
8. [License](#license)

## Features

### General

![image](./public/features/FireBlog%202.png)

- **User Authentication**: Sign up, login, and logout functionality using Firebase Auth.
- **Protected Routes**: Admin routes are protected and only accessible to authenticated users.
- **Lazy Loading**: Components are lazy-loaded to improve performance.
- **SEO Optimization**: Each page has dynamic meta tags for better SEO.
- **File Upload Limit**: Limits file uploads to 600KB to ensure performance.
- **Custom Hooks**: Utilizes custom hooks for data fetching and state management.
- **App Context**: Centralized app context for managing global state.

### Admin Panel

![image](./public/features/FireBlog%203.png)

- **Dashboard**: Overview of blog posts and categories.
- **Add Post**: Create new blog posts with a rich text editor.
- **Update Post**: Edit existing blog posts.
- **Categories**: Manage blog categories.

### Blog

![image](./public/features/FireBlog%204.png)

- **Home Page**: Displays the latest blog posts.
- **Category Page**: Shows posts filtered by category.
- **Single Post Page**: Detailed view of a single blog post with comments.
- **Search Functionality**: Search posts by title.
- **Responsive Design**: Fully responsive design for mobile, tablet, and desktop.

### Additional Features

![image](./public/features/FireBlog%205.png)

- **Loading Bar**: Top loading bar to indicate page loading.
- **Toasts**: Notifications for actions and errors.
- **Scroll To Top**: Automatically scrolls to the top of the page on navigation.

### Advanced Features

![image](./public/features/FireBlog%206.png)

- **Protected Route**: Ensures certain routes are only accessible to authenticated users.
- **Firebase CRUD Operations**: Complete Create, Read, Update, Delete operations using Firebase Firestore.
- **Custom Hooks**: Custom hooks like `useAllPosts` for managing blog posts.
- **App Context**: Using React Context API for global state management.
- **Error Handling**: Comprehensive error handling and user feedback through toasts.

### Additional Information

- **File Upload Limit:** This feature ensures users cannot upload files larger than 600KB, enhancing performance and preventing excessive data usage.
- **Custom Hooks:** Custom hooks like `useAllPosts` are used for efficient data management and code reusability.
- **App Context:** The app uses React Context API to manage global state, such as user authentication status and theme settings.
- **Protected Route:** The `ProtectedRoute` component ensures that only authenticated users can access certain routes, enhancing security.
- **Firebase CRUD Operations:** The app performs Create, Read, Update, and Delete operations using Firebase Firestore, providing a robust backend solution.

By adding these additional features and points, the README file is more comprehensive and showcases the depth and functionality of your project.

## Installation

### Prerequisites

- Node.js and npm installed
- Firebase project setup

### Clone the Repository

```sh
git clone https://github.com/yourusername/fireblog.git
cd fireblog
```

# Install Dependencies

```sh
npm install
```

# Environment Variables

Create a .env file in the root of your project and add your Firebase configuration:

```sh
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```
