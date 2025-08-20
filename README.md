# UniquePoint - Modern Fashion E-commerce Platform

## 🌟 Project Overview

UniquePoint is a modern, mobile-first e-commerce platform specifically designed for ready-made fashion for boys and girls across all age groups. The platform offers a seamless shopping experience with a unique WhatsApp-based checkout system that enables direct communication between customers and sellers.

## ✨ Key Features

### 🔐 User Authentication & Profile Management
- Secure email/mobile + password authentication
- Social login integration (Google)
- Comprehensive user profiles with shipping addresses and shopping history
- Wishlist and purchase history tracking

### 👗 Fashion Product Catalogue
- **Gender-based Categories**: Boys / Girls collections
- **Age-specific Sections**: Infants, Kids, Teens, Adults
- **Clothing Types**: T-shirts, Dresses, Jeans, Ethnic Wear, Winter Wear, Footwear, Accessories
- **Seasonal Collections**: Back to School, Festival Specials, Winter Fashion
- Advanced filtering and sorting options
- High-quality product images with zoom functionality
- Size charts, care instructions, and styling suggestions

### 🛒 Shopping Experience
- Guest browsing with registered user checkout
- Shopping cart for multiple items
- Direct "Buy Now" for single items
- Wishlist functionality for registered users

### 📱 WhatsApp Checkout Integration (Core Differentiator)
- Instead of traditional payment gateways, users are redirected to WhatsApp
- Auto-generated professional messages with:
  - Product details (name, size, color, quantity)
  - Cart summary and totals
  - Buyer information
- Direct seller-customer communication for order confirmation

### 🎨 Modern Design & UX
- Mobile-first responsive design
- Modern UI with Tailwind CSS
- Intuitive navigation and search
- Fast loading and smooth interactions

### 🛠️ Admin Dashboard
- Role-based access control
- Product management (upload, sizes, colors, stock)
- Collection and seasonal campaign management
- WhatsApp order tracking
- Analytics and insights

## 🚀 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context/useState
- **Icons**: React Icons
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Analytics**: Google Analytics, Meta Pixel

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd unique-point
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Header, Footer, Layout
│   ├── product/        # Product cards, filters
│   ├── auth/           # Login, signup forms
│   └── cart/           # Cart, checkout components
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Auth.jsx
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── context/            # React Context providers
└── assets/             # Images, icons, styles
```

## 🎯 Development Roadmap

### Phase 1: Foundation (Current)
- [x] Project setup with React + Vite + Tailwind
- [ ] Responsive layout structure
- [ ] Authentication system
- [ ] Basic routing

### Phase 2: Core Features
- [ ] Product catalog and filtering
- [ ] Shopping cart functionality
- [ ] WhatsApp integration
- [ ] User profiles and wishlist

### Phase 3: Advanced Features
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization

### Phase 4: Launch
- [ ] Testing and QA
- [ ] Production deployment
- [ ] Marketing and SEO setup

## 🎨 Design Principles

- **Mobile-First**: Primary focus on mobile user experience
- **Performance**: Fast loading and smooth interactions
- **Accessibility**: WCAG compliant design
- **User-Centric**: Intuitive navigation and clear call-to-actions
- **Brand-Focused**: Fashion-forward design aesthetics

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Mobile Optimization

The platform is designed with mobile-first approach considering that fashion buyers primarily shop from mobile devices. Features include:
- Touch-friendly interface
- Optimized images for mobile
- Fast loading times
- Gesture-based navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary and confidential.

---

**UniquePoint** - Where Fashion Meets Innovation 🛍️