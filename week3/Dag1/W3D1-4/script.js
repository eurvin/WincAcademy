fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre><code>" + JSON.stringify(myJson, null, " ") + "</code></pre>"
  })
