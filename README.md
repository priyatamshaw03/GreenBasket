# 🛒 GreenBasket - Online Grocery Web App

GreenBasket is a sleek and responsive grocery e-commerce application that allows users to browse products, manage carts, track orders, and shop for daily essentials effortlessly.

🌐 [Live Demo](https://greenbasket-grocery.vercel.app)

---

## 🚀 Features

- 🧾 Browse groceries by category
- 🛒 Add/remove products from cart
- 🔐 Secure login & signup
- 📦 View and track user orders
- ⚙️ Admin dashboard to manage products & orders
- 💳 Checkout with dynamic pricing & currency support
- ⚡ Lightning-fast UI powered by Vercel

---


## 🛠️ Tech Stack

**Frontend:**
- React.js (with Hooks + Context API)
- Tailwind CSS
- Axios

**Backend (Optional if using external API):**
- Node.js + Express
- MongoDB (if you're using your own backend)

**Other Tools:**

- JWT for authentication
- Vercel for deployment
- GitHub for version control
---

## 📂 Folder Structure (Frontend)

greenbasket-grocery/
├── public/
├── src/
│ ├── assets/ # Images, icons
│ ├── components/ # Navbar, ProductCard, Footer, etc.
│ ├── context/ # AppContext.js for state management
│ ├── pages/ # Home, Cart, Orders, etc.
│ ├── App.js # Route and layout management
│ └── index.js # Entry point
└── README.md



---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/priyatamshaw03/greenbasket.git
cd greenbasket-grocery
```
 ### 2. Install dependencies

```bash
 npm install
```

### 3. Start the development server

```bash
npm start
```

### 🌐 Environment Variables

Create a .env file in the root:

```bash
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_CURRENCY=INR
REACT_APP_SECRET_KEY=your-secret
```

### 🔧 Admin Features
1. Product CRUD (Create, Read, Update, Delete)

2. Order management

3. Access control (Admin/User separation)

### ✅ To-Do (Future Enhancements)
💳 Payment gateway integration (Razorpay/Stripe)

📲 PWA support for mobile installs

🌟 Product reviews and rating system

🛎️ Notification on order updates

### 🤝 Contributing
1. Fork the repo

2. Create your feature branch (git checkout -b feature/YourFeature)

3. Commit your changes (git commit -m 'Add YourFeature')

4. Push to the branch (git push origin feature/YourFeature)

5. Open a Pull Request

### 👨‍💻 Developed By
Priyatam Shaw
🔗 https://github.com/priyatamshaw03