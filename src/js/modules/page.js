const showPage = (show, hide) => {
  const showElement = document.querySelector(show);
  showElement.classList.remove('hide');
  for (let i = 0; i < Object.keys(hide).length; i++) {
    const hideElement = document.querySelector(hide[i]);
    if (hideElement.classList.contains('hide') === false) {
      hideElement.classList.add('hide');
    }
  }
};

// domElement.listPage.addEventListener('click', () => {
//   const arr = ['.title-author-box', '.contact-box'];
//   showPage(' .book-list-box', arr);
//   location.reload();
// });

// domElement.addPage.addEventListener('click', () => {
//   const arr = ['.book-list-box', '.contact-box'];
//   showPage('.title-author-box', arr);
// });

// domElement.contactPage.addEventListener('click', () => {
//   const arr = ['.title-author-box', '.book-list-box'];
//   showPage(' .contact-box', arr);
// });

export default showPage;