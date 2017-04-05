// inject this in certain conditions
document.write('<link rel="import" href="test-fixture.html">');
// by injecting an "empty" script right after, we give time to
// Custom Elements to upgrade.
// document.write('<script>void(0)</script>');