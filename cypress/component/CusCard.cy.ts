import CusCard from "@/app/ui-lib/ui-components/cus-card/CusCard.vue"

describe("CusCard Component", () => {
	it("Renders without title", () => {
		cy.mount(CusCard)
		cy.get(".cus-card").should("exist")
		cy.get(".cus-card__title").should("not.exist")
		cy.get(".cus-card__body").should("exist")
	})

	it("Renders with title", () => {
		const title = "Example Title"

		cy.mount(CusCard, {
			props: {
				title: title,
			},
		})
		cy.get(".cus-card").should("exist")
		cy.get(".cus-card__title").should("exist").and("have.text", title)
		cy.get(".cus-card__body").should("exist")
	})

	it("Renders body content", () => {
		const bodyContent = "Example Body Content"
		cy.mount(CusCard, {
			slots: {
				body: bodyContent,
			},
		})
		cy.get(".cus-card").should("exist")
		cy.get(".cus-card__body").should("exist").and("have.text", bodyContent)
	})
})
