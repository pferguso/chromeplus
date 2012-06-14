
function processBook(book) {
  if (book) {
      jQuery("#bookAuthors").after('<a href="' + book.library_url + '" target=_blank>' + book.message + '</a>');
  }
}





var isbn = '';

var im = jQuery("#bookDataBox").find("div:first").find(".infoBoxRowItem").text();

if (im) {
    var reResult = im.match(/(\d{7,9}[\d|X])/);
    if (reResult) {
      isbn = reResult[1];
      chrome.extension.sendRequest({'action' : 'checkAvailability', 'isbn' : isbn}, processBook);
    }
}

