async function hash(input: string, algorythm = 'SHA-256'): Promise<string> {
  const inputBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest(algorythm, inputBuffer)
  const hashView = new DataView(hashBuffer)

  let result = ''
  for (let i = 0; i < hashBuffer.byteLength; i += 4) {
    result += ('00000000' + hashView.getUint32(i).toString(16)).slice(-8)
  }
  return result
}
