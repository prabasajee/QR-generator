# 🚀 Quick Publishing Guide

## ⚡ Fast Setup (2 minutes)

### 1. Add NPM Token to GitHub
1. Go to: `https://github.com/prabasajee/QR-generator/settings/secrets/actions`
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Your NPM access token (starts with `npm_...`)

### 2. Quick Publish Methods

#### Method A: GitHub Release (Automatic)
```bash
# Create and push a version tag
git tag v1.0.1
git push origin v1.0.1

# Or create release on GitHub web interface
# This triggers automatic publishing to both registries
```

#### Method B: Manual Command Line
```bash
# Publish to GitHub Packages
npm run publish:github

# Publish to NPM (public)
npm run publish:npm
```

#### Method C: Manual Workflow
1. Go to: `https://github.com/prabasajee/QR-generator/actions/workflows/quick-release.yml`
2. Click "Run workflow"
3. Wait ~2 minutes ⚡

## 🎯 What Changed to Make it Faster

### Before (Slow - 10-15 minutes):
- ❌ Multiple separate jobs (validate → test → build → publish)
- ❌ Matrix testing on 3 Node.js versions
- ❌ Complex environment setups
- ❌ Extensive security audits

### After (Fast - 2-3 minutes):
- ✅ Single job with all steps
- ✅ Quick test → publish flow
- ✅ Simplified setup
- ✅ Direct publishing

## 📦 Package Info
- **GitHub Packages**: `npm install @prabasajee/qr-generator`
- **NPM Registry**: `npm install @prabasajee/qr-generator`

## 🔧 Next Steps
1. Add your NPM token to GitHub secrets
2. Test with: `git tag v1.0.1 && git push origin v1.0.1`
3. Check packages at:
   - GitHub: https://github.com/prabasajee/QR-generator/packages
   - NPM: https://www.npmjs.com/package/@prabasajee/qr-generator
