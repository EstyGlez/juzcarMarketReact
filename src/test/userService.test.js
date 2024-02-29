import { expect, describe, it } from "vitest";
import userService from "../../userService";

describe('userService test', () => {
it("userService has two functions", () => {
     const serviceLength = Object.entries(userService).length

    expect(serviceLength).toBe(2)
})  
})