setTimeout(() => {
  console.log('⬅ redirect back');
  const nonce = window.location.hash;
  window.location.href = 'https://patientenportal.local/one.html' +  nonce;  
},1000);