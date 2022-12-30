import type { StoryObj, Meta } from '@storybook/react'
import { Textarea, TextareaProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Notes...',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Disabled notes textarea',
    disabled: true,
  },
}
