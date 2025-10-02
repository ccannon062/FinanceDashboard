# Financial Dashboard

A modern, responsive cryptocurrency tracking application built with React and Vite. Track real-time crypto prices, analyze market trends, and manage your watchlist all in one place.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

---
<img width="1721" height="871" alt="Screenshot 2025-10-02 at 10 24 00 AM" src="https://github.com/user-attachments/assets/673e62ef-ad86-4099-984d-fd445c617017" />
---

## Tech Stack

### Frontend
- **React 19.1.1** - UI library for building interactive interfaces
- **React Router DOM 7.8.2** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Recharts 3.2.1** - Charting library for data visualization
- **React Icons 5.5.0** - Icon library
- **React Spinners 0.17.0** - Loading animations by David Hu

### Build Tools
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint 9.33.0** - Code linting and quality

### API
- **CoinCap API 3.0** - Real-time cryptocurrency market data

---

## Installation & Local Setup

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/financial-dashboard.git
   cd financial-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_coincap_api_key_here
   VITE_BASE_URL=https://api.coincap.io/v2
   ```

   > **Note:** Get your free API key from [CoinCap](https://docs.coincap.io/)
   

4. **Open your browser**
   
   Navigate to `http://localhost:5173` or specified port.

---

## Features

### Home Page
- **Global Market Snapshot** - Real-time overview of cryptocurrency market
- **Total Market Cap** - Aggregate market capitalization across 200+ coins
- **24-Hour Trading Volume** - Daily trading activity metrics
- **Bitcoin & Ethereum Dominance** - Market share percentages with trend indicators
- **Top 10 Coins Table** - Live price data for leading cryptocurrencies

### Coins Search
- **Real-time Search** - Instant filtering across 200+ cryptocurrencies
- **Interactive Price Charts** - Historical price data visualization with Recharts
- **Detailed Coin Information** - Comprehensive data including rank, price, and symbol
- **One-Click Tracking** - Add coins directly to your watchlist

### Track Page
- **Personal Watchlist** - Monitor your selected cryptocurrencies
- **Persistent Storage** - LocalStorage-based watchlist management
- **Quick Remove** - Easy watchlist management
- **Live Price Updates** - Real-time price and percentage change data

### UI/UX Features
- **Responsive Design** - Mobile-first approach with full desktop support
- **Smooth Animations** - Hover effects and transitions
- **Loading States** - Professional loading indicators
- **Clean Interface** - Modern, minimalist design with Tailwind CSS

---

## Project Structure

```
financial-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Card.jsx           # Reusable metric card component
│   │   ├── Footer.jsx          # Footer with navigation and social links
│   │   └── Navbar.jsx          # Navigation bar with mobile menu
│   ├── routes/
│   │   ├── Home.jsx            # Home page with market overview
│   │   ├── Coins.jsx           # Coin search and chart page
│   │   ├── Track.jsx           # Watchlist tracking page
│   │   ├── Settings.jsx        # Settings page (placeholder)
│   │   └── utils/
│   │       └── CleanNum.js     # Number formatting utility
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## API & Component Reference

### CoinCap API Endpoints

#### Get Assets
```javascript
GET https://api.coincap.io/v2/assets?limit=200
```
Returns list of cryptocurrency assets with pricing and market data.

#### Get Asset History
```javascript
GET https://api.coincap.io/v2/assets/{id}/history?interval=d1
```
Returns historical price data for specific cryptocurrency.

### Key Components

#### `<Card />`
Reusable metric display component.

**Props:**
- `cardName` (string) - Display name for the metric
- `value` (string/number) - Metric value
- `trendDirection` (number, optional) - Positive/negative trend indicator
- `icon` (ReactNode) - Icon component to display

#### `<Navbar />`
Main navigation component with responsive mobile menu.

#### `<Footer />`
Footer component with navigation links and social media icons.

### Utility Functions

#### `cleanNumbers(number)`
Formats large numbers with appropriate suffixes (T, B, M).

**Example:**
```javascript
cleanNumbers(1500000000) // Returns "1.50 B"
cleanNumbers(2300000)    // Returns "2.30 M"
```

---

## Future Plans

- [ ] **Settings Page Implementation**
  - Dark/Light theme toggle
  - Currency preference (USD, EUR, GBP)
  - Default chart time ranges
  - Price format customization

- [ ] **Additional Features**
  - Historical portfolio performance charts
  - News feed integration
  - Multiple watchlist support
  - Export data to CSV

- [ ] **Performance Optimizations**
  - Implement data caching strategies
  - Add service workers for offline support
  - Optimize API call frequency

---

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Caleb Cannon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

**Your Name**
- GitHub: [@ccannon062](https://github.com/ccannon062)
- Portfolio: [ccannon.dev](https://ccannon.dev)

---

## Acknowledgments

- [CoinCap API](https://coincap.io/) for providing free cryptocurrency data
- [React Spinners](https://github.com/davidhu2000/react-spinners) by David Hu for loading animations
- [Recharts](https://recharts.org/) for the charting library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
