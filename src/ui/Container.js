import styled from 'styled-components'
import Box from 'src/ui/Box'

const Container = styled(Box)({
  maxWidth:'1270px',
  margin:'0 auto',
  padding: '0 15px'
})

Container.propTypes = Box.propTypes

export default Container
