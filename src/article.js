  "use strict";
  
  class Article {
    articleData(url) {
      return fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}?show-fields=body&show-fields=thumbnail`).then(response => {
      return response.json();
    });
  };

  articleHeader() {
    return this.articleData("http://content.guardianapis.com/football").then(header =>{
      return header.response.results.map(n => n.webTitle)
    }).then(post => {
      return JSON.stringify(post[0])
    }).then(result => result)
  };
};


//fields.body
//webTitle