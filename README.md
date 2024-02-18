My project is an e-commerce website for women's, men's, and children's clothing.
It is a website where clothing for children, women, and men can be purchased.
The application has 6 main pages that are "Home", "For Him", "For Her", "For Kids", "Login" and "Cart".
Navigation through the site is done using the "Home", "For Him", "For Her", "For Kids", "Login" , "Cart" buttons.
The pages "For Him", "For Her", "For Kids" represents a separate category that a user can choose from.
In each category, the desired product can be selected. After selecting a product, a new page coresponding with the product will appear.
After selecting a product it will be automatically added to the shopping cart where all the products that were added here will appear and in the bottom of the page the total price will be calculated.
A product can be selected multiple times.

A user can create a new account if they do not already have one from the "Login" page -> "To create a new account click here", after which they can add products to the cart, and those products will be stored in the shopping cart until the next login.
A user can login to their account by typing their email address that they used to create an account and by typing the password corresponding to that email address.

The site has a "New Collections" section on the "Home" page where newly added products appear in the order they were added.

Products are added to the site using the "Admin" page that is a separate part of the project.
Adding products is done by selecting the "Add Product" button on the left side of the page, then adding a product description, initial price, final price, product category, a picture of the product, and clicking the "Add product" button to add the product to the database.
The product will appear on the "Product List" page and at the same time will be added to the MongoDB database.

The application consists of 3 main parts:

The "back-end" part - which creates the connection to the MongoDB database where the entered data of new products and a new user are stored. This section of the application communicates with the admin part where new products are added or existing products are deleted from the database and with the front-end part with which the end-user interacts. Also in the back-end, adding a product to the shopping cart, deleting a product from the shopping cart, or deleting a product from the application and implicitly from the database is done. Also in this part of the application, the final price calculation of the products in the shopping cart is done.

The "front-end" part - represents the visual part of the site with which the end-user interacts and through which navigation on the site is done. Here are displayed the products that have been added to the database. The application displays products by categories and on the main page displays the latest products added to the database. Products added to the shopping cart can be accessed by selecting the "View Cart" button and in this way, all products added to the cart can be seen as a list, and also the total price of the selected products can be seen.

The "admin" part - represents the visual part of the application where the page administrator can manage the products on the site, and also is the place where the administrator can add new products to the site by specifying a description, an initial and a final price, a category, and a picture, or can delete products from the site.

The application was built using HTML for page structuring, CSS for styling, and JavaScript to implement the functionality and logic of the site. MongoDB was used for storing information.

Express was chosen as the framework. With the help of the React JS library, the application interface was built, and to connect the user interface to the server, the Node.js execution environment was used. Additionally Vite was chosen for facilitating file uploading.

This project was done with the help of "GreatStack" YouTube channel.

The following tasks should be executed after copying the repository: 
- Download and install Node.js from https://nodejs.org/
Navigate to the back_end folder using Bash, Visual Studio Code Integrated Terminal, or Command Prompt.
- Run the following command in the back_end folder using Bash, or Visual Studio Code Integrated Terminal or Command prompt: npm init -y
To install Express framework and mongoose use the following command:
- npm install express mongoose
To run the back-end server use the commadn:
- node .\index.js
In front_end folder using Visual Studio Code or Bash or Command prompt and opening the Integrated Terminal in this folder:
To initialize a React app the folder: npx create-react-app client
- npm install
- npm install react
- npm install react-router-dom
To start the front end server:
-  npm start
To start the admin page run the following commands in the same environment as above:
- npm install --save-dev vite
To start the Vite server:
-  npm run dev

