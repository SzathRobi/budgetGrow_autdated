import styles from "../../styles/ItemsList/ListItem.module.scss" 

const ListItem = ({transaction}) => {

 /* let formattedDate = new Date(transaction.date)
  formattedDate.toLocaleTimeString()
  console.log(formattedDate)
*/
  return (
    <section className={styles.listItem}>
      <section>
        <h4>{12300} <span>FT</span></h4>
        <h4>{"just title"}</h4>
        
      </section>
      <div className={styles.priceIndicator}/>
    </section>
  )
}

export default ListItem