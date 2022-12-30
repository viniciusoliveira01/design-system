import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis maiores nihil, ex est cumque molestiae minima atque fugiat. Illum possimus in voluptatibus recusandae, laudantium vitae adipisci alias temporibus quis dolore!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom strong tag',
    as: 'strong',
  },
}
