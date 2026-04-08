# NyxCodex™ — Clinical De-Escalation Training
### NyxCollective LLC · AI-Powered Psychiatric Crisis Simulation

An interactive, AI-powered clinical training platform for psychiatric healthcare professionals. Multi-tenant, white-label ready, and deployed globally via GitHub Pages + Firebase.

## Features

✨ **AI Clinical Mentor** — Professor Vance coaches staff through real-world scenarios in real time
🧩 **Diagnosis-Specific Training** — Autism, ADHD, Schizophrenia, Bipolar, PTSD, Depression, Anxiety, BPD
🎮 **Interactive Crisis Lab** — Practice responses with AI scoring (A-F), difficulty tiers, custom scenarios
📊 **Team Leaderboard** — Real-time rankings with department filter and multi-org support
🏆 **Gamification** — XP, levels, Lab Credits, monthly org challenges, completion certificates
🔔 **Push Notifications** — VAPID-based training reminders and deadline alerts
📚 **Custom Scenario Builder** — Admins create facility-specific scenarios stored in Firebase
🌙 **Dark + Light Theme** — Default deep navy + Gold & Silver light theme with toggle
📱 **PWA / Offline Ready** — Installable, cached via Service Worker, works offline
🎓 **PDF Certificates** — Auto-generated on completion with org branding
🔐 **Firebase Auth + Multi-Tenant** — Per-org data isolation, TOTP 2FA, role-based access (owner/admin/manager)
🏥 **HR Integrations** — Outbound webhooks (Zapier/Make), xAPI/LRS, CSV export

## 🚀 Production Platform

