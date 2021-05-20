import styles from "../../styles/ItemsList/ListItem.module.scss" 

const ListItem = ({transaction}) => {

  let formattedDate = new Date(transaction.date)
  formattedDate.toLocaleTimeString()
  console.log(formattedDate)

  return (
    <section className={styles.listItem}>
      <section>
        <h4>{transaction.amount} <span>FT</span></h4>
        <h4>{transaction.title}</h4>
        
      </section>
      <div className={styles.priceIndicator}/>
    </section>
  )
}

export default ListItem