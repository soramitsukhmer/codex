#!/usr/bin/env zx

const { chalk } = require("zx")

const CountryCodes = fs.readFileSync('./data/country-codes.json', { encoding: 'utf8' })
/** @type {Array} */
const codes = JSON.parse(CountryCodes)

const interfaceSource = `export interface CountryCode {
    name: string
    dial_code: string
    code: string
}`

console.log(chalk.blue('Building country codes...'))

const generateExport = (code, source) => `export const ${code}: CountryCode = ${JSON.stringify(source)};`
const lines = [interfaceSource]

codes.forEach(item => {
    lines.push(generateExport(item.code, item))
})

fs.writeFileSync('./src/country/index.ts', lines.join('\n'), { encoding: 'utf8' })

console.log(chalk.green('Successfully generated country codes!'))
