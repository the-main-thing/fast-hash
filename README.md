# fast-hash

This is a JavaScript function that quickly generates unique hashes of strings.

It uses build into browsers or node.js `crypto` module, so it generates pretty unique hashes and preforming fast.

```typescript
function hash(input: string, algorythm = 'SHA-256'): Promise<string>
```
