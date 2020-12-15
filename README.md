This repo contains four node projects. 2 current, 2 proposed based on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49914

### Current


- Styled Components Web

```json
{
  "scripts": {
    "tsc": "../node_modules/.bin/tsc",
    "compile": "../node_modules/.bin/tsc --noEmit"
  },
  "dependencies": {
    "@types/node": "^14.14.13",
    "@types/styled-components": "^5.1.5"
  }
}
```

Uses `tsc --init` but I deleted the line of `skipLibChecks` being set to true. 

Does not build out of the box with `skipLibChecks` not set to `true`, nor `types` to `[]`.

- Styled Components React Native

```json
{
  "scripts": {
    "tsc": "../node_modules/.bin/tsc",
    "compile": "../node_modules/.bin/tsc --noEmit"
  },
  "dependencies": {
    "@types/react-native": "^0.63.40",
    "@types/styled-components": "^5.1.5"
  }
}
```

Builds out of the box.

### Proposed

- Styled Components Web


```json
{
  "scripts": {
    "tsc": "../node_modules/.bin/tsc",
    "compile": "../node_modules/.bin/tsc --noEmit"
  },
  "dependencies": {
    "@types/node": "^14.14.13",
    "@types/styled-components": "[me hand editing it to match PR]"
  }
}
```

Builds out of the box.

- Styled Components React Native

```json
{
  "scripts": {
    "tsc": "../node_modules/.bin/tsc",
    "compile": "../node_modules/.bin/tsc --noEmit"
  },
  "dependencies": {
    "@types/react-native": "^0.63.40",
    "@types/styled-components": "[hand edited]",
    "@types/styled-components-react-native": "[hand added]"
  }
}
```

**React Native users need to add `@types/styled-components-react-native"`.**

Then it works out of the box. 

If you don't have it included, you get:

```sh
styled-components-types-tests/proposed_rn on  main [!] is 📦 v1.0.0 via ⬢ v14.15.1 
❯ yarn compile
yarn run v1.22.10
$ ../node_modules/.bin/tsc --noEmit
index.tsx:3:20 - error TS2307: Cannot find module 'styled-components/native' or its corresponding type declarations.

3 import styled from 'styled-components/native';
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error.

```