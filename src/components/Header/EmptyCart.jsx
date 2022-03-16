import React from 'react'
import Image from 'next/image'
import { palette } from 'src/theme/palette'
import Text from 'src/ui/Text'

export const EmptyCart = () => {
  return (
    <>
      <Image
        src={'/static/cart.png'}
        alt={'Кошик пустий'}
        width={150}
        height={150}
        objectFit="contain"
      />
      <Text fontSize={[3, 4]} mb={[1, 2]}>
        Кошик пустий
      </Text>
      <Text fontSize={[1, 2]} color={palette.black} sx={{ opacity: '0.4' }}>
        Добавте товар, щоб зробити замовлення.
      </Text>
    </>
  )
}
