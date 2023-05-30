const Categories = ({ uniqueCategories, categoryFilter }) => {
  console.log(categoryFilter)
  return (
    <div className="category-btn-container">
      {uniqueCategories.map((category, index) => {
        return (
          <button
            onClick={() => categoryFilter(category)}
            className="category-btn"
            key={index}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
