# Abdul Sami Fazilyar - Portfolio Website

A modern, professional, and stylish personal portfolio website built with React.js, showcasing skills, projects, and experience as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with glassmorphism and neumorphism elements
- **Responsive**: Fully responsive design for all screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags and Open Graph tags for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Build Tool**: Vite
- **Deployment Ready**: Optimized for Vercel, Netlify, or GitHub Pages

## 📱 Sections

1. **Hero Section**: Introduction with animated elements and CTA buttons
2. **About**: Professional summary and personal details
3. **Skills**: Categorized technical skills with proficiency indicators
4. **Projects**: Showcase of featured projects with descriptions
5. **Experience**: Work history and achievements timeline
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and social media links
8. **Footer**: Additional links and newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyPortfilio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Custom primary colors
  },
  accent: {
    // Custom accent colors
  },
  electric: '#00D4FF',
  navy: '#0A192F',
}
```

### Content Updates

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Skills and proficiency levels
- `src/components/Projects.jsx` - Project details and descriptions
- `src/components/Experience.jsx` - Work experience and achievements
- `src/components/Education.jsx` - Education and certifications
- `src/components/Contact.jsx` - Contact information and form

### Styling

Custom styles can be added in `src/index.css` using Tailwind's `@layer` directive:

```css
@layer components {
  .custom-class {
    @apply /* your styles */;
  }
}
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Work experience
│   ├── Education.jsx   # Education section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── lib/                # Utility functions
│   └── utils.js        # Class merging utilities
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind
```

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Build and deploy: `npm run build && npm run deploy`

## 📧 Contact

- **Email**: abdulsami.fazilyar@example.com
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com)
- **GitHub**: [GitHub Profile](https://github.com)
- **Upwork**: [Upwork Profile](https://upwork.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React.js and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion
- Design inspiration from modern tech companies

---

**Abdul Sami Fazilyar** - Full-Stack Developer  
*Crafting scalable, elegant, and high-performing web solutions*
