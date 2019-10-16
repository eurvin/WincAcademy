getMovies()
.then(data => {
  let body = document.querySelector('body');
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  body.appendChild(pre).appendChild(code)
  code.textContent = JSON.stringify(data, null, " ");
})
