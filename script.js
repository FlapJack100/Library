const openDialogBtn = document.getElementById('openDialog');
    const bookDialog = document.getElementById('bookDialog');
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    openDialogBtn.addEventListener('click', () => {
      bookDialog.showModal();
    });

    bookForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;

      addBookToLibrary(title, author, pages);
      bookDialog.close();
      bookForm.reset();
    });

    function addBookToLibrary(title, author, pages) {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';

      bookCard.innerHTML = `
        <p class="book-title">"${title}"</p>
        <p class="book-author">${author}</p>
        <p class="book-pages">${pages} pages</p>
        <button class="read-btn">Read</button>
        <button class="remove-btn">Remove</button>
      `;

      bookCard.querySelector('.remove-btn').addEventListener('click', () => {
        bookCard.remove();
      });

      const readBtn = bookCard.querySelector('.read-btn');
      let isRead = true;

    readBtn.addEventListener('click', () => {
    isRead = !isRead;

    if (isRead) {
      readBtn.textContent = 'Read';
      readBtn.style.backgroundColor = 'green';
      readBtn.style.color = 'white';
    } else {
      readBtn.textContent = 'NoRead';
      readBtn.style.backgroundColor = 'red';
      readBtn.style.color = 'white';
    }
  });
      
      bookList.appendChild(bookCard);
    }

    const themeToggleBtn = document.getElementById('toggleTheme');

// Автоматическое включение тёмной темы после 19:00 или до 6:00
function autoSetTheme() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 19 || hour < 6) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

// Вызов функции сразу при загрузке
autoSetTheme();

// Кнопка переключения вручную
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
