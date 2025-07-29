# Social Support Application with AI Assistance

A modern, accessible web application for citizens to apply for government financial assistance, featuring an AI-powered writing assistant to help users articulate their circumstances effectively.

## 📋 Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- OpenAI API key for AI assistance features

## 🚀 Features

- **Multi-Step Form Wizard**: Intuitive 3-step application process with progress tracking
- **AI Writing Assistant**: OpenAI GPT-3.5 integration to help users write detailed descriptions
- **Multi-Language Support**: Full support for English and Arabic (RTL)
- **Theme Support**: Toggle between light and dark modes for improved accessibility
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Progress Persistence**: Auto-saves form data locally using Redux Persist
- **Modern UI/UX**: Clean, professional design using Material-UI components
- **Form Validation**: Comprehensive client-side validation with helpful error messages
- **Error Handling**: Graceful error handling for network issues and API failures

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dge-social-support
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will open automatically at `http://localhost:5173`

## 🏗️ Project Structure

```
dge-social-support/
├── public/
│   └── logo.svg
├── src
├── App.jsx
├── components
│   ├── ControlSelect
│   │   └── index.jsx
│   ├── ControlTextField
│   │   └── index.jsx
│   ├── CustomThemeProvider
│   │   └── index.jsx
│   ├── GlobalError
│   │   └── index.jsx
│   ├── LanguageProvider
│   │   └── index.jsx
│   ├── Layout
│   │   ├── Footer
│   │   │   └── index.jsx
│   │   └── Header
│   │       └── index.jsx
│   ├── Loading
│   │   └── index.jsx
│   ├── Modal
│   │   └── index.jsx
│   └── Stepper
│       └── index.jsx
├── config
│   ├── axios
│   │   └── index.js
│   ├── i18next
│   │   ├── index.js
│   │   └── locales
│   │       ├── ar.json
│   │       └── en.json
│   └── routes
│       └── index.js
├── constants
│   ├── GlobalConstant
│   │   └── index.js
│   ├── Language
│   │   └── index.js
│   ├── Storage
│   │   └── index.js
│   ├── index.js
│   └── routes
│       └── index.js
├── context
│   ├── LanguageContext.js
│   └── ThemeContext.js
├── hooks
│   ├── useLanguage.js
│   ├── useRequest.js
│   └── useThemeMode.js
├── main.jsx
├── pages
│   ├── ApplicationForm
│   │   ├── Constants
│   │   │   ├── formConstant.js
│   │   │   └── validation.js
│   │   ├── FamilyFinancialInfo
│   │   │   └── index.jsx
│   │   ├── PersonalInfo
│   │   │   └── index.jsx
│   │   ├── SituationDesc
│   │   │   └── index.jsx
│   │   └── index.jsx
│   ├── Home
│   │   └── index.jsx
│   └── Success
│       └── index.jsx
├── services
│   ├── formService.js
│   └── localStorageService.js
└── utils
    ├── index.js
    └── theme
        └── index.js
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### OpenAI API Key Setup

1. Sign up for an OpenAI account at [platform.openai.com](https://platform.openai.com)
2. Navigate to API keys section
3. Create a new API key
4. Add the key to your `.env` file as shown in the installation steps

### Environment Variables

| Variable              | Description                           | Required |
| --------------------- | ------------------------------------- | -------- |
| `VITE_OPENAI_API_KEY` | Your OpenAI API key for AI assistance | Yes      |

## 📱 Form Wizard Steps

### Step 1: Personal Information

- Full Name (required)
- National ID (required)
- Date of Birth (required)
- Gender (required)
- Address (required)
- City, State, Country (required)
- Phone Number (required)
- Email Address (required)

### Step 2: Family & Financial Information

- Marital Status (required)
- Number of Dependents (required)
- Employment Status (required)
- Monthly Income in AED (required)
- Housing Status (required)

### Step 3: Situation Descriptions

- Current Financial Situation (required)
- Employment Circumstances (required)
- Reason for Applying (required)

## 🤖 AI Assistant Features

The AI Writing Assistant helps users articulate their circumstances more effectively:

1. **Activation**: Click "Help Me Write" button next to any text field in Step 3
2. **Processing**: AI generates contextual suggestions based on the field type
3. **Review**: User sees suggestion in a modal dialog
4. **Actions**:
   - **Accept**: Use the AI suggestion as-is
   - **Edit**: Modify the suggestion before accepting
   - **Discard**: Close without using the suggestion

### AI Safety Features

- Rate limiting to prevent abuse
- Error handling for API failures
- Timeout protection (15 seconds)
- User-friendly error messages

## 🌐 Internationalization

The application supports:

- **English** (LTR)
- **Arabic** (RTL)

Language switching is available in the header and persists across sessions.

## 💾 Data Persistence

Form data is automatically saved to browser's localStorage using Redux Persist:

- Progress saved after each step
- Data retained on page refresh
- Cleared after successful submission
- Manual reset available via header button

## 🧪 Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint                |
| `npm run format`  | Format code with Prettier |

## 📄 License

This project is created for assessment purposes.
