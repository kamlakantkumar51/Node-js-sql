# Node-js-sql

# User Management App with Node.js and MySQL 🚀

This project is a simple yet effective web application built with Node.js, Express, and MySQL. It provides a basic interface for managing user data stored in a MySQL database. You can view, edit, create, and delete user records. It leverages EJS for dynamic HTML rendering and `mysql2` for efficient database interactions.

## 🚀 Key Features

- **User Listing:** Display a list of all users stored in the database.
- **User Creation:** Add new users to the database through a form.
- **User Editing:** Modify existing user data via an edit form.
- **User Deletion:** Remove users from the database.
- **Database Interaction:** Seamlessly interacts with a MySQL database for data persistence.
- **Templating:** Uses EJS to dynamically render HTML pages.
- **HTTP Method Overriding:** Employs `method-override` to support PATCH and DELETE requests from HTML forms.

## 🛠️ Tech Stack

- **Backend:**
    - Node.js
    - Express.js: Web framework for routing and middleware.
- **Database:**
    - MySQL: Relational database for storing user data.
    - MySQL2: MySQL client for Node.js.
- **Frontend:**
    - EJS: Templating engine for dynamic HTML generation.
- **Utilities:**
    - `@faker-js/faker`: For generating fake user data (currently commented out).
    - `path`: For resolving file paths.
    - `method-override`: For allowing HTTP verbs like PATCH and DELETE.
    - `uuid`: For generating unique IDs.
- **Development Tools:**
    - Nodemon: For automatic server restarts during development.
- **Other:**
    - `package.json`: Manages dependencies and project metadata.
    - `schema.sql`: Defines the database schema.

## 📦 Getting Started

Follow these steps to get the application up and running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager) or yarn
- MySQL Server

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Set up the database:**

    - Create a MySQL database named `delta_app`.
    - Execute the SQL script in `schema.sql` to create the `user` table:

    ```bash
    mysql -u <username> -p <password> < delta_app/schema.sql
    ```

    Replace `<username>` and `<password>` with your MySQL credentials.

4.  **Configure database connection:**

    - Update the database connection details in `index.js` with your MySQL credentials.

    ```javascript
    const db = mysql.createConnection({
        host: 'localhost',
        user: '<your_username>',
        password: '<your_password>',
        database: 'delta_app'
    });
    ```

    Replace `<your_username>` and `<your_password>` with your actual MySQL credentials.

### Running Locally

1.  **Start the server:**

    ```bash
    npm run start # or nodemon index.js if you have nodemon installed globally
    ```

2.  **Open your browser and navigate to `http://localhost:3000`** (or the port specified in your `index.js` file).

## 💻 Usage

-   **View Users:** Navigate to `/user` to see a list of all users.
-   **Create User:** Use the form on `/user` (POST request) to add a new user.
-   **Edit User:** Click on a user's ID to navigate to `/user/:id/edit` and edit their details.
-   **Update User:** Submit the edit form (PATCH request to `/user/:id`) to update user information.
-   **Delete User:** Click the delete button (DELETE request to `/user/:id`) to remove a user.

## 📂 Project Structure

```
nodejs + sql/
├── index.js          # Main application file
├── package.json      # Project metadata and dependencies
├── schema.sql        # MySQL database schema
└── views/            # EJS templates
    ├── edit.ejs      # Edit user form
    ├── index.ejs     # Home page (user count)
    └── users.ejs     # User listing page
```

## 📸 Screenshots

(Screenshots will be added here)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

[Your Name] - [Your Email]

## 💖 Thanks

Thank you for checking out this project! We hope it's helpful.

This README was written by [readme.ai](https://readme-generator-phi.vercel.app/).
