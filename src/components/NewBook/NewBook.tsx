import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchBooks, selectBooks } from '../../booksSlice';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import './NewBook.css';
import { renderStarRating, getRandomRating } from '../../api/api';

function NewBook() {
  const dispatch: AppDispatch = useDispatch();
  const books = useSelector(selectBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const colors = ['#D7E4FD', '#F4EEFD', '#FEE9E2', '#CAEFF0'];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className='newBook-grid-container'>
        {currentBooks.map((book, index) => (
          <div key={index} className='newBook-box'>
            <Link to={`/book/${book.isbn13}`} className='newBook-image-box' style={{ backgroundColor: getRandomColor() }}>
              <img className='newBook-image' src={book.image} alt={book.title} />
            </Link>
            <Link to={`/book/${book.isbn13}`} className='newBook__title'>{book.title}</Link>
            <h3 className='newBook__subtitle'>{book.subtitle}</h3>
            <div className='newBook-rating-price-container'>
              <p className='newBook__price'>{book.price}</p>
              <div className='newBook-rating'>{renderStarRating(getRandomRating(), 'star')}</div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        withPagination={books.length > booksPerPage}
        currentPage={currentPage}
        totalPages={Math.ceil(books.length / booksPerPage)}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
}

export default NewBook;

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchBooks, selectBooks, Book } from '../../booksSlice';
// import Pagination from '../Pagination/Pagination';
// import { Link } from 'react-router-dom';
// import './NewBook.css';
// import { renderStarRating, getRandomRating } from '../../api/api';


// function NewBook() {
//   const dispatch: AppDispatch = useDispatch();
//   const books = useSelector(selectBooks);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const booksPerPage = 12;

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   const colors = ['#D7E4FD', '#F4EEFD', '#FEE9E2', '#CAEFF0'];

//   const getRandomColor = () => {
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const filterBooks = (book: Book) => {
//     const search = searchTerm.trim().toLowerCase();
//     return (
//       book.title.toLowerCase().includes(search) ||
//       book.subtitle.toLowerCase().includes(search)
//     );
//   };

//   const filteredBooks = currentBooks.filter(filterBooks);

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search by title or subtitle"
//       />
//       <div className='newBook-grid-container'>
//         {filteredBooks.map((book, index) => (
//           <div key={index} className='newBook-box'>
//             <Link to={`/book/${book.isbn13}`} className='newBook-image-box' style={{ backgroundColor: getRandomColor() }}>
//               <img className='newBook-image' src={book.image} alt={book.title} />
//             </Link>
//             <Link to={`/book/${book.isbn13}`} className='newBook__title'>{book.title}</Link>
//             <h3 className='newBook__subtitle'>{book.subtitle}</h3>
//             <div className='newBook-rating-price-container'>
//               <p className='newBook__price'>{book.price}</p>
//               <div className='newBook-rating'>{renderStarRating(getRandomRating(), 'star')}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Pagination
//         withPagination={filteredBooks.length > booksPerPage}
//         currentPage={currentPage}
//         totalPages={Math.ceil(filteredBooks.length / booksPerPage)}
//         onNext={handleNextPage}
//         onPrev={handlePrevPage}
//       />
//     </div>
//   );
// }

// export default NewBook;







