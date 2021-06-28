# commitlint configuration

**Extendable** [commitlint] configuration.

## Usage

1. Install it firstly with the Node.JS package manager of your choice.\
   Example:

```sh
pnpm install --save-dev commitlint @xeho91/commitlint-config
```

2. Create a **[commitlint configuration file]**.
   Example:

```js
// commitlintrc.(c)js

const config = {
	extends: ["@xeho91/commitlint-config"]
};

module.exports = config;
```

[commitlint]: https://github.com/conventional-changelog/commitlint
[commitlint configuration file]: https://commitlint.js.org/#/reference-configuration
