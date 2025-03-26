# Weather API Wrapper Service

A lightweight, efficient weather API built with Node.js, Express, and TypeScript. This service fetches real-time weather data from [Visual Crossing](https://www.visualcrossing.com/), caches it using Redis to optimize performance, and implements rate-limiting to reduce external API calls.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Redis Caching](#redis-caching)
- [Error Handling](#error-handling)
- [Challenges Faced](#challenges-faced)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project provides a RESTful API that retrieves real-time weather data from the Visual Crossing API and enhances performance with Redis caching. By reducing redundant calls to the external API, it ensures faster response times and adheres to rate limits.

### Why Caching?

Third-party APIs like Visual Crossing impose rate limits, and frequent requests can lead to throttling or blocked access. Caching weather data in Redis for a set duration (e.g., 1 hour) minimizes external API calls, improves efficiency, and delivers a seamless user experience.

---

## Features

- Fetch real-time weather data for any city.
- Redis caching to store weather data and reduce API requests.
- Built with TypeScript for type safety and better developer experience.
- Dockerized Redis for easy setup and scalability.
- Comprehensive error handling for invalid inputs and API failures.

---

## Technologies Used

- **Node.js**: Server-side runtime for JavaScript.
- **Express.js**: Framework for building RESTful APIs.
- **TypeScript**: Adds static typing to JavaScript for improved code quality.
- **Redis**: In-memory data store for caching.
- **Docker**: Containerizes Redis for portability and consistency.
- **Visual Crossing API**: External service for weather data.

---

## Setup and Installation

### Prerequisites

- **Node.js**: v14.x or higher.
- **Docker**: Optional, for running Redis in a container.
- **Visual Crossing API Key**: Sign up [here](https://www.visualcrossing.com/) to get your free API key.

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Waynexlink/Weather_API_Wrapper_Service
   cd Weather_API_Wrapper_Service

    Install Dependencies
    bash

    npm install

    Set Up Environment Variables
    Create a .env file in the root directory with the following:
    env

    WEATHER_API_KEY=your-visual-crossing-api-key
    REDIS_URL=redis://localhost:6379
    PORT=5000

    Run Redis (Optional: Using Docker)
    If you don’t have Redis installed locally, use Docker:
    bash

    docker run -d -p 6379:6379 redis

    Start the Application
    bash

    npm run dev

    The server will start at http://localhost:5000.
   ```

API Endpoints
GET /weather/:city
Fetches current weather data for the specified city.

    Example: http://localhost:5000/weather/London
    Response:
    json

    {
      "city": "London",
      "temperature": 15,
      "description": "Cloudy",
      "humidity": 80,
      "cached": true
    }

Redis Caching
Weather data is cached in Redis with a 1-hour expiration time to optimize performance and reduce external API calls.
Cache Flow

    Check Cache: The app checks Redis for existing data based on the city name.
    Serve Cached Data: If found, the cached data is returned immediately.
    Fetch Fresh Data: If not found or expired, the app queries Visual Crossing, caches the result, and returns it.

Error Handling

    Invalid City: Returns a 400 Bad Request with a message (e.g., "Invalid city name").
    API Failure: Returns a 500 Internal Server Error if Visual Crossing is unavailable.
    Redis Failure: Falls back to the external API and logs the issue, ensuring uninterrupted service.

Challenges Faced

    Redis Integration
    Early issues with Redis connectivity were resolved by adopting ioredis, a robust Redis client for Node.js.
    TypeScript Complexity
    Managing types for third-party libraries (e.g., axios, ioredis) was challenging but improved with custom type definitions.
    HTTP Headers Error
    Fixed the "Cannot set headers after they are sent" error by ensuring proper control flow and single responses.
    Rate Limiting
    Implemented Redis caching to stay within Visual Crossing’s API limits, avoiding throttling.

Contributing
Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a feature branch (git checkout -b feature-name).
    Commit your changes (git commit -m "Add feature").
    Push to the branch (git push origin feature-name).
    Open a pull request.

License
This project is licensed under the MIT License (LICENSE).
