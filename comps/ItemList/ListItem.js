import styles from "../../styles/ItemsList/ListItem.module.scss" 

const ListItem = () => {
  return (
    <section className={styles.listItem}>
      <section>
        <h4>12000FT</h4>
        <h4>Elutaztam Messze</h4>
      </section>
      <div className={styles.priceIndicator}/>
    </section>
  )
}

export default ListItem