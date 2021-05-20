import ToggleBtn from "./ToggleBtn"
import styles from "../../styles/AddItem/AddItem.module.scss"
import { useState } from "react"

const AddItem = (
  {
    addItemOpen, 
    toggleChecked, 
    updateToggleChecked, 
    itemAmount, 
    updateItemAmount,
    itemTitle,
    updateItemTitle
  }
) => {

  const modalStyle = {
    width: addItemOpen ? "100vw" : "2rem",
    height: addItemOpen ? "87.5vh" : "2rem",
    borderRadius: addItemOpen ? 0 : "30rem"
  }

  return (
    <form className={styles.addItem} style={modalStyle}>
      <section className={styles.formSection}>
        <h3>Title</h3>
        <input 
          value={itemTitle}
          onChange={() => {updateItemTitle(event)}}
          type="text"
          className={styles.input}
        />
      </section>
      <section className={styles.formSection}>
        <h3>Amount</h3>
        <input 
          value={itemAmount}
          onChange={() => updateItemAmount(event)}
          type="text"
          className={styles.input}
        />
      </section>
      <section className={styles.formSection}>
        <h3>{toggleChecked ? "INCOME" : "EXPENSE"}</h3>
        <ToggleBtn 
          toggleChecked={toggleChecked}
          updateToggleChecked={updateToggleChecked}
        />
      </section>
    </form>
  )
}

export default AddItem