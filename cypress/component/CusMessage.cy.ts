import CusMessage from "@/app/ui-lib/ui-components/cus-message/CusMessage"

describe("CusMessage", () => {
	it("should display success message", () => {
		CusMessage.success("This is a success message")

		cy.get(".ant-message-success").should("exist")
		cy.contains("This is a success message").should("exist")
	})

	it("should display error message", () => {
		CusMessage.error("This is an error message")

		cy.get(".ant-message-error").should("exist")
		cy.contains("This is an error message").should("exist")
	})

	it("should display warning message", () => {
		CusMessage.warning("This is a warning message")

		cy.get(".ant-message-warning").should("exist")
		cy.contains("This is a warning message").should("exist")
	})
})
