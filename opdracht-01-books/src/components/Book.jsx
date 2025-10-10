const Book = ({title, auteur, img}) => {
    return( 
        <section className="books">
            <img className="image" src={img}></img>
            <h2 className="title">{title}</h2>
            <p className="auteur">{auteur}</p>
        </section>
    );

}
 
export default Book;