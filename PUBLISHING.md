# Publishing Storybook

The repository includes `.github/workflows/deploy-storybook.yml`. A push to `main` validates and builds Storybook, uploads `storybook-static`, and deploys it through GitHub Pages.

Expected URL: `https://yakosasam797.github.io/designsystem--codex/`

Before the first deployment, a repository administrator must open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After that, the workflow also supports a manual run from the Actions tab.
