import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Total from '../comps/Total/Total'
import ItemList from '../comps/ItemList/ItemList'
import Header from '../comps/Header/Header'
import AddItem from '../comps/AddItem/AddItem'
import { useState } from 'react'
import axios from "axios"

export default function Home({transactions}) {

  const [toggleChecked, setToggleChecked] = useState(true)
  const updateToggleChecked = () => setToggleChecked(!toggleChecked)

  const [itemTitle, setItemTitle] = useState("")
  const updateItemTitle = (event) => setItemTitle(event.target.value) 
  const [itemAmount, setItemAmount] = useState("")
  const updateItemAmount = (event) => setItemAmount(event.target.value)

  const addItem = () => {
    const newItem = {
      title: itemTitle,
      amount: Number(itemAmount),
      type: toggleChecked
    }

    try{
      axios.post("http://localhost:3000/api/item/create", newItem)
    }
    catch(err) {
      console.log(err)
    }
  }

  
  const [addItemOpen, setAddItemOpen] = useState(false)
  const updateAddItemOpen = async () => {
    if(addItemOpen) {
      const newItem = {
        title: itemTitle,
        amount: Number(itemAmount),
        income: toggleChecked
      }
      try{
        const res = await axios.post("http://localhost:3000/api/item/create", newItem)
        res.data.json()
      }
      catch(err) {
        console.log(err)
      }
    }
    setAddItemOpen(!addItemOpen)
  }

  return (
    <div className={styles.container}>
      <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='My budget app' />
      <meta name='keywords' content='Keywords' />
      <title>budgetGrow</title>

      <link rel="manifest" href="/manifest.json" />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB"/>
      </Head>

      <Header updateAddItemOpen={updateAddItemOpen}/>
      <Total />

      <main>
        <ItemList transactions={transactions} />
      </main>

      <AddItem 
        addItemOpen={addItemOpen} 
        itemAmount={itemAmount} 
        updateItemAmount={updateItemAmount}
        itemTitle={itemTitle} 
        updateItemTitle={updateItemTitle}  
        toggleChecked={toggleChecked}
        updateToggleChecked={updateToggleChecked}
      />
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch transactions from external API
    const res = await fetch("http://localhost:3000/api/item/read")
    const transactions = await res.json()

  // Pass transactions to the page via props
  return { props: { transactions } }
}