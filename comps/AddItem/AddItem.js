import styles from "../../styles/AddItem/AddItem.module.scss"

const AddItem = ({addItemOpen, closeAddItem}) => {

  const modalStyle = {
    width: addItemOpen ? "100vw" : "2rem",
    height: addItemOpen ? "87.5vh" : "2rem",
    borderRadius: addItemOpen ? 0 : "30rem"
  }

  return (
    <section className={styles.addItem} style={modalStyle}>
      <button onClick={closeAddItem}>CLOSE MODAL</button>
    </section>
  )
}

export default AddItem