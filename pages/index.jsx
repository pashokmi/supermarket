import Head from 'next/head'
import Header from 'src/components/Header/Header'
import HomeCards from 'src/components/Home/HomeCards/HomeCards'
import HomeSlider from 'src/components/Home/HomeSlider/HomeSlider'
import Box from 'src/ui/Box'
import Container from 'src/ui/Container'

export default function Home() {
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
          <Header />
          <main>
            <HomeSlider />
            <HomeCards />
          </main>
          <footer>footer</footer>
        </Box>
      </Container>
    </>
  )
}
