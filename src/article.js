class Article {
    static render () {
      const url = `https://content.guardianapis.com/search?q=olympics&api-key=f6150436-16fa-4d9d-aa06-5cfffdd496b9`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        let stories = data.response.results;
        stories.forEach(story => {
          const p = document.createElement('p');
          p.innerHTML = `<a href ="${story.webUrl}">${story.webTitle}</a>`;
          document.body.appendChild(p);
      })
    }).catch(error => console.log(error))
  }
}
Article.render();



