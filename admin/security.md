---
title: Security & 2FA
---

# Security & 2FA

Each account has its own security settings, in **Settings → Account**. They apply to your own login, so every user can set them up.

## Two-factor authentication

<Shot src="/img/admin/2fa-setup.png" alt="Two-factor authentication setup" />

Two-factor authentication (2FA) adds a code from an authenticator app, such as Google Authenticator or Authy, on top of your password.

**Set up 2FA** shows a QR code for your app (or a code to enter by hand); confirm with the 6-digit code. The **backup codes** shown afterwards are the way back in if you lose your phone.

Once enabled, you can **regenerate backup codes** or **disable 2FA**, both of which ask for a current code.

### Remote instances

If the account on a remote [instance](/admin/instances) has 2FA enabled, camera.ui asks for the 6-digit code when you add that instance, change its credentials, or switch to it. Only the code from your authenticator app works here, backup codes aren't accepted.

If you cancel while adding or editing, the instance is still saved, but its card shows **Two-factor confirmation pending**. Pick **Enter code** in the card's menu to finish. Cancelling during a switch only stops the switch.

## Biometric login (mobile app)

On a phone or tablet with Face ID or Touch ID, the app offers to save your credentials in the device's secure storage the first time you sign in successfully. If you pick **Not now**, the app won't ask again for that server.

Once enabled, the login screen offers **Sign in with Face ID**. The **Use Face ID / Touch ID** switch under **Settings → Account** only turns biometric login off: it removes the saved credentials, and the app offers to save them again the next time you sign in.

## Active sessions

The **Active sessions** list shows every device signed in to your account, with the current one marked. You can **sign out** a single device, or sign out all the others at once.

## API tokens

Integrations that talk to camera.ui on their own, the [Home Assistant integration](/home-assistant/integration) and the [Apple TV app](/install/tv) for example, sign in with a token instead of your password. Create one under **Settings → Account → API tokens** and copy it right away, it is shown only once.

A token has full access to your account, so treat it like a password. The list shows when each was last used, and **Revoke** kills one immediately.

## Password

Change your password under **Account**. Changing your password or username signs you out everywhere.
