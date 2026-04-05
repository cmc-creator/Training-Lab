# NyxCodex™ Admin Manual
### NyxCollective LLC — Clinical De-escalation Training Platform

## 🎯 Overview
NyxCodex™ is a fully operational, AI-powered clinical simulation platform for psychiatric healthcare professionals. Current feature set:
- ✅ Interactive AI-powered training modules (32 slides)
- ✅ 8 diagnosis-specific guides (Autism, ADHD, Schizophrenia, Bipolar, PTSD, Depression, Anxiety, BPD)
- ✅ Real-time scoring & feedback with Prof. Vance AI coach
- ✅ Cloud data persistence via Firebase Realtime Database
- ✅ Firebase Authentication (email/password accounts)
- ✅ Multi-tenant org support (`orgs/{orgId}/` scoped data)
- ✅ Team leaderboard tracking
- ✅ PDF certificate generation
- ✅ Admin dashboard with full data management
- ✅ Dark mode (default) + Gold & Silver light theme
- ✅ PWA-ready (installable on mobile devices)
- ✅ Full Git version control via GitHub

---

## 📍 Repository & Live URL
**GitHub**: https://github.com/cmc-creator/NyxCodex  
**Live Platform**: https://cmc-creator.github.io/NyxCodex/  
**Entry Point**: Always direct users to `index.html` (root URL) — never link directly to `trainer_pro.html`

---

## 🚀 Accessing the Platform

### **Primary Access (GitHub Pages — Live)**
- URL: **https://cmc-creator.github.io/NyxCodex/**
- No installation required — works in any modern browser
- Staff create accounts via Firebase Authentication on first visit
- All progress is saved to the cloud automatically

### **Staff Onboarding Steps**
1. Send staff the URL above
2. They click **Sign Up** and create an account with their work email
3. Complete the 32-slide training module (45–60 min)
4. Scores and XP are saved automatically to Firebase
5. Admin can view all staff data in the Admin Dashboard

### **Mobile / Tablet Access**
- The platform is fully mobile-responsive
- Staff can install it as a PWA: in Chrome, tap **Add to Home Screen**
- Minimum touch target size: 44×44px throughout

### **Offline / Standalone (Fallback Only)**
- `trainer.html` is a self-contained standalone version with localStorage only
- Use only when Firebase connectivity is unavailable
- **No cloud sync** — data does not appear in Admin Dashboard

---

## 📊 Admin Dashboard Operations

### **Accessing Admin Panel**
- **Keyboard shortcut**: Press `A` while on the training platform
- **Authentication**: Admin PIN required (set in Firebase console or contact NyxCollective LLC)
- The admin panel opens as a modal overlay — no separate page needed

### **Leaderboard Tab** 🏆
**Daily use:**
- View current staff rankings by XP
- Identify high performers and those needing support
- Export screenshot for weekly reports

**Metrics shown:**
- 🥇 Top 3 staff highlighted with medals
- XP points (experience earned)
- Scenarios completed
- Average response score (A-F)

### **Data Manager Tab** 💾

**Cloud Backup (Automatic):**
- All data is stored in Firebase Realtime Database — no manual backup needed for cloud users
- Firebase provides 99.95% uptime SLA and automatic redundancy

**Manual Export Backup:**
1. Open Admin Dashboard (`A` key)
2. Go to **Data Manager** tab
3. Click **"Export as JSON"**
4. Save to: `\\facility\backups\training-lab\YYYY-MM-DD-backup.json`
5. Recommended: export monthly for compliance archiving

**Merging Multiple Orgs/Sites:**
- Each org is scoped under `orgs/{orgId}/` in Firebase
- Contact NyxCollective LLC to configure multi-org admin access

**Data Recovery:**
1. Staff accounts are tied to Firebase Auth — data persists across devices and browsers
2. If a staff member's data is missing, check Firebase Console under the correct `orgId`
3. Restore from JSON export via **"Import Team Data"** in the Data Manager tab

### **Settings Tab** ⚙️
**Organization Setup:**
- Facility Name (appears on certificates and dashboards)
- Trainer Name (appears on certificates)
- Settings persist in Firebase under the org's configuration node

**Statistics:**
- Total Scenarios Completed (facility-wide)
- Total Active Trainees
- Average XP per trainee (facility-wide)

---

## 🎓 Staff Training Workflow

