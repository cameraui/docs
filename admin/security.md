---
title: Security & 2FA
---

# Security & 2FA

Each account has its own security settings, in **Settings → Account**. They apply to your own login, so every user can set them up.

## Two-factor authentication

<Shot src="/img/admin/2fa-setup.png" alt="Two-factor authentication setup" />

Two-factor authentication (2FA) adds a code from an authenticator app, such as Google Authenticator or Authy, on top of your password.

To turn it on, choose **Set up 2FA**, scan the QR code with your app (or enter the code by hand), then enter the 6-digit code to confirm. camera.ui then shows a set of **backup codes**; save them somewhere safe, as they're the way back in if you lose your phone.

Once enabled, you can **regenerate backup codes** or **disable 2FA**, both of which ask for a current code.

### Remote instances

If the account on a remote [instance](/admin/instances-workers#instances) has 2FA enabled, camera.ui asks for the 6-digit code when you add that instance, change its credentials, or switch to it. Only the code from your authenticator app works here, backup codes aren't accepted. A wrong code just asks again.

If you cancel while adding or editing, the instance is still saved, but its card shows **Two-factor confirmation pending**. Pick **Enter code** on the card to finish. Cancelling during a switch only stops the switch.

## Biometric login (mobile app)

On a phone or tablet with Face ID or Touch ID, the app offers to save your credentials in the device's secure storage the first time you sign in successfully. Choose **Enable** to turn it on. If you pick **Not now**, the app won't ask again for that server.

Once enabled, a **Sign in with Face ID** button appears on the login screen, so you no longer need to type your password on that device. The **Use Face ID / Touch ID** switch under **Settings → Account** only turns biometric login off: it removes the saved credentials, and the app offers to save them again the next time you sign in.

## Active sessions

The **Active sessions** list shows every device signed in to your account, with the current one marked. You can **sign out** a single device, or sign out all the others at once, which is handy if you've logged in somewhere you no longer trust.

## Password

Change your password under **Account**. Changing your password or username signs you out everywhere, so you sign back in with the new details.
