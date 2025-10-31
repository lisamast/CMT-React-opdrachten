const MenuItem = ({img, title, price, description}) => {
    return (
        <section>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </section>
    );
}

export default MenuItem;