# TrackSales CRM

## Index 📝

- [Description](#description-)
- [Installation](#installation-)
- [Prerequisites](#prerequisites-)
- [Project Installation](#project-installation-)
- [Use](#use-)
- [Project Structure](#project-structure-)
- [Technologies](#technologies-)
- [Contribution](#contribution-)
- [Project Conventions](#project-conventions-)

<br>

## Description 💡
TrackSales CRM is a web application that aims to help sales teams, back-office staff and Manager control clients, contacts, tasks and client status in order to improve the relationship with customers. 
<br>

## Installation 💾
<br>

### Prerequisites

- Visual Studio Code, Git Bash, Vite, Node.js (14 or superior), npm (version 6 or superior), React 
<br>

### Project Installation

1. **Fork our frontend repository**

   Open the repository [TrackSales](https://github.com/loren-2/TrackSales) and click the "Fork" button located in the upper right corner of the page. It creates a copy of our repository in your own Github account.


2. **Clone your forked repository**

   Open a Git Bash terminal and clone your forked repository. You can chose a new name for your project:

```bash
# Clone this repository 
git clone https://github.com/your-github-profile/your-project-name.git
```

3. **In VSCode, enter the project's directory you've just cloned**

```bash
  cd your-project-name
```

4. **Install the dependencies:
```bash
  npm i
  npm run dev
```

4. Go to our backend repository [TrackSalesBack](https://github.com/loren-2/TrackSalesBack) and follow its README's instructions:
<br>

## Use ⌨️

In order to visualize the project:

1. Run the development server:
   ```bash
   npm install 
   npm run dev
   ```
2. Open the local host in your browser to view the application.

<br>

## Project Structure 📐

```plaintext
/
├── public
├── src
│   ├── components/
│   │   ├── 
│   │   └── 
│   ├── config
│   ├── layout
│   ├── pages
│   ├── router
│   ├── services
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

- **public/:** Contains the project's static resources such as images, icons, and fonts.
- **src/:** Contains the source files of the application.
  - **_components/:_** Contains React's reusable components.
    -  **_ui/:_** Contains the components imported from the shadcn library.  
  - **_config/:_** Contains the urls.js file, which helps us streamline the API call.
  - **layout:** Folder containing the paths to the application's dynamic pages.
  - **_pages:_** Contains all the pages that make up the different views of the app.
  - **_router:_** Contains the file index.jsx with the application's routing logic.
  - **_services:_** Contains the file useApi.jsx with the API call reused in all sections of the application.

<br>

## Technologies 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

<br>

## Contribution 💻

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit.
4. Push your branch to your fork: `git push origin feature-name`.
5. Open a pull request.

<br>

## Project Conventions

Use of GitFlow.

We work from and to the dev branch.

CSS styles 

Naming of directories and files following the scheme below:

```bash
 components
    iamAComponent 📂

