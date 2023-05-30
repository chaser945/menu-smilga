import Categories from "./components/Categories"
import MenuItem from "./components/MenuItem"
import menuData from "./data"
import { useState } from "react"

const App = () => {
  const [foodData, setFoodData] = useState(menuData)
  const [categoryData, setCategoryData] = useState(menuData)

  const allCategories = categoryData.map((foodItem) => {
    return foodItem.category
  })

  const uniqueCategories = ["all", ...new Set(allCategories)]
  // console.log(uniqueCategories)

  const categoryFilter = (category) => {
    if (category === "all") {
      setFoodData(menuData)
      return
    }

    const newFoodData = menuData.filter(
      (foodItem) => foodItem.category === category
    )
    setFoodData(newFoodData)
  }

  return (
    <main>
      <section className="container">
        <h1 className="title">our menu</h1>
        <div className="underline"></div>
        <Categories
          uniqueCategories={uniqueCategories}
          categoryFilter={categoryFilter}
        />
        <div className="menu-item-container">
          {foodData.map((foodItem) => {
            return <MenuItem {...foodItem} key={foodItem.id} />
          })}
        </div>
      </section>
    </main>
  )
}
export default App
