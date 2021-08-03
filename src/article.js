  "use strict";
  
  class Article {
    static render () {
      const url = 'https://content.guardianapis.com/search?q=football&api-key=f6150436-16fa-4d9d-aa06-5cfffdd496b9';
      fetch(url)
      .then(response => response.json())
      .then(data => {
        let stories = data.response.results;
        stories.forEach(story => {
          const p = document.createElement('p');
          p.textContent = story.webTitle;
          document.body.appendChild(p);
      })
    }).catch(error => console.error(error))
  }
}

Article.render();
