
# E-Commerce App

## Overview
This is an E-Commerce application backend that provides APIs for managing products, searching, filtering, and retrieving product categories. The application uses MongoDB as the database.

## Routes

### Server Base URL
- **Base URL**: `http://localhost:3000`

### Endpoints

| Request | Method | URL |
|---------|--------|-----|
| Search Products | GET | `/search` |
| Add New Product | POST | `/products` |
| Get Product Info | GET | `/products/:id` |
| Update Product | PUT | `/products/:id` |
| Delete Product | DELETE | `/products/:id` |
| Filter Products | GET | `/filters` |
| Get Product Categories | GET | `/categories` |
| Bulk Data Insert | POST | `/bulk-insert` |

---

## Setting Up the Application

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add MongoDB URI**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI as follows:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
     PORT=3000
     ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

---

## Example Requests

### 1. Search Products
   **Method**: GET  
   **URL**: `/search`
   
   **Response**:
   ```json
   [
       {
           "id": "1",
           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
           "price": 109.95,
           "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
           "category": "men's clothing",
           "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
           "rating": {
               "rate": 3.9,
               "count": 120
           }
       },
       {
           "id": "2",
           "title": "Mens Casual Premium Slim Fit T-Shirts ",
           "price": 22.3,
           "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
           "category": "men's clothing",
           "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
           "rating": {
               "rate": 4.1,
               "count": 259
           }
       },
       {
           "id": "3",
           "title": "Mens Cotton Jacket",
           "price": 55.99,
           "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
           "category": "men's clothing",
           "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
           "rating": {
               "rate": 4.7,
               "count": 500
           }
       }
   ]
   ```

### 2. Add New Product
   **Method**: POST  
   **URL**: `/products`
   
   **Request Body**:
   ```json
   {
       "name": "New Product",
       "price": 200,
       "category": "Electronics"
   }
   ```
   **Response**:
   ```json
   {
       "message": "Product added successfully!",
       "product": {
           "id": "125",
           "name": "New Product",
           "price": 200,
           "category": "Electronics"
       }
   }
   ```

### 3. Get Product Info
   **Method**: GET  
   **URL**: `/products/:id`
   
   **Response**:
   ```json
   {
       "id": "1",
       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       "price": 109.95,
       "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
       "category": "men's clothing",
       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
       "rating": {
           "rate": 3.9,
           "count": 120
       }
   }
   ```

### 4. Update Product
   **Method**: PUT  
   **URL**: `/products/:id`
   
   **Request Body**:
   ```json
   {
       "price": 120
   }
   ```
   **Response**:
   ```json
   {
       "message": "Product updated successfully!",
       "product": {
           "id": "1",
           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
           "price": 120,
           "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
           "category": "men's clothing",
           "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
           "rating": {
               "rate": 3.9,
               "count": 120
           }
       }
   }
   ```

### 5. Delete Product
   **Method**: DELETE  
   **URL**: `/products/:id`
   
   **Response**:
   ```json
   {
       "message": "Product deleted successfully!"
   }
   ```

### 6. Filter Products
   **Method**: GET  
   **URL**: `/filters`
   
   **Response**:
   ```json
   [
       {
           "id": "1",
           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
           "price": 109.95,
           "category": "men's clothing"
       },
       {
           "id": "3",
           "title": "Mens Cotton Jacket",
           "price": 55.99,
           "category": "men's clothing"
       }
   ]
   ```

### 7. Get Product Categories
   **Method**: GET  
   **URL**: `/categories`
   
   **Response**:
   ```json
   ["Electronics", "Clothing", "Home & Kitchen"]
   ```

---



