# QR Continue

A minimal browser extension that generates a QR Code linking
to the current web page.

## Installation

Install the extension from the [Firefox browser add-ons page](https://addons.mozilla.org/en-US/firefox/addon/qr-continue/).

The extension can also be run locally and tested by:

- Cloning the repo

```bash
git clone https://github.com/OmarAshraf-02/qr-continue
```

- Launch Firefox and navigate to `about:debugging`
- Select 'This Firefox'
- Click 'Load Temporary Add-on' and select the
[manifest.json](firefox/manifest.json) file in the
repo.

## Motivation

A friend gave me the idea for this extension as he wanted
to continue viewing links on his phone that he had opened
on his PC, but he preferred to use different browsers on his
phone and desktop (Safari on iPhone and Firefox on his PC).
So I came up with this very simple extension that uses
the [qrcode.js](https://github.com/soldair/node-qrcode)
to generate a QR code for the current page.
