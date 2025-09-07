document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('homeButton');
  const searchButton = document.getElementById('searchButton');
  const homeSection = document.getElementById('homeSection');
  const searchSection = document.getElementById('searchSection');
  const bookForm = document.getElementById('bookForm');
  const searchBookForm = document.getElementById('searchBook');
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  // Fungsi untuk menampilkan section dengan animasi
  function showSection(sectionToShow, sectionToHide) {
      // Sembunyikan section yang aktif
      if (sectionToHide) {
          sectionToHide.classList.remove('active');
          setTimeout(() => {
              sectionToHide.style.display = 'none';
          }, 400); // Sesuaikan dengan durasi transisi
      }
      
      // Tampilkan section baru dengan animasi
      sectionToShow.style.display = 'block';
      // Trigger reflow
      void sectionToShow.offsetWidth;
      // Tambahkan class active untuk memicu animasi
      setTimeout(() => {
          sectionToShow.classList.add('active');
      }, 10);
  }

  // Fungsi untuk mengupdate status aktif tombol
  function updateActiveButton(activeButton) {
      homeButton.classList.remove('active');
      searchButton.classList.remove('active');
      activeButton.classList.add('active');
  }

  // Event listener untuk tombol home
  homeButton.addEventListener('click', function () {
      showSection(homeSection, searchSection);
      updateActiveButton(homeButton);
  });

  // Event listener untuk tombol search
  searchButton.addEventListener('click', function () {
      showSection(searchSection, homeSection);
      updateActiveButton(searchButton);
      document.getElementById('searchBookTitle').focus();
  });
  
  // Set section home sebagai aktif saat pertama kali dimuat
  homeSection.classList.add('active');
  homeButton.classList.add('active');

  // Fungsi untuk menyimpan data buku ke localStorage
  function saveBooksToLocalStorage(books) {
      localStorage.setItem('books', JSON.stringify(books));
  }

  // Fungsi untuk mengambil data buku dari localStorage
  function getBooksFromLocalStorage() {
      const books = localStorage.getItem('books');
      return books ? JSON.parse(books) : [];
  }

  // Fungsi untuk menambahkan buku baru
  function addBook(event) {
      event.preventDefault();

      const title = document.getElementById('bookFormTitle').value;
      const author = document.getElementById('bookFormAuthor').value;
      const year = parseInt(document.getElementById('bookFormYear').value);
      const isComplete = document.getElementById('bookFormIsComplete').checked;

      const newBook = {
          id: Number(new Date()),
          title,
          author,
          year,
          isComplete,
      };

      const books = getBooksFromLocalStorage();
      books.push(newBook);
      saveBooksToLocalStorage(books);

      renderBooks();
      bookForm.reset();
  }

  // Fungsi untuk merender buku ke dalam rak
  function renderBooks(books = getBooksFromLocalStorage()) {
      incompleteBookList.innerHTML = '';
      completeBookList.innerHTML = '';

      books.forEach(book => {
          if (book.author && book.year !== null) {
              const bookElement = document.createElement('div');
              bookElement.setAttribute('data-bookid', book.id);
              bookElement.setAttribute('data-testid', 'bookItem');

              bookElement.innerHTML = `
                  <h3 data-testid="bookItemTitle">${book.title}</h3>
                  <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
                  <p data-testid="bookItemYear">Tahun: ${book.year}</p>
                  <div>
                      <button data-testid="bookItemIsCompleteButton">
                          <i class="fas fa-check"></i> ${book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca'}
                      </button>
                      <button data-testid="bookItemDeleteButton">
                          <i class="fas fa-trash"></i> Hapus Buku
                      </button>
                      <button data-testid="bookItemEditButton">
                          <i class="fas fa-pencil-alt"></i> Edit Buku
                      </button>
                  </div>
              `;

              if (book.isComplete) {
                  completeBookList.appendChild(bookElement);
              } else {
                  incompleteBookList.appendChild(bookElement);
              }

              const isCompleteButton = bookElement.querySelector('[data-testid="bookItemIsCompleteButton"]');
              isCompleteButton.addEventListener('click', function () {
                  toggleBookStatus(book.id);
              });

              const deleteButton = bookElement.querySelector('[data-testid="bookItemDeleteButton"]');
              deleteButton.addEventListener('click', function () {
                  deleteBook(book.id);
              });

              const editButton = bookElement.querySelector('[data-testid="bookItemEditButton"]');
              editButton.addEventListener('click', function () {
                  editBook(book.id);
              });
          }
      });
  }

  // Fungsi untuk mengubah status buku (selesai/belum selesai dibaca)
  function toggleBookStatus(bookId) {
      const books = getBooksFromLocalStorage();
      const bookIndex = books.findIndex(book => book.id === bookId);

      if (bookIndex !== -1) {
          books[bookIndex].isComplete = !books[bookIndex].isComplete;
          saveBooksToLocalStorage(books);
          renderBooks();
      }
  }

  // Fungsi untuk menghapus buku
  function deleteBook(bookId) {
      const books = getBooksFromLocalStorage();
      const filteredBooks = books.filter(book => book.id !== bookId);
      saveBooksToLocalStorage(filteredBooks);
      renderBooks();
  }

  // Fungsi untuk mengedit buku
  function editBook(bookId) {
      const books = getBooksFromLocalStorage();
      const bookIndex = books.findIndex(book => book.id === bookId);

      if (bookIndex !== -1) {
          const book = books[bookIndex];
          document.getElementById('bookFormTitle').value = book.title;
          document.getElementById('bookFormAuthor').value = book.author;
          document.getElementById('bookFormYear').value = book.year;
          document.getElementById('bookFormIsComplete').checked = book.isComplete;

          deleteBook(bookId); // Hapus buku lama
      }
  }

  // Fungsi untuk menampilkan hasil pencarian di halaman search
  function displaySearchResults(books) {
      console.log('Menampilkan hasil pencarian:', books); // Debug
      const searchResults = document.getElementById('searchResults');
      
      if (!searchResults) {
          console.error('Element dengan ID searchResults tidak ditemukan');
          return;
      }
      
      if (!Array.isArray(books) || books.length === 0) {
          searchResults.innerHTML = '<p class="no-results">Tidak ada buku yang ditemukan.</p>';
          return;
      }
      
      let html = '<div class="book-list">';
      books.forEach(book => {
          if (book && book.title) { // Pastikan buku dan judulnya ada
              html += `
                  <div class="book-item" data-bookid="${book.id || ''}">
                      <h3>${book.title}</h3>
                      <p><strong>Penulis:</strong> ${book.author || '-'}</p>
                      <p><strong>Tahun:</strong> ${book.year || '-'}</p>
                      <p><strong>Status:</strong> ${book.isComplete ? 'Selesai dibaca' : 'Belum selesai dibaca'}</p>
                  </div>
              `;
          }
      });
      html += '</div>';
      
      searchResults.innerHTML = html;
  }

  // Fungsi untuk mencari buku
  function searchBooks(event) {
      event.preventDefault();
      const searchTerm = document.getElementById('searchBookTitle').value.trim().toLowerCase();
      const books = getBooksFromLocalStorage();
      
      console.log('Mencari dengan kata kunci:', searchTerm); // Debug
      console.log('Total buku tersedia:', books.length); // Debug
      
      if (searchTerm === '') {
          // Jika input kosong, tampilkan pesan
          document.getElementById('searchResults').innerHTML = '<p class="no-results">Silakan masukkan kata kunci pencarian.</p>';
          return;
      }
      
      const filteredBooks = books.filter(book => {
          const titleMatch = book.title && book.title.toLowerCase().includes(searchTerm);
          const authorMatch = book.author && book.author.toLowerCase().includes(searchTerm);
          const yearMatch = book.year && book.year.toString().includes(searchTerm);
          
          return titleMatch || authorMatch || yearMatch;
      });
      
      console.log('Buku yang ditemukan:', filteredBooks); // Debug
      
      // Tampilkan hasil pencarian di halaman search
      displaySearchResults(filteredBooks);
  }

  // Event listener untuk form tambah buku
  bookForm.addEventListener('submit', addBook);

  // Event listener untuk form pencarian buku
  searchBookForm.addEventListener('submit', searchBooks);
  
  // Event listener untuk tombol enter di input pencarian
  document.getElementById('searchBookTitle').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          e.preventDefault();
          searchBooks(e);
      }
  });
  


  // Render buku saat halaman dimuat
  renderBooks();
});