import CusButton from "@/app/ui-lib/ui-components/cus-button/CusButton.vue"

describe("CusButton Component", () => {
	it("Default render component", () => {
		cy.mount(CusButton, {
			props: {
				value: "Button Name",
			},
		}).then(({ wrapper }) => {
			expect(wrapper.exists()).to.be.true
			expect(wrapper.classes()).to.include("cus-button--primary")
			expect(wrapper.text()).to.eq("Button Name")
			expect(wrapper.find("i").exists()).to.be.false
		})
	})

	it("Renders with a different type and an icon", () => {
		cy.mount(CusButton, {
			props: {
				value: "Button Modified",
				type: "secondary",
				icon: "icon-user",
			},
		}).then(({ wrapper }) => {
			expect(wrapper.exists()).to.be.true
			expect(wrapper.classes()).to.include("cus-button--secondary")
			expect(wrapper.text()).to.eq("Button Modified")
			expect(wrapper.find("i").exists()).to.be.true
		})
	})
})
