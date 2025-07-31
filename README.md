# AngularFlowbite - E-commerce Platform

A modern, responsive e-commerce web application built with Angular 19 and Flowbite UI components. This project demonstrates best practices for building scalable Angular applications with authentication, product management, and a beautiful user interface.

## 🚀 Features

### Core Features
- **User Authentication**: Complete signup/login system with JWT tokens
- **Product Catalog**: Browse products with filtering and search capabilities
- **Product Details**: Detailed product information with images and descriptions
- **Category Management**: Organized product categories
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light theme switching
- **Route Guards**: Protected routes for authenticated users
- **Lazy Loading**: Optimized performance with component lazy loading

### Technical Features
- **Angular 19**: Latest Angular framework with standalone components
- **Server-Side Rendering (SSR)**: Improved SEO and performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **Flowbite**: Beautiful UI components built on Tailwind
- **RxJS**: Reactive programming for state management
- **HTTP Interceptors**: Automatic token handling for API requests

## 🛠️ Technologies Used

### Frontend
- **Angular 19.2.0** - Modern web framework
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Flowbite 3.1.2** - UI component library
- **RxJS 7.8.0** - Reactive programming library

### Development Tools
- **Angular CLI 19.2.15** - Command line interface
- **Karma & Jasmine** - Testing framework
- **PostCSS** - CSS processing
- **Express** - Server-side rendering

## 📁 Project Structure

```
angular-flowbite/
├── src/
│   ├── app/
│   │   ├── about/                 # About page component
│   │   ├── categories/            # Product categories component
│   │   ├── footer/                # Footer component
│   │   ├── guards/                # Route guards (auth)
│   │   ├── home/                  # Home page component
│   │   ├── interceptors/          # HTTP interceptors
│   │   ├── legal/                 # Legal pages (privacy, terms)
│   │   ├── login/                 # Login component
│   │   ├── navbar/                # Navigation component
│   │   ├── not-found/             # 404 page component
│   │   ├── pipes/                 # Custom pipes
│   │   ├── privacy/               # Privacy policy page
│   │   ├── product/               # Product component
│   │   ├── product-details/       # Product details page
│   │   ├── products/              # Products listing page
│   │   ├── services/              # API services
│   │   ├── settings/              # User settings (protected)
│   │   ├── signup/                # Registration component
│   │   ├── terms/                 # Terms & conditions page
│   │   ├── app.component.*        # Root component
│   │   ├── app.routes.ts          # Application routing
│   │   ├── app.config.ts          # App configuration
│   │   ├── category.ts            # Category interface
│   │   ├── product.ts             # Product interface
│   │   └── user.ts                # User interface
│   ├── environments/              # Environment configurations
│   ├── index.html                 # Main HTML file
│   ├── main.ts                    # Application entry point
│   ├── main.server.ts             # SSR entry point
│   ├── server.ts                  # Express server for SSR
│   └── styles.css                 # Global styles
├── public/                        # Static assets
├── angular.json                   # Angular CLI configuration
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (install globally with `npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-flowbite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run watch` | Builds the project in watch mode |
| `npm test` | Runs unit tests with Karma |
| `npm run serve:ssr:angular-flowbite` | Serves the SSR build |

## 🏗️ Development

### Code Scaffolding

Generate new components, services, and other Angular artifacts:

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# Generate a new pipe
ng generate pipe pipe-name

# Generate a new guard
ng generate guard guard-name
```

### Project Structure Guidelines

- **Components**: Each feature has its own folder with component files
- **Services**: Centralized in the `services/` directory
- **Guards**: Authentication and route protection in `guards/`
- **Interceptors**: HTTP request/response handling in `interceptors/`
- **Pipes**: Custom pipes for data transformation in `pipes/`

## 🧪 Testing

### Unit Tests
```bash
npm test
```
Runs the test suite using Karma and Jasmine.

### End-to-End Tests
```bash
ng e2e
```
Runs end-to-end tests (requires additional setup).

## 🏭 Building for Production

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🔧 Configuration

### Environment Files
- `src/environments/environment.ts` - Development environment
- `src/environments/environment.prod.ts` - Production environment

### Angular Configuration
- `angular.json` - Angular CLI workspace configuration
- `tsconfig.json` - TypeScript compiler options

## 🎨 Styling

This project uses **Tailwind CSS** with **Flowbite** components:

- **Tailwind CSS**: Utility-first CSS framework
- **Flowbite**: Pre-built components built on Tailwind
- **Custom CSS**: Component-specific styles in `.css` files
- **Dark Mode**: Built-in dark/light theme support

## 🔐 Authentication

The application includes a complete authentication system:

- **JWT Tokens**: Secure token-based authentication
- **Route Guards**: Protected routes for authenticated users
- **HTTP Interceptors**: Automatic token handling
- **Local Storage**: Persistent user sessions

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Responsive Layout**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized for mobile devices
- **Progressive Enhancement**: Works on all modern browsers

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **Flowbite** - For the beautiful UI components
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Support

If you have any questions or need help with this project, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy Coding! 🚀**
