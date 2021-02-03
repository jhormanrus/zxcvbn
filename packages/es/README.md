# @jhormanrus/zxcvbn-lang-es

The Spanish dictionary and language package for zxcvbn-ts

## Install

#### npm:

`npm install @jhormanrus/zxcvbn-lang-es --save`

## Setup

```js
import zxcvbn from '@zxcvbn-ts/core'
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnEsPackage from '@jhormanrus/zxcvbn-lang-es'

const password = 'somePassword'
const options = {
  translations: zxcvbnEsPackage.translations,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEsPackage.dictionary,
  },
}

zxcvbn(password, options)
```
