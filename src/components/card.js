const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const authorHeadline = document.createElement('div');
  const author = document.createElement('dive');
  const container = document.createElement('dive');
  const image = document.createElement('img');
  const span = document.createElement('span');

  card.appendChild(authorHeadline);
  card.appendChild(author);
  author.appendChild(container);
  author.appendChild(span);
  container.appendChild(image);

  card.classList.add('card');
  authorHeadline.classList.add('headline');
  author.classList.add('author');
  container.classList.add('img-container');
  image.setAttribute('src', article.authorPhoto);

  authorHeadline.textContent = article.headline;
  span.textContent = article.authorName;

  card.addEventListener('click', function() {
    console.log(article.headline);
  })

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
}

export { Card, cardAppender }
