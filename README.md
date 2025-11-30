# 🎬 MovieApp

Welcome to MovieApp! 🍿 This project is a React-based web application that allows users to discover and explore movies using the TMDB API. It features a clean and intuitive interface, making it easy to search for movies, view details, and stay updated with the latest releases.

**[Demo](https://cinemafind.vercel.app/)**


🚀 **Key Features:**

*   **Movie Search:** Effortlessly find your favorite movies using the search functionality.
*   **Debounced Search:** Optimizes API calls by delaying the search until the user stops typing, reducing unnecessary requests.
*   **Loading Indicator:** Provides visual feedback while fetching movie data.
*   **Error Handling:** Gracefully handles API errors and displays informative messages.
*   **Movie Card Display:** Presents movie details in a visually appealing card format, including poster, title, rating, and release year.
*   **Responsive Design:** Ensures a seamless experience across various devices.

🛠️ **Tech Stack:**

*   **Frontend:**
    *   React: A JavaScript library for building user interfaces.
    *   React DOM: Provides methods for interacting with the DOM.
    *   react-use: Collection of useful React hooks.
    *   Tailwind CSS: A utility-first CSS framework for styling.
*   **Build Tool:**
    *   Vite: A fast build tool and development server.
*   **API:**
    *   TMDB API: Used to fetch movie data.
*   **Other:**
    *   ESLint: For linting JavaScript code.

📦 **Getting Started:**

### Prerequisites

*   Node.js (version >=18)
*   npm or yarn or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd movieapp
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install or pnpm install
    ```

3.  Obtain a TMDB API key:

    *   Visit [TMDB](https://www.themoviedb.org/) and create an account.
    *   Request an API key from your account settings.

4.  Set up environment variables:

    *   Create a `.env` file in the root directory of the project.
    *   Add your TMDB API key to the `.env` file:

        ```
        VITE_API_KEY=YOUR_TMDB_API_KEY
        ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

💻 **Usage:**

1.  Once the application is running, you'll see a search bar.
2.  Type in the name of a movie you want to search for.
3.  The movie list will update dynamically as you type (debounced for efficiency).
4.  Click on a movie card to view more details (currently, details are displayed within the card itself).

📂 **Project Structure:**

```
movieapp/
├── src/
│   ├── assets/
│   │   ├── search.svg
│   │   ├── star.svg
│   │   └── no-movie.png
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Loading.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```