// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const findAuthorById = (authors, id) =>
  authors.find((author) => author.id === id);

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let partitioned = [];
  bookOut = books.filter(({ borrows }) => !borrows[0].returned);
  bookIn = books.filter(({ borrows }) => borrows[0].returned);
  partitioned.push(bookOut, bookIn);
  return partitioned;
}

function getBorrowersForBook(book, accounts) {
  const accountId = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});
  return book.borrows
    .map(({ id, returned }) => ({
      ...accountId[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
