const createTestCafe = require('testcafe');
let testcafe = null;

const src = process.argv

//['PlayGround.js']

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(src)
            .browsers(['chrome', 'safari', 'firefox'])
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });