# Week 4 Task — Day 1 (Frontend)

React Hook Form Fundamentals: **User Registration Form**

## Covers
- Installing and configuring React Hook Form
- `register`, `handleSubmit`, `watch`, `formState`
- Uncontrolled inputs
- Form submission + validation
- A live "field health" console showing `formState` in real time

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Screenshots

_Add screenshots here after running the app locally, e.g.:_

```md
![Day 1 - User Registration Form](./screenshots/day1-registration-form.png)
```

---

## GitHub par push kaise karein (Roman Urdu)

1. GitHub par jaake ek naya **empty repository** banayein (README/gitignore add na karein):
   `https://github.com/new` → naam dein, jaise: `week4-day1-registration-form`
2. Is project folder ke andar terminal khol kar yeh commands chalayein:

```bash
git init
git add .
git commit -m "Day 1: React Hook Form - User Registration Form"
git branch -M main
git remote add origin https://github.com/<aapka-username>/<repo-name>.git
git push -u origin main
```

3. `<aapka-username>` aur `<repo-name>` apne GitHub username aur repo naam se replace karein.
4. Pehli baar push karte waqt GitHub login/token maangega — browser mein authorize kar dein.

Baad mein jab bhi naya change karein:
```bash
git add .
git commit -m "your message"
git push
```

## Vercel par live deploy kaise karein (Roman Urdu)

**Website se:**
1. `https://vercel.com` par GitHub account se sign in karein.
2. **Add New… → Project** → apna repo select karein → **Import**.
3. Vercel khud Vite project detect kar lega (Build: `vite build`, Output: `dist`) — kuch change nahi karna.
4. **Deploy** dabayein. 1-2 minute mein live URL mil jayega.
5. Har naye GitHub push par Vercel apne aap redeploy kar dega.

**Terminal se:**
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Final Submission checklist (is deliverable ke liye)

- [ ] GitHub Repository Link
- [ ] Live URL (Vercel)
- [ ] Working User Registration Form
- [ ] React Hook Form Integration ✅ (already done)
- [ ] Responsive UI ✅ (already done)
- [ ] README with Screenshots — screenshots khud add karein
