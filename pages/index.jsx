import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Header from 'src/components/Header/Header'
import HomeCards from 'src/components/Home/HomeCards/HomeCards'
import HomeSlider from 'src/components/Home/HomeSlider/HomeSlider'
import Box from 'src/ui/Box'
import Container from 'src/ui/Container'

export default function Home() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios
      .get('https://610688cc1f3487001743796f.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://610688cc1f3487001743796f.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCard = (obj) => {
    axios.post('https://610688cc1f3487001743796f.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://610688cc1f3487001743796f.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      <Head>
        <title>Supermarket</title>
        <meta
          name="description"
          content="Перший в Україні супермаркет деревообробних матеріалів"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/static/preview_logo.jpg" />
        <meta property="og:title" content="WoodMarket" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="WoodMarket" />
        <meta property="twitter:image" content="/static/preview_logo.jpg" />
      </Head>

      <Container>
        <Box bg={'white'} p={20} borderRadius={'20px'} mt={10}>
          <Header cartItems={cartItems} onRemoveItem={onRemoveItem} />
          <main>
            <HomeSlider />
            <HomeCards items={items} onAddToCard={onAddToCard} />
          </main>
          <footer>footer</footer>
        </Box>
      </Container>
    </>
  )
}
