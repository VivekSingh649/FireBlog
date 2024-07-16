# FireBlog

FireBlog is a full-featured blogging platform built with React, Firebase, and Vite. This project includes authentication, protected routes, dynamic content rendering, and more. It provides a comprehensive example of how to build a modern web application with a focus on performance and user experience.

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
- **User Authentication**: Sign up, login, and logout functionality using Firebase Auth.
- **Protected Routes**: Admin routes are protected and only accessible to authenticated users.
- **Lazy Loading**: Components are lazy-loaded to improve performance.
- **SEO Optimization**: Each page has dynamic meta tags for better SEO.

### Admin Panel
- **Dashboard**: Overview of blog posts and categories.
- **Add Post**: Create new blog posts with a rich text editor.
- **Update Post**: Edit existing blog posts.
- **Categories**: Manage blog categories.

### Blog
- **Home Page**: Displays the latest blog posts.
- **Category Page**: Shows posts filtered by category.
- **Single Post Page**: Detailed view of a single blog post with comments.
- **Search Functionality**: Search posts by title.
- **Responsive Design**: Fully responsive design for mobile, tablet, and desktop.

### Additional Features
- **Loading Bar**: Top loading bar to indicate page loading.
- **Toasts**: Notifications for actions and errors.
- **Scroll To Top**: Automatically scrolls to the top of the page on navigation.

## Installation

### Prerequisites
- Node.js and npm installed
- Firebase project setup

### Clone the Repository
```sh
git clone https://github.com/yourusername/fireblog.git
cd fireblog
