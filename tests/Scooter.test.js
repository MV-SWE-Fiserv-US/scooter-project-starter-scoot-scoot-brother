const { describe, it, expect } = require("@jest/globals");
const Scooter = require("../src/Scooter.js");
const User = require("../src/User.js");

describe("Scooter", () => {
  let testScooterInUse;
  let testScooterBroken;
  let testUser1;
  let testUser2;
  let testUser3;

  beforeEach(() => {
    testScooterInUse = new Scooter("Union Station");
    testScooterLowCharge = new Scooter("Convention Center");
    testScooterBroken = new Scooter("Convention Center");

    testUser1 = new User("testUser1", "password", 22);
    testUser2 = new User("testUser2", "password", 25);
    testUser3 = new User("testUser3", "password", 27);

    testScooterInUse.rent(testUser1);

    testScooterLowCharge.charge = 11;

    testScooterBroken.isBroken = true;
  });

    it("should have a station property with a null value if checked out", () => {
      expect(testScooterInUse).toHaveProperty("station", null);
    });

    it("should have a user property with a User instance if checked out", () => {
      expect(testScooterInUse).toHaveProperty("user", testUser1);
    });

    it("should have a nextSerial static property with a number value starting at 1 and incrementing for each instance of Scooter created", () => {
      expect(Scooter.nextSerial).toBe(31);
    });

  });

  describe("Scooter methods", () => {
    describe("rent(user) method", () => {
      it("should rent to user if Scooter is above 20% charge and not broken", () => {
        expect(testScooterInUse.user).toEqual(testUser1);
        expect(testScooterInUse.user).toBeInstanceOf(User);
      });

      it("should handle errors for insufficient charge", () => {
        expect(() => {
          testScooterLowCharge.rent(testUser2);
        }).toThrow("scooter needs to charge");
      });

      it("should handle errors for broken Scooters", () => {
        expect(() => {
          testScooterBroken.rent(testUser3);
        }).toThrow("scooter needs repair");
      });
    });

    describe("dock(station) method", () => {
      it("should return scooter to the station", () => {
        testScooterInUse.dock("Union Station");
        expect(testScooterInUse.station).toBe("Union Station");
      });

      it("should clear the user", () => {
        testScooterInUse.dock("Union Station");
        expect(testScooterInUse.user).toBeNull();
      });
    });

    describe("recharge() method", () => {
      it("should recharge a Scooter instance", async () => {
        await testScooterLowCharge.recharge();
        expect(testScooterLowCharge.charge).toBe(100);
      });
    });

    describe("requestRepair() method", () => {
      it("should repair a Scooter instance", async () => {
        const scooter = new Scooter();
        scooter.isBroken = true;
        await scooter.requestRepair();
        expect(scooter.isBroken).toBe(false);
      });
    });
  });
