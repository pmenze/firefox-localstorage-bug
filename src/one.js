// check nonce if present in the URL
const nonceFromStorage = window.localStorage.getItem('nonce');
const nonceFomURL = window.location.hash.substring(1);
if( nonceFomURL.length>0 ) {
  if (nonceFomURL !== nonceFromStorage ) {
    alert(`invalid nonce ${nonceFomURL} / ${nonceFromStorage}`);
  }
}
// call second page with new nonce
setTimeout(() => {
  createNonce().then(n => {
    window.localStorage.setItem('nonce', n);
    window.location.href = "https://patientenportal.local/two.html#"+n;
  })
},500);



function createNonce() {
  return new Promise((resolve) => {
      const url = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-';
      let size = 45;
      let id = '';

      const crypto = self.crypto || self['msCrypto'];
      if (crypto) {
          const bytes = crypto.getRandomValues(new Uint8Array(size));
          while (0 < size--) {
              id += url[bytes[size] & 63];
          }
      } else {
          while (0 < size--) {
              id += url[Math.random() * 64 | 0];
          }
      }
      resolve(id);
  });
}
