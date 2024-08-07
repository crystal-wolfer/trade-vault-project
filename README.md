# TradeVault

This project is part of the Softuni Software Development JavaScript path and aims to demonstrate my knowledge and skills of creating SPA application with React.

TradeVault is a basic cryptocurrency trading platform built with React. This application allows users to view and manage their crypto portfolios. The project includes a client-side application that fetches data from a ready-made server and some external APIs. The focus of this project was to create a realistic platform with user friendly interface.

![demo](./TradeVaultDemo.gif)

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Introduction

TradeVault is a cryptocurrency trading platform designed to help users grow and manage their crypto portfolios with ease. The platform provides market overviews, user profile management, and more. You can directly access the application from here: `https://trade-vault.web.app/` or follow the steps below to run the application locally on your machine.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager) 

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/crystal-wolfer/trade-vault-project.git
    ```

2. Navigate to the client directory
    ```bash
    cd client
    ```

3. Install the client dependencies
    ```bash
    npm install
    ```

4. Start the client application:
    ```bash
    npm start dev
    ```

5. In a new terminal window, navigate to the server directory and start the server:
    ```bash
    node server.js
    ```

## Usage

To use the application, follow the installation steps above and ensure both the client and server are running. Navigate to `https://trade-vault.web.app/` OR `http://localhost:5173` in your browser to access the TradeVault platform. The platform comes with 3 preseeded accounts:
- peter@abv.bg; 123456
- george@abv.bg; 123456
- admin@abv.bg; admin

## Features

- User authentication and profile management
- Market overview with live crypto asset prices
- This year crypto events happening in Europe
- Detailed views for individual crypto assets
- Portfolio management - edit and delete orders
- Waitlist management - edit and delete items
- Profile management - customise your profile avatar and basic information
- Simple and intuitive navigation

## Contributing

We welcome contributions to TradeVault. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please adhere to the code of conduct.

## License

This project is licensed under the MIT License.

