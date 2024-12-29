# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `bug.js` file contains code that intentionally rejects a promise without a proper `.catch()` handler.  The `bugSolution.js` file provides the corrected version with error handling.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Observe the error message in your console.

## How to fix the bug

Refer to the `bugSolution.js` file for the corrected code.  The key change is the addition of a `.catch()` block to handle the rejected promise gracefully, preventing the application from crashing.