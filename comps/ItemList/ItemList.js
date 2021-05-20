import FilterBtns from "./FilterBtns"
import ListItem from "./ListItem"

import styles from "../../styles/ItemsList/ItemList.module.scss"

const ItemList = ({transactions}) => {
  return (
    <section className={styles.itemList}>
      <FilterBtns />
      <section>
      {/*transactions.map(transaction => <ListItem key={transaction._id} transaction={transaction}/>)*/}
       <ListItem />
      </section>
    </section>    
  )
}

export default ItemList