import CusAvatar from "@/app/ui-lib/ui-components/cus-avatar/CusAvatar.vue"

describe("CusAvatar Component", () => {
	beforeEach(() => {
		cy.mount(CusAvatar, {
			props: {
				name: "John Doe",
			},
		})
	})

	it("CusAvatar Component Default Render", () => {
		cy.get('[data-testid="cus-avatar"]').should("exist")
		cy.get(".ant-avatar").invoke("text").should("eq", "J")
		cy.get(".ant-avatar").invoke("css", "width").should("eq", "42px")
	})

	it("Render component with static color and specific size", () => {
		cy.mount(CusAvatar, {
			props: {
				name: "Jane Doe",
				staticColor: true,
				size: 60,
			},
		})
		cy.get(".ant-avatar").invoke("css", "width").should("eq", "60px")
	})
})
