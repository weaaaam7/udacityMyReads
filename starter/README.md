# MyReads Project

This is the implementation for the first udacity assesment in React Nanodegree. It is an application to help the user to manage her/his readings and to search and add new books to the shelfs.

## Instructions

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Tree

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── BooksAPI.js 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components
    │   ├── Book.js # Book component to display each book.
    │   ├── Shelf.js # Shelf component to display each self with its books.
    │   ├── HomePage.js # HomePage component that map each shelf to its books.
    │   └── SearchPage.js # SearchPage component to search books and add to MyReads.
    ├── index.css 
    └── index.js 
```

## Backend Server

The backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods are used to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). More information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

