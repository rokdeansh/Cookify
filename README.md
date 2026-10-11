# 🍽️ ServeSmart – Smart Recipe Finder

ServeSmart is a full-stack web application designed to help users discover recipes, explore ingredients, view cooking instructions, and manage their favorite meals. The application integrates with TheMealDB API to retrieve recipe information and provides an interactive interface for searching and exploring different dishes.

Built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, ServeSmart demonstrates the integration of frontend technologies, backend APIs, database operations, and user authentication in a single web application.

## ✨ Features

- 🔍 **Recipe Search:** Search for recipes and discover different meals.
- 🍲 **Recipe Exploration:** Browse recipe information, ingredients, and cooking instructions.
- 👤 **User Registration:** Create an account using an email address and password.
- 🔐 **User Login:** Authenticate using registered account credentials.
- ❤️ **Favorites Management:** Save and manage favorite recipes.
- 🥗 **Serving Adjustments:** Adjust ingredient quantities according to the number of servings.
- 🌐 **External API Integration:** Fetch recipe information from TheMealDB API.
- 💾 **Database Integration:** Store user information and favorite recipes using MongoDB.
- 📱 **User-Friendly Interface:** Navigate through recipes, authentication pages, and favorites.

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Async/Await

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB
- Mongoose

### External API
- TheMealDB API

### Development Tools
- Visual Studio Code
- npm
- Git
- GitHub

## 📁 Project Structure

```text
ServeSmart/
│
├── backend/
│   ├── models/
│   │   ├── Favorite.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── favorites.js
│   │   └── recipes.js
│   │
│   ├── db.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── auth.js
│   ├── favorites.html
│   ├── favorites.js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to download and run ServeSmart on your local machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A MongoDB database, either local or hosted on MongoDB Atlas
- A modern web browser

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd ServeSmart
```

### 2. Install Backend Dependencies

Navigate to the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory and add the environment variables required by your application.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your actual configuration. Make sure the variable names match those used in your backend code.

**Important:** Never upload your `.env` file, database credentials, or secret keys to GitHub.

### 4. Start the Backend Server

From the `backend` directory, run:

```bash
node server.js
```

If your `package.json` defines a development script, you can use the corresponding `npm run` command instead.

The server should start using the port configured in your application.

### 5. Run the Frontend

Open the `frontend/index.html` file in your browser, or use the VS Code Live Server extension if your application requires a local development server.

Ensure that the backend server is running and that the frontend API URLs point to the correct backend address.

## 🔐 Authentication

ServeSmart provides a basic account registration and login system.

1. Users register using an email address and password.
2. The backend processes the registration request and creates a user account in the database.
3. Registered users can log in using their credentials.
4. Authentication-related requests are handled through the backend authentication routes.

Email OTP verification is not included in the current registration flow.

## 🗄️ Database Organization

ServeSmart uses MongoDB to store application data, with Mongoose models for organizing database operations.

- **User.js:** Defines the user data model.
- **Favorite.js:** Defines the favorite-recipe data model.
- **db.js:** Handles the database connection configuration.

## 🔌 API Organization

The backend separates API functionality into route files to keep the application organized.

- **auth.js:** Handles user registration and login routes.
- **favorites.js:** Handles operations related to users' favorite recipes.
- **recipes.js:** Handles recipe-related API routes.
- **server.js:** Initializes the Express server and configures the backend application.

## 🎨 Frontend Organization

- **index.html:** Main page for browsing and searching recipes.
- **login.html:** User login page.
- **register.html:** User registration page.
- **favorites.html:** Page for viewing favorite recipes.
- **auth.js:** Frontend authentication functionality.
- **script.js:** Main recipe search and display functionality.
- **favorites.js:** Favorite recipe functionality.
- **style.css:** Styles and layout for the user interface.

## 🔮 Future Improvements

- Advanced filtering by ingredients and recipe categories.
- Personalized recipe recommendations.
- Improved meal planning and recipe organization.
- Enhanced account management and security features.
- Additional search and discovery options.

## 👨‍💻 Author

**Ansh Rokde**

MCA Student | Aspiring Full-Stack Developer

GitHub: Add your GitHub profile URL here.

## 📄 License

This project was developed for educational and portfolio purposes.
