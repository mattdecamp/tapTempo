/**
 * @vitest-environment jsdom
 */

import { expect, test, expectTypeOf, vi } from "vitest";
import { calcTempo, averageTempo, tempoEvent } from "../main.js";


//
// calcTempo()
//

test("expect calcTempo to be a function", () => {
  
    expectTypeOf(calcTempo).toBeFunction();
})

test("Calculates a tempo of 120 beats", () => {
  expect(calcTempo(1000, 500)).toBe(120);
})
test("String argument results in NaN", () => {
  expect(calcTempo("One Hundred", 20)).toBe(NaN)
  expect(calcTempo(NaN, 30)).toBe(NaN);
})

//
// averageTempo()
//

test("expect averageTempo to be a function", () => {
  expectTypeOf(averageTempo).toBeFunction();
});

test("Calculates average tempo of 120", () => {
  expect(averageTempo(120, [120,125,115,120])).toBe(120);
}) 

//
// tempoEvent()
//

test("tempoEvent is a function", () => {
  expectTypeOf(tempoEvent).toBeFunction();
});