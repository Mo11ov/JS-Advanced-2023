function getArticleGenerator(articles) {
    const divContent = document.getElementById('content');
    
    return (function(){
        const element = document.createElement('article');
        
        const currArticle = articles.shift();
        if (currArticle != undefined) {
            element.textContent = currArticle
            divContent.appendChild(element);
        }
    })
}
