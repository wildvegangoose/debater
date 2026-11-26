# Publishing Steelman on Google Play Store

Steelman (`io.dialectica.debater`, `targetSdkVersion 35`) is configured to build a signed Google Play App Bundle (`.aab`) automatically in GitHub Actions.

## 1. Generate Your Upload Keystore (One-Time)

Run this on your computer (keep the `.jks` file backed up safely — never commit it to Git):

```bash
keytool -genkey -v \
  -keystore steelman-upload.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias steelman
```

Then base64-encode it:

```bash
# macOS
base64 -i steelman-upload.jks | pbcopy

# Linux
base64 -w 0 steelman-upload.jks
```

## 2. Add 4 Secrets to GitHub Actions

In `wildvegangoose/debater` → **Settings → Secrets and variables → Actions → Secrets**, add:

| Secret | Value |
| --- | --- |
| `ANDROID_KEYSTORE_BASE64` | Base64 string from step 1 |
| `ANDROID_KEYSTORE_PASSWORD` | Keystore password you chose |
| `ANDROID_KEY_ALIAS` | `steelman` |
| `ANDROID_KEY_PASSWORD` | Key password you chose |

## 3. Download Your Signed `.aab`

Trigger **Actions → Build Android App (APK & Play Store AAB) → Run workflow** (or push to `main`).
Download the **`Steelman-PlayStore-AAB`** artifact (`app-release.aab`) — `versionCode` auto-increments with each workflow run.

## 4. Upload to Google Play Console

1. Create your app in [Google Play Console](https://play.google.com/console) (`Steelman`, Default language: English).
2. **Privacy Policy URL:** `https://wildvegangoose.github.io/debater/privacy.html`
3. **Data Safety form:**
   - Collects data: **Yes** (App interactions / diagnostics via PostHog; optional user-submitted feedback notes).
   - Data encrypted in transit: **Yes** (HTTPS).
   - Account creation required: **No**.
   - Personal data / debate transcripts collected: **No** (stored locally on device).
4. **Closed Testing → Create new release:** Upload `app-release.aab`, enroll 12 testers for 14 days (required for new personal developer accounts), then promote to Production.
