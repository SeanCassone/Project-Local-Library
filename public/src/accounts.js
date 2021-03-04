// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const findAccountById = (accounts, id) =>
  accounts.find((account) => account.id === id);

const sortAccountsByLastName = (accounts) =>
  accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );

function getTotalNumberOfBorrows(account, books) {
  const numBorrows = books.filter((book) => {
    return book.borrows.some((borrowsID) => borrowsID.id === account.id);
  });
  return numBorrows.length;
}

//chained these methods together
function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) =>
      book.borrows.some(
        (borrow) => borrow.id === account.id && !borrow.returned
      )
    )
    .map((book) => ({
      ...book,
      author: authors.find((author) => author.id === book.authorId),
    }));
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
