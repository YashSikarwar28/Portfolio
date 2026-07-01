# Yash Sikarwar — Personal Portfolio

A modern, responsive developer portfolio built with Next.js 15, Tailwind CSS v4, and TypeScript. Features dark/light mode, GitHub contribution graph, project showcase, and contact form.

🌐 **Live Site:** [yash-sikarwar.vercel.app](https://yash-sikarwar.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Aceternity UI
- **Contact Form:** EmailJS
- **GitHub Graph:** react-github-calendar
- **Theme:** next-themes (Dark / Light mode)
- **Deployment:** Vercel

---

## Features

- ⚡ Fast and responsive design
- 🌙 Dark and Light mode toggle
- 📊 GitHub contribution graph
- 💼 Projects showcase with live links
- 📬 Working contact form via EmailJS
- 📱 Mobile-friendly with bottom navigation
- 🔍 SEO optimized with metadata, sitemap, and robots.txt

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or above)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/YashSikarwar28/your-repo-name.git
cd your-repo-name
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env.local` file in the root of the project and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> You can get these from [emailjs.com](https://www.emailjs.com) after creating a free account.

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```text
my-portfolio/
├── app/
│   ├── components/        # Reusable components (Navbar, Footer, UI)
│   ├── projects/          # Projects page
│   ├── experience/        # Experience page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── tools/             # Tools page
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # Robots.txt
├── lib/                   # Utility functions and project data
├── public/
│   ├── dummyStyles.ts     # Centralized style classes
│   └── ...                # Images, favicon, og-image, etc.
└── README.md
```

## Customization

If you want to use this portfolio as a template for yourself:

1. Update personal info in `app/page.tsx`
2. Update project data in `lib/project-data.ts`
3. Replace images in the `/public` folder
4. Update metadata in `app/layout.tsx` with your name and links
5. Update social links in `app/components/sidebar.tsx`
6. Update sitemap URLs in `app/sitemap.ts`

---

## Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your environment variables in Vercel project settings
4. Click Deploy

---

## Connect with Me

- 🌐 Portfolio: [yash-sikarwar.vercel.app](https://yash-sikarwar.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/yash-sikarwar-sist](https://www.linkedin.com/in/yash-sikarwar-sist)
- 🐙 GitHub: [github.com/YashSikarwar28](https://github.com/YashSikarwar28)
- 💻 LeetCode: [leetcode.com/u/Yash-Sikarwar](https://leetcode.com/u/Yash-Sikarwar/)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this helpful, consider giving it a star on GitHub!
