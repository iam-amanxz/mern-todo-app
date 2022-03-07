import { Filter } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />

export const Primary = Template.bind({})

Primary.args = {}
