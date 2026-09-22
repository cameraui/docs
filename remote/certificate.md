---
title: Certificate
---

# Certificate

camera.ui generates its own certificate on first start and serves it on every connection. Browsers do not know the issuer, so they warn. For your own domain you can upload a certificate you obtained yourself, no [reverse proxy](/remote/reverse-proxy) needed.

## What the built-in certificate is for

The mobile apps and remote workers verify the server against camera.ui's own certificate authority. They reach the server by IP address, and no public issuer signs certificates for private addresses, so that part keeps running on the internal certificate no matter what you upload.

Your certificate is served only when a client asks for a name it covers. Everything else, including every connection to an IP address, still gets the internal one.

The internal certificate covers `127.0.0.1`, the machine's private network addresses, and whatever you picked under **Settings → Remote Access → Network**: the server addresses and the local address. A public address is only included when you select it there. Changing those reissues the certificate, so a browser exception stored for the old one no longer applies and the warning returns.

## Uploading your own

Settings → System → Certificate → **Upload**. Uploading and removing is limited to the master account, and the desktop app has no such card.

- **Certificate.** Your certificate including the intermediates above it. Let's Encrypt writes this as `fullchain.pem`. Commercial issuers often send the certificate and the chain as two files, then add the second one in the chain field.
- **Private key.** `privkey.pem`, or the `.key` your issuer sent. It must not be protected by a passphrase.
- **Chain.** Only needed when your issuer ships the intermediates separately.

The upload is checked before anything is stored: the files have to parse, the key has to belong to the certificate, and it has to be valid right now. Afterwards the card lists the names it covers, who issued it and how long it is valid.

A certificate that holds no intermediates is accepted with a warning. From a public issuer that means the chain is missing: desktop browsers fetch it themselves and look fine, phones refuse the connection. From a local certificate authority that signs directly there is nothing to add.

camera.ui uses the new certificate immediately. The streaming engine keeps its own copy and offers a restart afterwards, which interrupts running streams for a moment.

## Renewal

Uploaded files live in `certs/custom/` inside the storage directory, as `cert.pem`, `key.pem` and `chain.pem`. camera.ui watches them, so a replaced file is picked up without a restart.

For automatic renewal, write to that directory:

- **Docker.** Mount your certificate directory over `certs/custom`, read-only.
- **Bare metal.** A certbot deploy hook that copies `fullchain.pem` and `privkey.pem` there under those names.

An upload through the interface has to be repeated at every renewal. Let's Encrypt certificates are valid for 90 days.

## Removing it

Settings → System → Certificate → **Remove**. Every name goes back to the internal certificate.

## Next steps

**[Reverse proxy](/remote/reverse-proxy)** — terminate TLS in front of camera.ui instead, useful when you already run one.
**[Custom domain](/remote/custom-domain)** — reach your server under your own name from outside.
