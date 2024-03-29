import { expect, test } from 'vitest'

import * as general from './general'
import * as board from './board'

test('Test intersection', () => {
    const line1 = {x1: 5, y1: 0, x2: 5, y2: 10}
    const line2 = {x1: 0, y1: 5, x2: 10, y2: 5}

    expect( general.intersects(line1, line2) ).toBeTruthy()
})

test('Test parrell', () => {
    const line1 = {x1: 5, y1: 0, x2: 10, y2: 5}
    const line2 = {x1: 0, y1: 5, x2: 5, y2: 10}

    expect( general.intersects(line1, line2) ).toBeFalsy()
})

test('Test infinte intersection', () => {
    const line1 = {x1: 0, y1: 5, x2: 5, y2: 5}
    const line2 = {x1: 5, y1: 0, x2: 10, y2: 5}

    expect( general.intersects(line1, line2) ).toBeFalsy()
})

test('Test infinte intersection 2', () => {
    const line1 = {x1: 5, y1: 6, x2: 5, y2: 10}
    const line2 = {x1: 6, y1: 5, x2: 10, y2: 5}

    expect( general.intersects(line1, line2) ).toBeFalsy()
})

test("count single intersection line", () => {
    const line1 = {x1: 0, y1: 0, x2: 10, y2: 10}
    const lines = [{x1: 0, y1: 10, x2: 10, y2: 0}]

    expect( general.countIntersects(line1, lines) ).toBe(1)
})

test("count intersection square", () => {
    const line1 = {x1: 5, y1: 5, x2: -1, y2: 5}
    const lines = [
        {x1: 0, y1: 0, x2: 10, y2: 0},
        {x1: 10, y1: 0, x2: 10, y2: 10},
        {x1: 10, y1: 10, x2: 0, y2: 10},
        {x1: 0, y1: 10, x2: 0, y2: 0},
    ]

    expect( general.countIntersects(line1, lines) ).toBe(1)
})

test("destructure question object", () => {
    const input = {a: [{answer: "apple", question: "its a red fruit"}], b: [{answer: "bannana", question: "its normally in a buntch on a tree"}]}
    const expected = [{answer: "apple", question: "its a red fruit"}, {answer: "bannana", question: "its normally in a buntch on a tree"}]

    expect( general.destructureQuestions(input) ).toStrictEqual(expected)
})

test("structure question object", () => {
    const input = [{answer: "apple", question: "its a red fruit"}, {answer: "bannana", question: "its normally in a buntch on a tree"}]
    const expected = {a: [{answer: "apple", question: "its a red fruit"}], b: [{answer: "bannana", question: "its normally in a buntch on a tree"}]}

    expect( general.structureQuestions(input) ).toStrictEqual(expected)
})