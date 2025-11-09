# Deployment Guide

This guide covers multiple deployment options for the FinHelp Financial Chatbot.

## 📋 Table of Contents
- [GitHub Pages (Free & Easy)](#github-pages)
- [Netlify (Recommended)](#netlify)
- [Vercel](#vercel)
- [Traditional Web Hosting](#traditional-hosting)
- [Local Testing](#local-testing)

---

## 🌐 GitHub Pages

**Best for**: Free hosting, simple projects, GitHub integration

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/finhelp-chatbot.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Source: Deploy from branch
   - Branch: **main**, Folder: **/ (root)**
   - Click **Save**

3. **Access Your Site**
   - URL: `https://yourusername.github.io/finhelp-chatbot/`
   - Wait 2-3 minutes for deployment

### Custom Domain (Optional)
1. Add `CNAME` file with your domain
2. Configure DNS records with your domain provider
3. Update in Settings → Pages → Custom domain

---

## ⚡ Netlify

**Best for**: CI/CD, preview deployments, easy custom domains

### Method 1: Drag & Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/Login
3. Drag your project folder to the deployment area
4. Done! Your site is live

### Method 2: Git Integration (Recommended)

1. **Push to GitHub** (see GitHub Pages section)

2. **Connect to Netlify**
   - Login to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/` or `.`
   - Click "Deploy site"

3. **Configure**
   - Site settings → Change site name
   - Domain settings → Add custom domain (optional)

### Environment Variables
For production API key management:
- Site settings → Build & deploy → Environment
- Add: `GEMINI_API_KEY=your_key_here`

---

## 🔺 Vercel

**Best for**: Next.js projects, serverless functions

### Deploy

1. **Push to GitHub** (see above)

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **Other**
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Settings → Domains
   - Add your domain

---

## 🖥️ Traditional Web Hosting

**Best for**: Existing hosting, cPanel users

### Requirements:
- Web hosting account with FTP/SFTP access
- Or cPanel file manager access

### Steps:

1. **Prepare Files**
   - Zip your project folder
   - Or use FTP client (FileZilla, Cyberduck)

2. **Upload Files**
   - Connect via FTP to your hosting
   - Navigate to `public_html` or `www` directory
   - Upload all project files

3. **Access**
   - `https://yourdomain.com/`
   - Or `https://yourdomain.com/finhelp-chatbot/` if in subdirectory

### Apache Configuration (Optional)
Create `.htaccess` file:
```apache
# Enable HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Custom error pages
ErrorDocument 404 /404.html
```

---

## 💻 Local Testing

### Simple HTTP Server

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Access: `http://localhost:8000`

**Option 2: Node.js**
```bash
npx http-server -p 8000
```
Access: `http://localhost:8000`

**Option 3: PHP**
```bash
php -S localhost:8000
```

**Option 4: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html`
- Click "Open with Live Server"

---

## 🔐 Security Best Practices

### Production Checklist:

1. **API Key Security**
   - ❌ Don't hardcode API keys in client-side code
   - ✅ Use environment variables
   - ✅ Create a backend proxy endpoint
   - ✅ Or restrict API key to your domain in Google Cloud Console

2. **Domain Restrictions**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - API & Services → Credentials
   - Edit your API key
   - Set "Application restrictions" to HTTP referrers
   - Add: `https://yourdomain.com/*`

3. **HTTPS**
   - Always use HTTPS in production
   - Most modern hosts provide free SSL (Let's Encrypt)
   - GitHub Pages, Netlify, Vercel include HTTPS automatically

4. **Content Security Policy** (Optional)
   Add to HTML `<head>`:
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; 
                  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
                  font-src https://fonts.gstatic.com;">
   ```

---

## 🚀 Performance Optimization

### For Production:

1. **Minify Files**
   ```bash
   # Install terser for JS minification
   npm install -g terser
   
   # Minify JS files
   terser js/app.js -o js/app.min.js
   ```

2. **Optimize Images** (if you add any)
   - Use WebP format
   - Compress with tools like TinyPNG

3. **Enable Caching**
   - Add cache headers in hosting config
   - Use CDN for static assets

4. **Lazy Load**
   - Load non-critical JS after page load
   - Defer non-essential resources

---

## 📊 Monitoring & Analytics

### Add Google Analytics:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking:
- [Sentry](https://sentry.io/) for error monitoring
- [LogRocket](https://logrocket.com/) for session replay

---

## 🔄 Continuous Deployment

### Netlify/Vercel Auto-Deploy:
Once connected to Git:
- Every push to `main` triggers automatic deployment
- Pull request previews available
- Rollback to previous versions easily

---

## 🌍 CDN Configuration

For better global performance:

### Cloudflare (Free):
1. Sign up at [Cloudflare](https://www.cloudflare.com/)
2. Add your site
3. Update nameservers at your domain registrar
4. Enable caching and minification

---

## ✅ Post-Deployment Checklist

- [ ] Test all features (chat, calculators, voice)
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Verify all 3 languages work
- [ ] Check API calls are working
- [ ] Verify session persistence
- [ ] Test calculator drag functionality
- [ ] Check HTTPS is enabled
- [ ] Monitor error logs
- [ ] Set up analytics
- [ ] Test voice features (HTTPS required)

---

## 🆘 Troubleshooting

### API Not Working
- Check API key is valid
- Verify internet connection
- Check browser console for errors
- Ensure CORS is properly configured

### Voice Not Working
- Requires HTTPS (except localhost)
- Check microphone permissions
- Try different browser (Chrome/Edge recommended)

### CSS/JS Not Loading
- Verify file paths are correct
- Check for 404 errors in Network tab
- Clear browser cache

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Review this deployment guide
3. Check GitHub Issues
4. Contact maintainers

---

**Happy Deploying! 🚀**
