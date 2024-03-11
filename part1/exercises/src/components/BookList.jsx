import classes from "./BookList.module.css";

export default function BookList() {
  let pageTitle = "Latest Book Releases";
  let book1 =
    "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg";
  let book2 =
    "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg";
  let book3 =
    "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg";

  return (
    <div className={classes.BookList}>
      <h3>{pageTitle}</h3>
      <img
        style={{ height: "220px" }}
        src={book1}
        alt="Romantic Comedy by Curtis Sittenfield"
      />
      <img
        style={{ height: "220px" }}
        src={book2}
        alt="Tress of the Emerald Sea by Brandon Sanderson"
      />
      <img
        style={{ height: "220px" }}
        src={book3}
        alt="The London Seance Society by Sarah Penner"
      />
    </div>
  );
}
