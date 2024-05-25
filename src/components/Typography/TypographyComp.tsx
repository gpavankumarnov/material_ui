import React from 'react'
import { Typography } from '@mui/material'

const TypographyComp = () => {
  return (
    <div>
      <Typography  variant='h1' align='right'>h1 Heading</Typography>
      <Typography variant='h2' align='center'>h2 Heading</Typography>
      <Typography variant='h3' align='justify'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      {/* subtitle - h6 only but little different */}
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>

      {/* body text - p -> paragraph | body1 - default one - 16px */}
      <Typography  noWrap={false} variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum veniam illum quis consequatur libero voluptas dolorem ratione eum quaerat esse, voluptates omnis error quo animi autem numquam a laudantium provident! Consequatur quas in eius est distinctio accusamus ab doloremque, delectus hic dicta tempore omnis molestiae impedit provident, officia, nihil doloribus iste repellendus voluptatem iure? Asperiores suscipit ratione quidem aperiam a nisi pariatur reprehenderit. Delectus eum saepe ex amet, libero, esse, magnam voluptates dicta reiciendis dolorem error fuga dolore expedita natus! Quaerat recusandae unde saepe non, odio quasi officia illum laboriosam doloribus nemo totam quidem magnam rem alias ex! Ea!</Typography>
      <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo numquam sunt nostrum laudantium ut unde mollitia quod in optio magni. In voluptates corporis ab ipsa quasi saepe ut amet rem placeat sequi. Magni impedit laborum rerum illum beatae eligendi, cum voluptate cupiditate vel vitae labore voluptatibus consequatur tempora error earum!</Typography>
    </div>
  )
}

export default TypographyComp
