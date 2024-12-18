# Shop Page

## Overview
This is a Shop Page application built with React. It allows users to browse products, apply filters (by category, color, and size), and search for products using a keyword. The application fetches data from a backend server and dynamically updates the displayed products based on user input.

---

## Features
- **Filter Products**: Filter by categories, colors, and sizes.
- **Search Functionality**: Search for products by keywords with a debounce feature to reduce server calls.
- **Dynamic Product Display**: Displays products dynamically based on the applied filters and search queries.

---

## Technologies Used
- **Frontend**: React
- **Styling**: Tailwind CSS
- **State Management**: useState, useEffect (React hooks)
- **API Requests**: Axios
- **Debouncing**: Lodash debounce

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- A running backend server that provides product data and filter options.

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000` by default.

4. **Ensure Backend is Running**:
   - The application expects the backend server to be running at `http://localhost:3000`.

---

## API Endpoints
The app interacts with the following API endpoints:

1. **Fetch Filters**:
   - **Method**: GET
   - **URL**: `/filters`
   - **Response Example**:
     ```json
     {
       "categories": ["Electronics", "Clothing"],
       
     }
     ```

2. **Search Products**:
   - **Method**: GET
   - **URL**: `/search`
   - **Query Parameters**:
     - `keyword`: The search term.
   - **Response Example**:
     ```json
     [
       {
         "_id": "1",
         "title": "Product 1",
         "price": 100,
         "category": "Electronics",
         "image": "https://example.com/image1.jpg"
       }
     ]
     ```

3. **Get Products by Filters**:
   - **Method**: GET
   - **URL**: `/categories`
   - **Query Parameters**:
     - `type`: Filter value (e.g., category, color, or size).
   - **Response Example**:
     ```json
     [
       {
         "_id": "2",
         "title": "Product 2",
         "price": 150,
         "category": "Clothing",
         "image": "https://example.com/image2.jpg"
       }
     ]
     ```

---

## Components

### App Component
The main component that handles:
- Fetching filters and products.
- Managing selected filters and search keyword.
- Rendering the filters, search bar, and product grid.

#### State Variables
- `products`: List of products to display.
- `filters`: Available categories, colors, and sizes for filtering.
- `selectedFilters`: User-selected filter options.
- `searchKeyword`: Keyword for product search.

---

## How It Works

1. **Filters Section**:
   - Displays dropdowns for category, color, and size filters.
   - Fetches products based on the selected filter value.

2. **Search Bar**:
   - Allows searching products by keyword.
   - Uses a debounced input to reduce API calls.

3. **Products Grid**:
   - Displays a grid of products fetched from the server.
   - Each product card includes the product's title, category, color, size, price, and image.

---

## Example Data

### Filters Example
```json
{
  "categories": ["Electronics", "Clothing", "Home & Kitchen"],
  
}
```

### Products Example
```json
[
  {
    "_id": "1",
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "_id": "2",
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "category": "men's clothing",
    
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  }
]
```

---


