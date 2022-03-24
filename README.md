# fast-hash

This is a JavaScript function that quickly generates unique hashes of strings.

It uses `crypto` that is built into browsers and NodeJS, so it generates pretty unique hashes and preforming fast.

```typescript
function hash(input: string, algorythm = 'SHA-256'): Promise<string>
```
