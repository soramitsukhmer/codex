# @soramitsukhmer/codex
The Soramitsu Khmer Codex repo

## Install

```sh
npm install @soramitsukhmer/codex
# or
yarn add @soramitsukhmer/codex
```

## List

- [Country Codes](#country-codes)
- [Currency Codes](#country-codes)
- [Phone number Mask](#phone-number-mask)

## References

### Country Codes

List of country code and dial code.

Data: [data/country-codes.json](data/country-codes.json)

```js
import { KH, US } from '@soramitsukhmer/codex/country'

console.log(KH)

/**
 * {
 *     name: string;
 *     dial_code: string;
 *     code: string;
 * }
 */
```

> Credit: https://gist.github.com/anubhavshrimal/75f6183458db8c453306f93521e93d37


### Currency Codes

Common Currency Codes in JSON

Data: [data/common-currency.json](data/common-currency.json)

```js
import { USD, KHR } from '@soramitsukhmer/codex/currency'

console.log(KHR)

/**
 * {
 *     symbol: string;
 *     name: string;
 *     symbol_native: string;
 *     decimal_digits: number;
 *     rounding: number;
 *     code: string;
 *     name_plural: string;
 * }
 */
```

> Credits: 
> - Common Currency Codes: https://gist.github.com/Fluidbyte/2973986
> - Phone Number Mask: [surajmathe/intl-input-phone](https://github.com/surajmathe/intl-input-phone/blob/master/projects/intl-input-phone/src/lib/intl-input-phone.service.ts)

## License

Licensed under [MIT License](LICENSE).
