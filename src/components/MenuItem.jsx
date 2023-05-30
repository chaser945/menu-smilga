const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="menu-item-card">
      <img src={img} alt={title} className="menu-item-img" />
      <div className="menu-item-footer">
        {" "}
        <header className="menu-item-header">
          {" "}
          <h3 className="menu-item-title">{title}</h3>
          <p className="menu-item-price">${price}</p>
        </header>
        <p className="menu-item-info">{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem
