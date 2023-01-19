# nanostring
A super simple random string generator. An alternative to `nanoid` which lately became notoriously difficult to import.

## How to use

Installation:

```
npm i nanostring
```

Import:

```
import * as nanostring from 'nanostring';
```

Or:

```
const nanostring = require('nanostring').default;
```

Usage:

```
nanostring(length: 16, args: { lowercase: true, uppercase: false,  numbers: true });
```

By default, `nanostring()` will give you a random string of 16 lowercase letters and numbers.

Specify the length as: `nanostring(8)` to change the length. Boundaries are 1 to 65535.

The arguments object can change the contents of the string. If you turn off all three, you'll get question marks.
