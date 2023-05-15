import { useState } from 'react'
import { figurineList } from '../datas/figurineList'
import FigurineItem from './FigurineItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = figurineList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  )

  function addToCart(name, price) {
    const currentFigurineAdded = cart.find((figurine) => figurine.name === name)
    if (currentFigurineAdded) {
      const cartFilteredCurrentFigurine = cart.filter(
        (figurine) => figurine.name !== name
      )
      updateCart([
        ...cartFilteredCurrentFigurine,
        { name, price, amount: currentFigurineAdded.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className='lmj-figurine-list'>
        {figurineList.map(({ id, cover, name, materiaux, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <FigurineItem
                cover={cover}
                name={name}
                materiaux={materiaux}
                price={price}
              />
              <button className='button-add' onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
