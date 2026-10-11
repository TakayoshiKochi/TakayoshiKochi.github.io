TakayoshiKochi.github.io
========================

This repository backs the GitHub Pages site for my GitHub account,
served at <https://takayoshikochi.github.io/>.

It is not a blog or a project site. I use it as a simple static resource
host for work-related testing: small HTML/JS pages that reproduce browser
bugs, try out web platform features, or need to be loaded from a real
HTTPS origin.

Contents
--------

- `crbug/<id>/` — Reproduction cases and benchmarks for Chromium bugs
  (e.g. `crbug/609137` for an iframe memory leak, `crbug/701601`,
  `crbug/789729`).
- `tests/` — Manual tests around iframes, shadow DOM, `postMessage`, and
  the History API (`history.length`, `pushState`/`popstate`, navigation in
  nested frames). `tests/resources/` holds helper frames and a copy of
  `testharness.js`.
- `feature-detection/` — Feature detection samples.
- `samesite/` — SameSite cookie experiment.

Everything here is experimental and may change or disappear without notice.
