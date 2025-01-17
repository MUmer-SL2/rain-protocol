import chai from "chai";
import type { Contract } from "ethers";
import { ethers } from "hardhat";
import type { ValueTierTest } from "../../typechain/ValueTierTest";
import { eighteenZeros } from "../Util";

const { assert } = chai;

enum Tier {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
}

const LEVELS = Array.from(Array(8).keys()).map((value) =>
  ethers.BigNumber.from(++value + eighteenZeros)
);

describe("ValueTierTest", async function () {
  let valueTier: ValueTierTest & Contract;

  beforeEach(async () => {
    const valueTierFactory = await ethers.getContractFactory("ValueTierTest");

    valueTier = (await valueTierFactory.deploy(LEVELS)) as ValueTierTest &
      Contract;

    await valueTier.deployed();
  });

  it("should set tierValues on construction", async () => {
    const tierValues = await valueTier.tierValues();

    tierValues.forEach((tierValue, index) => {
      assert(
        tierValue.eq(LEVELS[index]),
        `tier value at position ${index} was not set`
      );
    });
  });

  it("should return all the values in a list rather than requiring an index be specified", async () => {
    const tierValues = await valueTier.tierValues();

    assert(
      tierValues.every((value, index) => value.eq(LEVELS[index])),
      `did not return the correct tierValue list
      expected  ${LEVELS}
      got       ${tierValues}`
    );
  });

  it("should convert a Tier to the minimum value it requires for all tiers, including ZERO tier", async () => {
    assert((await valueTier.wrappedTierToValue(Tier.ZERO)).eq(0));
    assert((await valueTier.wrappedTierToValue(Tier.ONE)).eq(LEVELS[0]));
    assert((await valueTier.wrappedTierToValue(Tier.TWO)).eq(LEVELS[1]));
    assert((await valueTier.wrappedTierToValue(Tier.THREE)).eq(LEVELS[2]));
    assert((await valueTier.wrappedTierToValue(Tier.FOUR)).eq(LEVELS[3]));
    assert((await valueTier.wrappedTierToValue(Tier.FIVE)).eq(LEVELS[4]));
    assert((await valueTier.wrappedTierToValue(Tier.SIX)).eq(LEVELS[5]));
    assert((await valueTier.wrappedTierToValue(Tier.SEVEN)).eq(LEVELS[6]));
    assert((await valueTier.wrappedTierToValue(Tier.EIGHT)).eq(LEVELS[7]));
  });

  it("should convert a value to the maximum Tier it qualifies for", async () => {
    assert((await valueTier.wrappedValueToTier(0)).eq(Tier.ZERO));
    assert((await valueTier.wrappedValueToTier(LEVELS[0])).eq(Tier.ONE));

    assert((await valueTier.wrappedValueToTier(LEVELS[1])).eq(Tier.TWO));
    assert((await valueTier.wrappedValueToTier(LEVELS[1].add(1))).eq(Tier.TWO));
    assert((await valueTier.wrappedValueToTier(LEVELS[1].sub(1))).eq(Tier.ONE));

    assert((await valueTier.wrappedValueToTier(LEVELS[2])).eq(Tier.THREE));
    assert((await valueTier.wrappedValueToTier(LEVELS[3])).eq(Tier.FOUR));
    assert((await valueTier.wrappedValueToTier(LEVELS[4])).eq(Tier.FIVE));
    assert((await valueTier.wrappedValueToTier(LEVELS[5])).eq(Tier.SIX));
    assert((await valueTier.wrappedValueToTier(LEVELS[6])).eq(Tier.SEVEN));
    assert((await valueTier.wrappedValueToTier(LEVELS[7])).eq(Tier.EIGHT));
  });
});
