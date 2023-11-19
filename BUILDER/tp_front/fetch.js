fetch("/api")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    response.text().then(content => {
      const element = document.getElementById('json-data');
    
      element.style.fontSize = '18px';
      
      let contentJSON = JSON.parse(content);
      element.innerHTML = JSON.stringify(contentJSON, null, 2);
    
    });
   })
  .catch((error) => {
    console.log(`Could not fetch : ${error}`);
  });