# 🍴 Forkify-JS

A simple application where users can search a **Recipe Name** and get the related all **recipe** with **ingredients**, **images** and **Cooking Process**.

## 🚀 Features

- ✅ **Search** Recipe
- ✅ **Add/Upload** a Recipe
  - Recipe data
    - Title
    - Url
    - Image
    - Publisher
    - Prep time
    - Servings
  - Ingredients
- ✅ **Bookmark** a Recipe
- ✅ Can select **no. of servings** of a selected recipe
- ✅ Displays:
  - Pagination(10 recipe)
  - Change the page for more recipe
  - For a **selected Recipe**
    - Recipe **image**
    - Recipe **Preparation time**
    - Recipe serving **quantity**(Editable)
    - **Bookmarkable**
    - Recipe **Ingredients**
    - **Direction link** for the recipe for cooking process
- ✅ Can **track Bookmark** recipe
- ✅ Simple and responsive design using HTML, CSS, and JavaScript
- ✅ Fetches real-time data from an API

---

## 🛠️ Tech Stack

- **HTML** — Page structure
- **SCSS** — Styling and layout
- **Parcel** — for bundling and dev server
- **JavaScript** — Modern JavaScript (ES6+)
- **Fractional.js** — for fraction display

---

## 🔧 How to Use/ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Arman-next/Forkify-JS.git
   cd Forkify-JS
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   Parcel will serve the app at http://localhost:1234 by default.

---

## 🏗️ Build for Production

To build the project into a production-ready bundle

    npm start

The output will be in the `./dist ` folder.

---

## 📜 Scripts

| Item            |                              Description |
| :-------------- | ---------------------------------------: |
| `npm start`     |             Starts the Parcel dev server |
| `npm run build` | Builds the app for production in `dist/` |

---

## 📚 Dependencies

✅ **Runtime**

| Package               |                      Description |
| :-------------------- | -------------------------------: |
| `core-js`             |             JavaScript polyfills |
| `fractional`          | Utility for displaying fractions |
| `regenerator-runtime` |            Enables `async/await` |

🧪 **Dev Dependencies**

| Pakage                     |             Description |
| :------------------------- | ----------------------: |
| `parcel`                   |     Zero-config bundler |
| `@parcel/transformer-sass` | SCSS support for Parcel |

---

## 📷 ScreenShots

<img src="./src/img/SS - 1.png" alt="App Screenshot 1" width="400">
<img src="./src/img/SS - 2.png" alt="App Screenshot 2" width="400">
<img src="./src/img/SS - 3.png" alt="App Screenshot 3" width="400">
<img src="./src/img/SS - 4.png" alt="App Screenshot 4" width="400">

---

## 📁 Folder Structure

```bash
Forkify-JS/
├── index.html # Main entry file
├── src/ # JavaScript modules and SCSS files
├── package.json # Project config and dependencies
├── .gitignore # Ignored files for Git
├── dist/ # Production build output (auto-generated)
├── node_modules/ # Installed dependencies (auto-generated)
└── README.md # Project documentation
```

---

## 🧔‍♂️ Author

- **Arman Khan**
- **GitHub**: [@Arman-next](https://github.com/Arman-next)

---

