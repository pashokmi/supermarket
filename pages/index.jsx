import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Header from 'src/components/Header/Header'
import HomeCards from 'src/components/Home/HomeCards/HomeCards'
import HomeSlider from 'src/components/Home/HomeSlider/HomeSlider'
import Box from 'src/ui/Box'
import Container from 'src/ui/Container'

const Home = () => {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  console.log(isLoading)
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        await axios
          .get('https://610688cc1f3487001743796f.mockapi.io/items')
          .then((res) => {
            setItems(res.data)
          })
        await axios
          .get('https://610688cc1f3487001743796f.mockapi.io/cart')
          .then((res) => {
            setCartItems(res.data)
          })
        setIsLoading(false)

      } catch (error) {
        alert('Ошибка при запросе данных ;(')
        console.error(error)
      }
    }

    fetchData()
  }, [])
  console.log(isLoading)
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://610688cc1f3487001743796f.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post('https://610688cc1f3487001743796f.mockapi.io/cart', obj)
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id
              }
            }
            return item
          })
        )
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://610688cc1f3487001743796f.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Supermarket</title>
        <meta
          name='description'
          content='Найкращі мангали, та шампура! Шукайте в нашому магазині.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:image' content='/static/previewLogo.jpg' />
        <meta property='og:title' content='Mangal-Market' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='100' />
        <meta property='og:image:height' content='100' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Mangal-Market' />
        <meta property='twitter:image' content='/static/preview_logo.jpg' />
      </Head>

      <Container>
        <Box bg={'white'} borderRadius={'20px'} mt={10} sx={{
          padding: '20px',
          '@media (max-width: 492px)': {
            padding: '10px'
          }
        }}>
          <Header cartItems={cartItems} onRemoveItem={onRemoveItem} />
          <main>
            <HomeSlider />
            <HomeCards
              items={items}
              isItemAdded={isItemAdded}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
            />
          </main>
          <footer>footer</footer>
        </Box>
      </Container>
    </>
  )
}
export default Home
