# TROUBLESHOOTING: Vite guide

## Browser-sync (vite-plugin-browser-sync)

Problem: Going to the browser-sync service scrolling in one screen doesn't affect the others that are connected. It jumps to the top of the page instead of following the scroll.

Solution: make sure `<!doctype html>` is in the html file.
