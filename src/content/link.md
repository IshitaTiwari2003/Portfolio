---
# ============================================
# LINK.md - Centralized Link Management
# ============================================
# Update all your social links, repos, and profiles here.
# This file is the single source of truth for your online presence.
# ============================================

# Social Profiles
social:
  email: "ishita@example.com"
  github: "https://github.com/ishita"
  linkedin: "https://linkedin.com/in/ishita"
  medium: ""
  twitter: ""
  website: ""
  youtube: ""
  discord: ""

# GitHub Repositories to Showcase
# Add your best repos here - they'll appear in the Projects section
repos:
  - name: "diabetic-retinopathy"
    url: "https://github.com/ishita/diabetic-retinopathy"
    description: "Deep learning model for detecting diabetic retinopathy from retinal images"
    stars: 0
    forks: 0

  - name: "clinical-assistant"
    url: "https://github.com/ishita/clinical-assistant"
    description: "AI-powered clinical assistant with NLP capabilities"
    stars: 0
    forks: 0

  - name: "portfolio"
    url: "https://github.com/ishita/portfolio"
    description: "Personal portfolio built with Next.js and Tailwind CSS"
    stars: 0
    forks: 0

# Blog/Article Links
# Add links to your external articles (Medium, LinkedIn, Dev.to, etc.)
articles:
  - title: "Building in Public: What I Learned"
    url: "https://medium.com/@ishita/building-in-public"
    platform: "medium"
    date: "2024-11-12"

  - title: "Getting Started with TensorFlow"
    url: "https://linkedin.com/pulse/getting-started-tensorflow"
    platform: "linkedin"
    date: "2024-10-28"
---

## How to Update Links

### Social Profiles
Just update the URLs above. Leave empty string `""` for platforms you don't use.

### Adding a New GitHub Repo
```yaml
repos:
  - name: "repo-name"
    url: "https://github.com/ishita/repo-name"
    description: "What it does"
    stars: 0
    forks: 0
```

### Adding a New Article
```yaml
articles:
  - title: "Article Title"
    url: "https://medium.com/@ishita/article-slug"
    platform: "medium"  # medium | linkedin | devto | hashnode | other
    date: "2024-12-01"
```

### Supported Platforms
- `medium` - Medium.com
- `linkedin` - LinkedIn Articles
- `devto` - Dev.to
- `hashnode` - Hashnode
- `other` - Any other platform
