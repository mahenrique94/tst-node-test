# tst-node-test
Writing unit test using default built-in Node.js modules

## QA

### Running all tests at once

```sh
node --test
```

#### Watch mode

```sh
node --test --watch
```

### Running a single test

```sh
node --test ./src/models/account.mjs
```

#### Watch mode

```sh
node --test --watch ./src/models/account.mjs
```

### Mocking modules
The feature to mock modules is still in experimental phase which requires a specific flag `--experimental-test-module-mocks` to run properly.

```sh
node --test --experimental-test-module-mocks
```
