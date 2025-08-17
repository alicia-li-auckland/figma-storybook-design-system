```markdown
# Figma Storybook Design System

A design system that connects Figma components with Storybook for seamless design-to-development workflow.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Figma account (for design integration)
- Chromatic account (optional, for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/figma-storybook-design-system.git
cd figma-storybook-design-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Add your tokens to `.env`:
```
FIGMA_ACCESS_TOKEN=your_figma_token_here
CHROMATIC_PROJECT_TOKEN=your_chromatic_token_here
```

5. Run Storybook locally:
```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook in your browser.

## 📚 Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build static Storybook for production
- `npm run chromatic` - Deploy to Chromatic for visual testing
- `npm run figma:auth` - Authenticate with Figma
- `npm run figma:parse` - Parse Code Connect files
- `npm run figma:publish` - Publish Code Connect to Figma

## 🎨 Components

### Button
A versatile button component with multiple variants and sizes.

**Variants:**
- Primary - Main call-to-action style
- Secondary - Alternative style for less emphasis

**Sizes:**
- Small - Compact size for tight spaces
- Medium - Default size for most use cases
- Large - Prominent size for important actions

## 🔧 Project Structure

```
figma-storybook-design-system/
├── .storybook/           # Storybook configuration
├── src/
│   └── components/
│       └── Button/
│           ├── Button.tsx          # React component
│           ├── Button.stories.tsx  # Storybook stories
│           └── Button.figma.tsx    # Figma Code Connect config
├── .env.example          # Environment variables template
├── figma.config.json     # Figma configuration
└── package.json          # Project dependencies
```

## 🔗 Integrations

### Figma Integration
This project supports Figma Code Connect for syncing design components with code.

1. Get a Figma access token from [Figma Settings](https://www.figma.com/settings)
2. Add token to `.env` file
3. Link components using `npm run figma:publish`

### Chromatic Integration
Deploy and test your Storybook with Chromatic:

1. Get project token from [Chromatic](https://www.chromatic.com)
2. Add token to `.env` file
3. Deploy using `npm run chromatic`

## 🛠 Technologies

- **React** - Component library
- **TypeScript** - Type safety
- **Storybook** - Component documentation and testing
- **Vite** - Build tool and dev server
- **Chromatic** - Visual testing and deployment
- **Figma Code Connect** - Design-to-code synchronization

## 📝 Development Workflow

1. Create/modify components in `src/components/`
2. Write stories in `*.stories.tsx` files
3. Add Figma integration in `*.figma.tsx` files
4. Test locally with `npm run storybook`
5. Deploy to Chromatic for review
6. Sync with Figma using Code Connect

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For issues and questions:
- Create an issue in GitHub
- Contact the design system team
- Check Storybook documentation at [storybook.js.org](https://storybook.js.org)

## 🔮 Future Enhancements

- [ ] Add more component variants
- [ ] Implement dark mode support
- [ ] Add accessibility testing
- [ ] Create design tokens
- [ ] Add more components (Input, Card, Modal, etc.)
- [ ] Set up CI/CD pipeline
- [ ] Add visual regression testing
- [ ] Create component usage guidelines

---

Built with ❤️ by the Design System Team
```