**Live Training Platform:** [https://cmc-creator.github.io/NyxCodex/](https://cmc-creator.github.io/NyxCodex/)

Canonical repo/site URLs are maintained in `site.urls.json` and validated in CI via `npm run check:doc-urls`.

Staff can access the platform directly from any device with internet connection. The platform features:
- Secure user authentication (email/password)
- Cloud-based data persistence via Firebase
- Real-time admin dashboard with team analytics
- Mobile-first design that adapts across phones, tablets, laptops, and desktops

### For Staff
1. Visit the live platform URL above
2. Click **Sign Up** and create an account with your work email
3. Enter your Gemini API key when prompted (free at https://aistudio.google.com/)
4. Begin training immediately — progress saves to the cloud automatically

### For Administrators
1. Log in with your admin credentials
2. Press **`A`** to open the Admin Dashboard
3. Manage staff, view leaderboard, build custom scenarios, export compliance reports
4. Configure push notifications, HR webhooks, and org settings under **Settings**

## How Data is Saved

All progress is saved automatically to **Firebase Realtime Database**, scoped per org:
- ✅ Slide progress, XP, level, Lab Credits
- ✅ Scenario scores (A-F), response history
- ✅ Certificates with timestamp
- ✅ Custom scenarios created by admins
- ✅ Works across all devices — no localStorage dependency

> `trainer.html` (standalone, localStorage-only) remains in the repo as an offline fallback. Direct staff to the live URL, not to this file.

## Usage

### Slides
- **Slides 1–6**: Core de-escalation concepts (body language, grounding, verbal skills, environment)
- **Slides 7–14**: Diagnosis-specific modules (Autism, ADHD, Schizophrenia, Bipolar, PTSD, Depression, Anxiety, BPD)
- **Slides 15–20**: Advanced techniques (micro-expressions, choice architecture, trauma-informed care, restraint alternatives)
- **Slides 21–28**: Practice scenarios, Challenge Drill, Clinical Lab, Debrief Assistant
- **Slides 29–32**: Wellness, final quiz, certificate
- **Slide 10**: Quick reference checklist
- **Slide 11**: Completion summary

### Controls
- **`→` / `↓`**: Next slide
- **`←` / `↑`**: Previous slide
- **`A`**: Open Admin Dashboard
- **`?`**: Show keyboard shortcuts overlay
- Navigation buttons also available bottom-right

## Admin Dashboard

Access with keyboard shortcut `A` or find the admin link in the menu.

Features:
- 📊 View all staff progress
- 🏆 Team leaderboard
- 📥 Import/export JSON data
- 🎓 Generate certificates
- 👥 Manage trainees

## Data Privacy & Security

⚠️ **Important Security Notes:**
- Gemini API keys are session-only and never persisted to Firebase
- Each user enters their own API key — it is never stored server-side
- All Firebase traffic is HTTPS; data is scoped per org (`orgs/{orgId}/`)
- Firebase Auth + role-based rules prevent cross-org data access
- TOTP 2FA available for owner accounts

## Deployment

This platform is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

### Deployment Process
1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered on push to `main`
2. The workflow builds and deploys the static site to GitHub Pages
3. The site becomes available at: https://cmc-creator.github.io/NyxCodex/
4. Deployment typically takes 1-2 minutes

### Manual Deployment
If you need to manually deploy:
1. Go to the repository Settings → Pages
2. Ensure source is set to "GitHub Actions"
3. Trigger the workflow manually from the Actions tab

### Deployment Configuration
- **Platform**: GitHub Pages (free hosting for static sites)
- **Backend**: Firebase (authentication and database)
- **CI/CD**: GitHub Actions (automated deployment)
- **Custom Domain**: Can be configured in GitHub Pages settings

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).

## File Structure

```
NyxCodex/
├── .github/
│   ├── workflows/deploy.yml      # GitHub Actions → GitHub Pages
│   └── copilot-instructions.md   # Copilot project context
├── api/                          # Vercel serverless functions
│   ├── pax-chat.js               # Prof. Vance AI chat proxy
│   ├── push.js                   # Push notification broadcast
│   ├── tts.js                    # ElevenLabs TTS proxy
│   ├── webhook-proxy.js          # HR/Zapier outbound webhooks
│   └── hr/completion.js          # HR completion sync endpoint
├── functions/                    # Firebase Cloud Functions (optional)
├── index.html                    # Landing page (always entry point)
├── trainer_pro.html              # Production trainer (Firebase)
├── trainer.html                  # Standalone fallback (localStorage only)
├── tenant.config.js              # White-label org configuration
├── sw.js                         # Service Worker (offline + PWA)
├── manifest.json                 # PWA manifest
├── ADMIN_MANUAL.md               # Admin operations guide
├── DEPLOYMENT_GUIDE.md           # Firebase + GitHub Pages setup
├── WHITE_LABEL_GUIDE.md          # How to onboard new client orgs
├── QUICK_START.md                # Staff onboarding guide
├── START_HERE.md                 # New admin setup (7 steps)
├── OPERATIONS_CHECKLIST.md       # Weekly/monthly maintenance
├── DATA_ARCHITECTURE.md          # Firebase schema reference
└── FIREBASE_SETUP.md             # Firebase configuration reference
```

## Troubleshooting

**API Key not working?**
- Verify the key is from [Google AI Studio](https://aistudio.google.com/)
- Check remaining quota (free tier: 1,500 requests/day)
- Re-enter the key in the settings panel and try again

**Data not saving?**
- Confirm you are on the live URL (not opening `trainer.html` locally)
- Check browser console for Firebase permission errors
- Verify Firebase security rules are published

**Scenarios not loading?**
- Ensure API key is active
- Check browser console (F12) for errors
- Verify internet connection

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge - 2022+)
- Active internet connection (for AI features)
- Google Gemini API key

## Future Features

- 🔐 Authentication & multi-user accounts
- ☁️ Cloud backup of training data
- 📈 Advanced analytics & reporting
- 🎤 Voice-based scenario practice
- 🌐 Multi-language support
- 🔗 LMS integration (Canvas, Blackboard)

## Support

For issues or feature requests, create an issue in this repository.

## License

Internal use only - Destiny Springs Healthcare

---

**Version**: 2.0  
**Last Updated**: February 2026  
**Created for**: Destiny Springs Healthcare Psychiatric Acute Care
