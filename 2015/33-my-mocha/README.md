# My-Mocha

This is a test playground for developing a Mocha JS

### Running

```bash
npm start
```

### Debugging

```bash
npm run-script debug
```

### Testing

For testing I usually run Mocha and index.js against a set file and diff the outputs. If the outputs match, then I consider the two functionally equivalent.

For example

```bash
mocha tests/beforeAfterTestsWithSkip.js > ~/Desktop/mocha.output
node index.js ~/Desktop/my.ouput
opendiff ~/Desktop/mocha.output ~/Desktop/my.output
```
