window.onload = () => {
   const searchInput = document.querySelector('.book-search-input');
   const resultContainer = document.querySelector('.book-search-result');

   let timer = null;
   let value = null;

   const createBookMarkup = (item) => {
      return ` 
      <div class="book">
         <div class="book__title-container">
            <img src="${item.imageLinks.smallThumbnail}">
            <h2 class="book__title">${item.title}</h2>
         </div>
         <a class="book__read" href="${item.previewLink}">Read the book</a>
         <div class="book__info">
            <span>Authors: ${item.authors.map((author) => author)}</span>
            <span>Categories: ${item.categories.map(
               (categorie) => categorie,
            )}</span>
            <span>Published: ${item.publishedDate}</span>
         </div>
      </div>
      
      `;
   };

   const keyupHandler = (e) => {
      if (value === e.target.value && e.which !== 13) return;
      value = e.target.value;
      if (value.length >= 3) {
         let resultContainerMarkup = ``;
         timer = setTimeout(() => {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
               .then((res) => res.json())
               .then((res) =>
                  res.items.forEach(({ volumeInfo }) => {
                     resultContainerMarkup += createBookMarkup(volumeInfo);
                  }),
               )
               .then(() => {
                  resultContainer.innerHTML = resultContainerMarkup;
               })
               .catch(() => {
                  resultContainer.innerHTML = '<span>Wrong name of book</span>';
               });
         }, 3000);
      }
   };

   const keydownHandler = () => {
      window.clearTimeout(timer);
   };
   searchInput.addEventListener('keyup', keyupHandler);
   searchInput.addEventListener('keydown', keydownHandler);
};
