import type { Meta, StoryObj } from '@storybook/vue3';
import CusAvatar from './CusAvatar.vue';
import '../../../../assets/css/main.scss';

const args = {
	name: 'John Doe',
	staticColor: true,
	size: 42,
}

const argTypes = {}

const meta: Meta<typeof CusAvatar> = {
    component: CusAvatar,
    tags: ['autodocs'],
    title: 'Design System/CusAvatar',
    argTypes,
}

export default meta;
type Story = StoryObj<typeof CusAvatar>

const render = (args: any) => {
    return {
        setup: () => ({ args }),
        components: { CusAvatar },
        template: '<CusAvatar v-bind="args"></CusAvatar>'
    }
}

export const primary: Story = {    
    render,
    args
}