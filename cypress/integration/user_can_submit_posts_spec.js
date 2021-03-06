describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post with an image
    cy.visit("/posts");
    cy.contains("Post").click();

    cy.get("#new-post-form").find("#message").type("Hello, world!");
    cy.get("#new-post-form")
      .find("#image_url")
      .type("https://picsum.photos/536/354");
    cy.get("#new-post-form").submit();

    // get a confirmation alert

    cy.get("#content").should("contain", "The post has been successfully created!")

    // confirm the contents of the post

    cy.get(".posts").should(
      "contain",
      "Hello, world!",
      "a few seconds ago",
      "https://picsum.photos/536/354",
      "be.visible"
    );

    // the post shows the author's username & profile picture

    cy.get(".posts").should(
      "contain",
      "batman",
      "https://picsum.photos/200",
      "be.visible"
    );

    // submit a second post and check that it appears above the previous post
    cy.visit("/posts");
    cy.contains("Post").click();

    cy.get("#new-post-form").find("#message").type("I'm the latest post");
    cy.get("#new-post-form")
      .find("#image_url")
      .type("https://picsum.photos/536/354");
    cy.get("#new-post-form").submit();

    cy.get(".post")
      .eq(0)
      .should(
        "contain.text",
        "I'm the latest post",
        "https://picsum.photos/536/354",
        "be.visible"
      );
    cy.get(".post")
      .eq(1)
      .should(
        "contain.text",
        "Hello, world!",
        "https://picsum.photos/536/354",
        "be.visible"
      );
  });
});
