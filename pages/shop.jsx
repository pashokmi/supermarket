import React from 'react'
import PropTypes from 'prop-types'
import Box from 'src/ui/Box'
import Header from 'src/components/Header/Header'

const Shop = (props) => {
  return (
    <Box bg={'white'} p={20} borderRadius={'20px'} mt={10}>
      <Header />
    </Box>
  )
}

Shop.propTypes = {}

export default Shop
