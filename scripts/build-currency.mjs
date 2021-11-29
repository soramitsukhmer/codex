#!/usr/bin/env zx

const CommonCurrency = fs.readFileSync('./data/common-currency.json', { encoding: 'utf8'})
const currency = JSON.parse(CommonCurrency)

const interfaceSource = `export interface Currency {
    symbol: string
    name: string
    symbol_native: string
    decimal_digits: number
    rounding: number
    code: string
    name_plural: string
}`

console.log(chalk.blue('Building common currency...'))

const generateExport = (code, source) => `export const ${code}: Currency = ${JSON.stringify(source)};`
const lines = [interfaceSource]

Object.keys(currency).forEach(key => {
    lines.push(generateExport(key, currency[key]))
})

fs.writeFileSync('./src/currency/index.ts', lines.join('\n'), { encoding: 'utf8'})
console.log(chalk.green('Successfully generated common currency!'))
