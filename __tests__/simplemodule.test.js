import {simpleFunc,complexFunc} from "../src/SimpleModule";

describe('A simple module', () => {
	test('it should say hello', () => {
		expect(simpleFunc()).toEqual("hello!");
		expect(complexFunc()).toEqual("complex!");
	})
})