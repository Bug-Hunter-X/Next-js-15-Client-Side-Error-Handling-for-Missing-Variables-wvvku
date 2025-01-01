# Next.js 15 Client-Side Error Handling
This repository demonstrates a common error in Next.js 15 applications where missing variables during client-side rendering cause runtime errors.  The issue and a solution using error boundaries are showcased.

## Problem
In Next.js 15, if a component tries to access a variable that hasn't been defined, you may encounter runtime errors during client-side rendering.  This can lead to a broken user experience.

## Solution
The recommended approach is to use error boundaries to gracefully handle these exceptions, preventing the entire application from crashing.  Conditional rendering can also be used to prevent accessing variables before they are defined.