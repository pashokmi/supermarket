import React from 'react'
import DynamicCard from 'src/components/Home/HomeCards/DynamicCard'

// export const getStaticPaths = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
//   const data = await response.json()

//   const paths = data.map(({ id }) => ({
//     params: { id: id.toString() }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const { id } = context.params
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   )
//   const data = await response.json()

//   if (!data) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: { cardItems: data }
//   }
// }

const Items = ({ cardItems }) => (
  <>
    <DynamicCard />
  </>
)

export default Items
