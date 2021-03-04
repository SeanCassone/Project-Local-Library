// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const getTotalBooksCount = (books) => books.length;

const getTotalAccountsCount = (accounts) => accounts.length;

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    const [recent] = book.borrows;
    return !recent.returned;
  }).length;
}
//helper function to sort
function sortFunction(obj) {
  const key = Object.keys(obj);
  return key.sort((KeyA, KeyB) => {
    if (obj[KeyA] > obj[KeyB]) {
      return -1;
    } else if (obj[KeyA] < obj[KeyB]) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  const sortedBooks = sortFunction(count);
  return sortedBooks.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

function getMostPopularBooks(books) {
  const popBooks = books.map((book) => {
    const popular = {
      name: book.title,
      count: book.borrows.length,
    };
    return popular;
  });
  return popBooks
    .sort((titleA, titleB) => titleB.count - titleA.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let arr = [];
  for (let book in books) {
    let authorBook = books[book].authorId;
    let authorMatch = authors.find((auth) => auth.id === authorBook);
    let authName = `${authorMatch.name.first} ${authorMatch.name.last}`;
    arr.push({ name: authName, count: books[book].borrows.length });
  }
  return arr.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
