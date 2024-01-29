import type { Meta, StoryObj } from '@storybook/vue3';
import CusLabel from './CusLabel.vue';

const args = {
	labelText: 'Label Name',
	isRequired: false,
	type: 'normal',
}

const argTypes = {}

const meta: Meta<typeof CusLabel> = {
    component: CusLabel,
    tags: ['autodocs'],
    title: 'Design System/CusLabel',
    argTypes,
}

export default meta;
type Story = StoryObj<typeof CusLabel>

const render = (args: any) => {
    return {
        setup: () => ({ args }),
        components: { CusLabel },
        template: '<CusLabel v-bind="args"></CusLabel>'
    }
}

export const primary: Story = {    
    render,
    args
}
