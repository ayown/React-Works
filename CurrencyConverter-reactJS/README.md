# Currency Converter

A modern and responsive currency converter web application built using React.js, Vite, and Tailwind CSS. It fetches real-time exchange rates and allows users to convert between different currencies.

## Features

![Website Screenshot](/public/WEB.png)

- Fetches live exchange rates using [CurrencyAPI](https://currencyapi.com/)
- Converts currency values instantly
- Displays country flags for selected currencies
- User-friendly interface with dropdown selection
- Fully responsive design using Tailwind CSS

## Technologies Used

- **Frontend Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **API:** CurrencyAPI for real-time exchange rates
- **Development Tools:** ESLint for code quality

## Project Structure

```
CurrencyConverter-reactJS/
├── src/               # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── index.html        # Entry HTML file
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── eslint.config.js  # ESLint configuration
└── package.json      # Project dependencies and scripts
```

## Installation & Usage

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Setup

1. Clone the Repository

```bash
git clone https://github.com/ayown/CurrencyConverter-reactJS.git
cd CurrencyConverter-reactJS
```

2. Install Dependencies

```bash
npm install
```

3. Start Development Server

```bash
npm run dev
```

4. Build for Production

```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Administrator

- **AYAN** - [GitHub](https://github.com/ayown)

## Acknowledgments

- CurrencyAPI for providing exchange rates
- Open-source resources for flag images
