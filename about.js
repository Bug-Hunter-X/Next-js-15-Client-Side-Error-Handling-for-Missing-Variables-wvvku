```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // if not handled properly.
  const nonExistentVariable = something;
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{nonExistentVariable}</p> 
    </div>
  );
}
```