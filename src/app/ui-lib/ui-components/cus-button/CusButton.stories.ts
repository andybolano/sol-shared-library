import type { Meta, StoryObj } from '@storybook/vue3';
import CusButton from './CusButton.vue';
import { typeButton } from './enums/ButtonType';

const argTypes = {
	type: {
        control: {
            type: 'select'
        },
        options: [
			typeButton.Primary, 
			typeButton.Secondary, 
			typeButton.Text
		]
    }
}

const meta: Meta<typeof CusButton> = {
  component: CusButton,
  tags: ['autodocs'],
  title: 'Design System/CusButton',
  argTypes,
};

export default meta;
type Story = StoryObj<typeof CusButton>;

 const render = (args: any) => {
	return {
        setup: () => ({ args }),
        components: { CusButton },
        template: '<CusButton v-bind="args"></CusButton>'
    }
};

export const primary: Story = {    
    render,
    args: {
		value: 'Primary Button',
		type: typeButton.Primary,
	}
}

export const secondary: Story = {    
    render,
    args: {
		value: 'Secondary Button',
  		type: typeButton.Secondary
	}
}

export const text: Story = {    
    render,
    args: {
		value: 'Button text',
  		type: typeButton.Text
	}
}