### **Week 1: Initial Training**
1. Send staff the platform URL: https://cmc-creator.github.io/NyxCodex/
2. Send them the `QUICK_START.md` guide
3. They create an account and enter their Gemini API key (free at https://aistudio.google.com/)
4. Complete 32 slides (45–60 min)

### **Week 2-3: Individual Practice**
- Staff complete 5+ crisis scenarios each
- Each completion records score + XP
- Data automatically saves
- Trainer tips guide improvement

### **Week 4: Performance Review**
1. Admin opens Admin Dashboard
2. Reviews leaderboard performance
3. Identifies who needs refresher training
4. Data manager exports trend report

### **Month-End: Compliance Documentation**
1. Admin exports all staff training records
2. Stores in compliance folder with dates
3. Staff can download individual certificates
4. Archive for accreditation reviews

---

## 📈 Recommended KPIs to Track

| Metric | Target | Frequency | Use |
|--------|--------|-----------|-----|
| Staff Completion Rate | 100% | Monthly | Identify non-compliance |
| Avg Response Score | B or higher | Weekly | Quality of training |
| Scenarios Per Trainee | 10+ | Monthly | Engagement level |
| Total Facility XP | 5000+ | Monthly | Training intensity |

---

## 🔐 Security & Compliance

### **Data Backup Protocol**
- **When**: Every Friday
- **How**: Admin Dashboard → Export as JSON
- **Where**: Encrypted network folder
- **Retention**: 1 year minimum (per HIPAA)

### **Access Control**
Currently: **No authentication** (suitable for internal systems)

**To add staff authentication later:**
1. Contact developer for login module
2. Would require backend database
3. Estimated time: 2-3 weeks
4. Cost: Negotiable

### **Data Privacy**
✅ NO patient data (PHI) collected — training scenarios only  
✅ Staff names and email addresses are the only PII stored  
✅ No connection to patient record systems  
✅ Gemini API key is session-only — never persisted to Firebase  
✅ Firebase data is scoped per org — cross-org data access impossible  
✅ HTTPS enforced at all times via GitHub Pages + Firebase  
✅ Compliant with training documentation requirements

---

## 🛠️ Troubleshooting & Maintenance

### **Staff Reports: "Data disappeared"**
**Cause**: Staff using standalone `trainer.html` instead of the Firebase-connected `trainer_pro.html` via the live URL  
**Solution**:
1. Direct staff to https://cmc-creator.github.io/NyxCodex/ (always use the landing page)
2. They log in with their Firebase account — data restores immediately
3. If data is truly missing, restore from JSON export in Admin Dashboard

### **API Key Issues**
**Symptom**: "API Error" or scenarios won't load  
**Solution**:
1. Staff gets a new key at https://aistudio.google.com/
2. Verify they have API quota remaining (free tier: 1,500 requests/day)
3. Re-enter the key in the platform settings panel
4. Switch to a different browser if the problem persists

### **Leaderboard Not Updating**
**Cause**: Staff account not signed in, or using standalone `trainer.html`  
**Solution**:
1. Ensure staff are signed into their Firebase account
2. All data syncs automatically — no manual import needed for Firebase users
3. Standalone `trainer.html` users will never appear on the leaderboard

### **Export File Won't Import**
**Cause**: File corrupted or wrong format  
**Solution**:
1. Verify file is `.json` not `.txt`
2. Open in text editor to check format (should start with `{`)
3. Try exporting again from original computer
4. Contact developer if still broken

### **Certificate PDF Fails to Download**
**Cause**: Pop-up blocker or browser issue  
**Solution**:
1. Disable pop-up blockers for this site
2. Try different browser
3. Check Downloads folder for hidden files
4. Try again after page refresh

---

## 📞 Support Workflow

### **For Trainer/Admin Questions**
1. Check README.md
2. Check DATA_ARCHITECTURE.md
3. Check GitHub issues page

### **For Technical Issues**
1. Clear browser cache
2. Try different browser
3. Restart computer
4. Update browser to latest version
5. If still broken: Create GitHub issue with screenshots

### **For Enhancement Requests**
- Feature tracking: GitHub Issues
- Prioritization: Most requested implemented first
- Roadmap: See GitHub Projects board

---

## 📋 Monthly Operations Checklist

```
□ Week 1:
  □ Review leaderboard for completion rates
  □ Identify staff who haven't started
  □ Send reminder emails

□ Week 2:
  □ Spot-check 2-3 staff responses for quality
  □ Note any API key issues

□ Week 3:
  □ Export backup to secure storage
  □ Document any training gaps

□ Week 4:
  □ Final audit of all progress
  □ Create compliance report
  □ Plan next month's focus areas
  □ Update admin with metrics
```

---

## 🌙 Theme & UI Controls

### **Dark / Light Theme Toggle**
- Default theme: **Dark mode** (deep navy, high contrast)
- **Gold & Silver light theme**: Click the ☀/🌙 toggle button in the top-right corner of the trainer
- Theme preference is preserved per session
- Light theme is optimized for bright clinical environments

### **Keyboard Shortcuts**
Usable any time during training:

| Key | Action |
|-----|--------|
| `→` or `↓` | Next slide |
| `←` or `↑` | Previous slide |
| `A` | Open Admin Dashboard |
| `?` | Show keyboard shortcuts overlay |

---

## 💡 Pro Tips

1. **Stagger training** by unit (North Week 1, South Week 2, etc.) to manage Gemini API quota

2. **Use the debrief feature** — Have staff submit real incidents for AI coaching with Prof. Vance

3. **Celebrate wins** — Screenshot the leaderboard for team morale (lives in Admin Dashboard)

4. **Refresher schedule** — Require quarterly re-training using the Practice Lab and Challenge Drill modes

5. **Integration idea** — Export training records monthly and link completion data to staff performance reviews

6. **Multi-site** — Each org gets its own Firebase `orgId`; contact NyxCollective LLC to set up additional tenants

7. **Mobile training** — Staff can install NyxCodex as a PWA on their phones or tablets for break-time practice

8. **Light theme for presentations** — Switch to Gold & Silver theme when projecting on a screen in a bright room

---

## 🔄 Updates & Version Control

The platform auto-deploys via GitHub Actions on every push to `main`. No manual update step required for staff — they always get the latest version at the live URL.

**To pull the latest code locally:**
```powershell
cd "C:\Users\conni\OneDrive\Documents\GitHub\NyxCodex"
git pull origin main
```

**To view commit history:**
Visit: https://github.com/cmc-creator/NyxCodex/commits/main

**Deployment time**: 1–2 minutes after push to `main`

---

## 📞 Contact & Support

- **GitHub Issues**: https://github.com/cmc-creator/NyxCodex/issues
- **Email Support**: (add your facility contact here)
- **Training**: See QUICK_START.md for staff

---

**Platform**: NyxCodex™  
**Publisher**: NyxCollective LLC  
**System Version**: 3.0  
**Last Updated**: April 4, 2026  
**Status**: ✅ Production Ready — Live on GitHub Pages
