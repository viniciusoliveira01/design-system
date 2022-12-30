import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {story()}
          <Text size="sm">I agree to the ....</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
