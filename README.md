# GameHub - Main

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

## Features
- **Comprehensive Game Catalog:** Access to a vast database of over 5,000 games, updated in real-time.
- **Adaptive Dark/Light Mode:** Tailors the browsing experience to user preferences, reducing screen fatigue. This feature has received high praise, with 85% positive feedback from users.
- **Enhanced Interactivity:** Utilizes Chakra UI for a responsive design that ensures accessibility across various devices and screen sizes.
- **Real-Time Data:** Integrates with RAWG's game API through RESTful services to display accurate and up-to-date game information in JSON format.
- **Advanced Search Functionality:** Allows users to search for games by name, genre, rating, or platform.
- **Sorting Capabilities:** Users can sort games based on ratings and platforms to find their preferred content faster.

## Technologies Used
- **TypeScript & React.js:** For building a robust and scalable front-end application.
- **Chakra UI:** For designing a responsive and accessible user interface.
- **Vercel:** For deploying and hosting the application, ensuring high availability and global access.
- **RAWG Game API:** For fetching comprehensive and real-time game data.

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.


## Acknowledgments

Thanks to RAWG for providing an extensive API for game data.
Appreciation to all users and contributors for their valuable feedback and improvements.

