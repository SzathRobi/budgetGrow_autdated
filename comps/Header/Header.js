import styles from "../../styles/Header/Header.module.scss"
import { useState } from "react"

const Header = ({openAddItem}) => {

  const [activeTab, setActiveTab] = useState(1)
  const updateActiveTab = (number) => setActiveTab(number)

  const homeTabStyle = {
    textShadow: activeTab === 1 ? "0 0 2px #20FFAF" : "none",
    boxShadow: activeTab === 1 ? "0 0 0 #000, 0 0 0 #575757, inset 5px 5px 14px #000, inset -2px -3px 6px #575757" : "5px 5px 14px #000, -2px -3px 6px #575757, inset 0 0 0 #000, inset 0 0 0 #575757" 
  }

  const settingsTabStyle = {
    textShadow: activeTab === 2 ? "0 0 2px #20FFAF" : "none",
    boxShadow: activeTab === 2 ? "0 0 0 #000, 0 0 0 #575757, inset 5px 5px 14px #000, inset -2px -3px 6px #575757" : "5px 5px 14px #000, -2px -3px 6px #575757, inset 0 0 0 #000, inset 0 0 0 #575757" 
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button 
              onClick={() => updateActiveTab(1)}
              id={styles.navBtn_first} 
              className={styles.navBtn}
              style={homeTabStyle}
            >
              HOME
            </button>
          </li>
          <li className={styles.li}>
            <button 
              onClick={() => updateActiveTab(2)}
              id={styles.navBtn_last} 
              className={styles.navBtn}
              style={settingsTabStyle}
            >
              SETTINGS
            </button>
          </li>
        </ul>
        <div className={styles.addBtnContainer}>
          <div className={styles.buttonDecor}/>
          <button onClick={openAddItem} className={styles.addBtn}>+</button>
        </div>
       
      </nav>
    </header>
  )
}

export default Header