const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

describe("User", () => {
  // Instantiating a user varialbe for testing
  let testUser;
  beforeEach(() => {
    testUser = new User("jnguyen", "jalynguy", 26);
  });

    // User tests here
    describe("User property tests", () => {
    // test username
    it("Given username should have correct property value", () => {
        expect(user).toHaveProperty("username", "Joe Bloggs");
    });
    // test Secondary made user class
    it("should have a username property with a string value", () => {
        expect(testUser).toHaveProperty("username", "jnguyen");
    });

    // Password Test
    it("should have a password property with a string value", () => {
        expect(user).toHaveProperty("password", "test123");
    });

    it("should have a password property with a string value", () => {
        expect(testUser).toHaveProperty("password", "jalynguy");
    });

    // Age Test
    it("should have an age property with a number value", () => {
      expect(user).toHaveProperty("age", 21);
    });

    it("should have an age property with a number value", () => {
        expect(testUser).toHaveProperty("age", 26);
    });

    it("should have a loggedIn property with a boolean value", () => {
        expect(testUser).toHaveProperty("loggedIn", false);
    });
    
    it("should start off not logged in", () => {
        expect(testUser.loggedIn).toBe(false);
    });

  });

});
