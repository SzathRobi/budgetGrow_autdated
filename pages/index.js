import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Total from '../comps/Total/Total'
import ItemList from '../comps/ItemList/ItemList'
import Header from '../comps/Header/Header'

export default function Home() {
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

      <Header />
      <Total />

      <main>
        <ItemList />
      </main>

    </div>
  )
}
