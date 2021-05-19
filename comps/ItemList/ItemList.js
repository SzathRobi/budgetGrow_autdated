import FilterBtns from "./FilterBtns"
import ListItem from "./ListItem"

import styles from "../../styles/ItemsList/ItemList.module.scss"

const ItemList = () => {
  return (
    <section className={styles.itemList}>
      <FilterBtns />
      <ListItem />
    </section>    
  )
}

export default ItemList