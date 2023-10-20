import assert from "node:assert"
import test from "node:test"

import { getFile, parseMarkdownLinks } from "./index.mjs"

import packageJSON from "./package.json" assert {
  type: "json"
}

test.describe("getFile()", () => {
  test.it("should get read an existing file", async () => {
    const sut = await getFile("./package.json")
    const json = JSON.parse(sut.file)

    assert.equal(json.name, packageJSON.name)
    assert.equal(json.version, packageJSON.version)
    assert.equal(json.description, packageJSON.description)
  })

  test.it("should return error when reading non-existent file", async () => {
    const sut = await getFile("./this-does-not-exist.ts")

    assert.notEqual(sut, undefined)
  })
})

test.describe("parseMarkdownLinks()", () => {
  test.it("should match all links in markdown format", () => {
    const sut = parseMarkdownLinks(`
      # Hello Test

      [Ref](https://google.com)
      [Cats](https://cats.com)
    `)

    assert.deepStrictEqual(sut, [
      { Ref: "https://google.com" },
      { Cats: "https://cats.com" },
    ])
  })

  test.it("should return empty when there are no links on the file", () => {
    const sut = parseMarkdownLinks(`
      # Hello Test

      This is a starting char '[' this is another ']'
    `)

    assert.deepStrictEqual(sut, [])
  })
})