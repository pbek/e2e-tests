# End2End Tests

End2End Tests for some of my webpages

## Installation

```bash
npm install
npm run cypress:install
```

## Run tests

```bash
# show test runner in window
npm run cypress:open

# run all tests in the cli
npm run cypress:run
```

If you are running the tests in the cli, you will get videos of the runs in `cypress/videos`.

## Add new tests

You can create new `*.spec.js` files in subfolders (project name) of `cypress/integration`.

## Hints

In Google Chrome / Chromium you can right-click on an element in the dev tools and do a `Copy JS path` (Firefox can't do that).

## NixOS

```bash
# Run Cypress GUI
cypress
```
