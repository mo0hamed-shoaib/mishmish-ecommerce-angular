# AngularFlowbite

<div align="center">
  <img src="./public/images/logo-no-bg.png" alt="AngularFlowbite Logo" width="200" height="200">
  
  <h3>Modern E-commerce Platform</h3>
  <p>A powerful, responsive e-commerce web application built with Angular 19 and Flowbite UI</p>

  [![Angular](https://img.shields.io/badge/Angular-19.2.0-red?logo=angular)](https://angular.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()

  [Live Demo](https://your-demo-url.com) • [Documentation](https://your-docs-url.com) • [Report Bug](https://github.com/your-username/angular-flowbite/issues) • [Request Feature](https://github.com/your-username/angular-flowbite/issues)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🌟 Overview

AngularFlowbite is a cutting-edge e-commerce platform that combines the power of Angular 19 with the elegant design of Flowbite UI components. Built with modern web standards and best practices, it offers a seamless shopping experience across all devices while providing developers with a robust, maintainable codebase.

### Why AngularFlowbite?

- **🚀 Performance First**: Server-Side Rendering (SSR) and lazy loading for optimal performance
- **📱 Mobile-Ready**: Responsive design that works flawlessly on all devices
- **🔒 Secure**: JWT-based authentication with comprehensive route protection
- **🎨 Beautiful**: Modern UI with dark mode support and smooth animations
- **🛠️ Developer Friendly**: Type-safe development with comprehensive documentation
- **📈 Scalable**: Modular architecture ready for enterprise-level applications

## ✨ Features

### 🛒 E-commerce Features
- **Product Management**
  - Comprehensive product catalog with advanced filtering
  - Detailed product pages with image galleries
  - Category-based organization and navigation
  - Search functionality with real-time suggestions
  - Product comparison and wishlist features

- **User Experience**
  - Intuitive shopping cart with persistent state
  - Guest and registered user checkout flows
  - Order history and tracking
  - User profiles and preferences
  - Review and rating system

### 🔐 Authentication & Security
- **Robust Authentication System**
  - JWT token-based authentication
  - Secure password hashing and validation
  - Social login integration ready
  - Password reset functionality
  - Session management with automatic refresh

- **Security Features**
  - HTTP interceptors for secure API communication
  - Route guards for protected content
  - CSRF protection
  - Input sanitization and validation

### 🎨 UI/UX Features
- **Modern Interface**
  - Clean, intuitive design with Flowbite components
  - Dark/light theme switching with system preference detection
  - Smooth animations and micro-interactions
  - Loading states and error handling
  - Accessibility compliance (WCAG 2.1)

- **Responsive Design**
  - Mobile-first approach
  - Progressive Web App (PWA) ready
  - Touch-friendly interfaces
  - Optimized for all screen sizes

### ⚡ Technical Features
- **Performance Optimizations**
  - Server-Side Rendering (SSR) for improved SEO
  - Lazy loading for components and routes
  - Image optimization and lazy loading
  - Code splitting and tree shaking
  - Service worker for offline capabilities

- **Developer Experience**
  - TypeScript for enhanced code quality
  - Comprehensive error handling
  - Hot module replacement in development
  - Automated testing setup
  - CI/CD pipeline ready

## 🎮 Demo

### Live Application
Experience the application live: [AngularFlowbite Demo](https://your-demo-url.com)

### Screenshots

<details>
<summary>View Screenshots</summary>

#### Home Page
![Home Page](./screenshots/home.png)

#### Product Catalog
![Product Catalog](./screenshots/products.png)

#### Product Details
![Product Details](./screenshots/product-details.png)

#### Mobile View
![Mobile View](./screenshots/mobile.png)

</details>

### Demo Credentials
- **Email**: demo@angularflowbite.com
- **Password**: demo123

## 🛠️ Technologies

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.2.0 | Frontend framework |
| **TypeScript** | 5.7.2 | Type-safe development |
| **RxJS** | 7.8.0 | Reactive programming |
| **Tailwind CSS** | 4.1.11 | Utility-first styling |
| **Flowbite** | 3.1.2 | UI component library |

### Development & Build Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **Angular CLI** | 19.2.15 | Development tooling |
| **PostCSS** | Latest | CSS processing |
| **Karma** | Latest | Unit testing |
| **Jasmine** | Latest | Testing framework |
| **Express** | Latest | SSR server |

### Architecture Patterns
- **Standalone Components**: Modern Angular architecture
- **Reactive Forms**: Form handling and validation
- **HTTP Interceptors**: Centralized request/response handling
- **Route Guards**: Authentication and authorization
- **Lazy Loading**: Performance optimization
- **Service Layer**: Business logic separation

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

```bash
# Check Node.js version (18+ required)
node --version

# Check npm version
npm --version

# Install Angular CLI globally (if not already installed)
npm install -g @angular/cli@latest
```

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd angular-flowbite
   ```

2. **Install Dependencies**
   ```bash
   # Install all dependencies
   npm install

   # Verify installation
   npm list --depth=0
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp src/environments/environment.template.ts src/environments/environment.ts
   
   # Configure your API endpoints and keys in environment.ts
   ```

4. **Start Development Server**
   ```bash
   # Start the development server
   npm start

   # Or use Angular CLI directly
   ng serve --open
   ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:4200`
   - The application will automatically reload when you make changes

### Development Setup

For a complete development setup:

```bash
# Install additional development tools
npm install -g @angular/cli @angular-devkit/build-angular

# Install recommended VS Code extensions
code --install-extension angular.ng-template
code --install-extension bradlc.vscode-tailwindcss

# Run development server with specific options
ng serve --host 0.0.0.0 --port 4200 --live-reload
```

## 📁 Project Structure

```
angular-flowbite/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/           # Reusable UI components
│   │   │   ├── 📁 navbar/           # Navigation component
│   │   │   ├── 📁 footer/           # Footer component
│   │   │   └── 📁 product/          # Product display component
│   │   ├── 📁 pages/                # Page components
│   │   │   ├── 📁 home/             # Home page
│   │   │   ├── 📁 products/         # Products listing
│   │   │   ├── 📁 product-details/  # Product details
│   │   │   ├── 📁 categories/       # Category pages
│   │   │   ├── 📁 about/            # About page
│   │   │   └── 📁 not-found/        # 404 page
│   │   ├── 📁 auth/                 # Authentication module
│   │   │   ├── 📁 login/            # Login component
│   │   │   ├── 📁 signup/           # Registration component
│   │   │   └── 📁 guards/           # Route guards
│   │   ├── 📁 services/             # Business logic services
│   │   │   ├── 📄 api.service.ts    # API communication
│   │   │   ├── 📄 auth.service.ts   # Authentication logic
│   │   │   └── 📄 product.service.ts # Product operations
│   │   ├── 📁 interceptors/         # HTTP interceptors
│   │   ├── 📁 pipes/                # Custom pipes
│   │   ├── 📁 interfaces/           # TypeScript interfaces
│   │   │   ├── 📄 product.ts        # Product interface
│   │   │   ├── 📄 user.ts           # User interface
│   │   │   └── 📄 category.ts       # Category interface
│   │   ├── 📁 utils/                # Utility functions
│   │   ├── 📄 app.component.*       # Root component
│   │   ├── 📄 app.routes.ts         # Application routing
│   │   └── 📄 app.config.ts         # App configuration
│   ├── 📁 environments/             # Environment configurations
│   ├── 📁 assets/                   # Static assets
│   │   ├── 📁 images/               # Image assets
│   │   ├── 📁 icons/                # Icon assets
│   │   └── 📁 styles/               # Additional styles
│   ├── 📄 index.html                # Main HTML template
│   ├── 📄 main.ts                   # Application bootstrap
│   ├── 📄 main.server.ts            # SSR bootstrap
│   ├── 📄 server.ts                 # Express server
│   └── 📄 styles.css                # Global styles
├── 📁 public/                       # Public assets
├── 📁 screenshots/                  # Application screenshots
├── 📁 docs/                         # Documentation files
├── 📄 angular.json                  # Angular CLI configuration
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 .editorconfig                 # Editor configuration
└── 📄 README.md                     # This file
```

### Key Directories Explained

- **`components/`**: Reusable UI components used throughout the application
- **`pages/`**: Route-level components representing different pages
- **`auth/`**: Authentication-related components and guards
- **`services/`**: Injectable services for business logic and API communication
- **`interfaces/`**: TypeScript type definitions and interfaces
- **`interceptors/`**: HTTP interceptors for request/response manipulation
- **`utils/`**: Utility functions and helper methods

## 🛠️ Development

### Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm start` | Start development server | Development |
| `npm run build` | Build for production | Production |
| `npm run build:dev` | Build for development | Testing |
| `npm run watch` | Build in watch mode | Development |
| `npm test` | Run unit tests | Testing |
| `npm run test:watch` | Run tests in watch mode | Development |
| `npm run test:coverage` | Generate test coverage | CI/CD |
| `npm run lint` | Run ESLint | Code quality |
| `npm run format` | Format code with Prettier | Code quality |
| `npm run serve:ssr` | Serve SSR build | Production testing |

### Code Generation

Use Angular CLI to generate new components and services:

```bash
# Generate a new component
ng generate component components/my-component

# Generate a new service
ng generate service services/my-service

# Generate a new pipe
ng generate pipe pipes/my-pipe

# Generate a new guard
ng generate guard guards/my-guard

# Generate a complete feature module
ng generate module features/my-feature --routing
```

### Development Guidelines

#### Code Style
- Follow Angular Style Guide
- Use TypeScript strict mode
- Implement proper error handling
- Write meaningful commit messages
- Use semantic versioning

#### Component Structure
```typescript
// Example component structure
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, OnDestroy {
  // Public properties first
  public data$ = new BehaviorSubject<any[]>([]);
  
  // Private properties
  private destroy$ = new Subject<void>();
  
  constructor(private service: ExampleService) {}
  
  ngOnInit(): void {
    // Initialization logic
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

#### Service Pattern
```typescript
// Example service structure
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private readonly apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}
  
  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/data`).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Error handling logic
    return throwError(() => error);
  }
}
```

## ⚙️ Configuration

### Environment Configuration

#### Development Environment
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'AngularFlowbite',
  version: '1.0.0',
  features: {
    darkMode: true,
    analytics: false,
    debugging: true
  }
};
```

#### Production Environment
```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.angularflowbite.com',
  appName: 'AngularFlowbite',
  version: '1.0.0',
  features: {
    darkMode: true,
    analytics: true,
    debugging: false
  }
};
```

### Angular Configuration

#### Key Configuration Files
- **`angular.json`**: Angular CLI workspace configuration
- **`tsconfig.json`**: TypeScript compiler options
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`.eslintrc.json`**: ESLint configuration

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... color scale
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
```

## 🧪 Testing

### Unit Testing

The project uses Karma and Jasmine for unit testing:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests on specific files
ng test --include='**/*.spec.ts'
```

#### Example Test
```typescript
describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    const mockProducts = [{ id: 1, name: 'Test Product' }];
    
    service.getProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });
    
    const req = httpMock.expectOne('/api/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
```

### End-to-End Testing

```bash
# Install Cypress (if not using default Protractor)
npm install --save-dev cypress

# Open Cypress Test Runner
npx cypress open

# Run E2E tests headlessly
npx cypress run
```

### Code Coverage

Coverage reports are generated in the `coverage/` directory:

```bash
# Generate and view coverage
npm run test:coverage
open coverage/lcov-report/index.html
```

## 🚀 Deployment

### Build for Production

```bash
# Standard production build
npm run build

# Build with specific configuration
ng build --configuration production

# Build with SSR
npm run build:ssr
```

### Deployment Options

#### Static Hosting (Netlify, Vercel, GitHub Pages)
```bash
# Build the app
npm run build

# Deploy the dist/ folder to your hosting provider
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/angular-flowbite /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Server-Side Rendering
```bash
# Build for SSR
npm run build:ssr

# Serve SSR build
npm run serve:ssr
```

### Performance Optimization

- **Bundle Analysis**: `npm run build -- --stats-json && npx webpack-bundle-analyzer dist/stats.json`
- **Lighthouse Audit**: Regular performance audits
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Component and route-level lazy loading

## 📚 API Documentation

### Authentication Endpoints

```typescript
// Authentication API
POST /api/auth/login      // User login
POST /api/auth/register   // User registration
POST /api/auth/refresh    // Token refresh
POST /api/auth/logout     // User logout
GET  /api/auth/profile    // Get user profile
```

### Product Endpoints

```typescript
// Product API
GET    /api/products              // Get all products
GET    /api/products/:id          // Get product by ID
GET    /api/products/category/:id // Get products by category
POST   /api/products/search       // Search products
GET    /api/categories            // Get all categories
```

### Example API Usage

```typescript
// Service method example
getProducts(params?: ProductQueryParams): Observable<Product[]> {
  const queryParams = new HttpParams({ fromObject: params });
  return this.http.get<Product[]>(`${this.apiUrl}/products`, {
    params: queryParams
  }).pipe(
    map(products => products.map(p => this.transformProduct(p))),
    catchError(this.handleError)
  );
}
```

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Development Workflow

1. **Fork the Repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/your-username/angular-flowbite.git
   cd angular-flowbite
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Follow the coding standards
   - Write tests for new features
   - Update documentation as needed

4. **Test Your Changes**
   ```bash
   npm test
   npm run lint
   npm run build
   ```

5. **Commit Your Changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/amazing-feature
   # Create pull request on GitHub
   ```

### Coding Standards

- Follow Angular Style Guide
- Use conventional commit messages
- Write comprehensive tests
- Update documentation
- Ensure accessibility compliance

### Pull Request Guidelines

- Provide a clear description of changes
- Include relevant issue numbers
- Ensure all tests pass
- Update documentation if needed
- Follow the code review process

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for complete details.

```
MIT License

Copyright (c) 2025 AngularFlowbite

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

## 🙏 Acknowledgments

- **[Angular Team](https://angular.io/)** - For the incredible framework
- **[Flowbite](https://flowbite.com/)** - For the beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[TypeScript Team](https://www.typescriptlang.org/)** - For type-safe JavaScript
- **Community Contributors** - For their valuable contributions and feedback

## 📞 Support

### Getting Help

- **📖 Documentation**: [Complete documentation](https://your-docs-url.com)
- **💬 Community**: [Discord server](https://discord.gg/your-server)
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/your-username/angular-flowbite/issues)
- **💡 Feature Requests**: [GitHub Discussions](https://github.com/your-username/angular-flowbite/discussions)

### Contact Information

- **Email**: support@angularflowbite.com
- **Twitter**: [@AngularFlowbite](https://twitter.com/angularflowbite)
- **LinkedIn**: [AngularFlowbite](https://linkedin.com/company/angularflowbite)

### FAQ

<details>
<summary>Common Questions</summary>

**Q: How do I update to the latest version?**
A: Run `npm update` to update dependencies, or check our migration guide for major version updates.

**Q: Can I use this project commercially?**
A: Yes, this project is licensed under MIT, which allows commercial use.

**Q: How do I customize the theme?**
A: Modify the `tailwind.config.js` file and update the CSS custom properties in `styles.css`.

**Q: Is this project production-ready?**
A: Yes, this project follows Angular best practices and includes comprehensive testing and security measures.

</details>

---

<div align="center">
  <p>Made with ❤️ by the AngularFlowbite Team</p>
  <p>
    <a href="https://github.com/your-username/angular-flowbite">⭐ Star us on GitHub</a> •
    <a href="https://twitter.com/angularflowbite">🐦 Follow on Twitter</a> •
    <a href="https://your-website.com">🌐 Visit our Website</a>
  </p>
  
  **Happy Coding! 🚀**
</div>
