# iasedu visual regression testing

## Setup

Before you start, read the [BackstopJS documentation](https://github.com/garris/BackstopJS).

    npm install

## Usage

Execute the script with node:

    node backstop.js
    
Options:

    Usage: node backstop.js --command [string] --suite [string] --url [string] --filter [string]
    
    Options:
      --command  The BackstopJS command: approve, reference, test, or openReport  [string] [required]
      --suite    The test suite to execute (example: iasedu)  [string] [required]
      --url      The base URL  [string] [required]
      --filter   The label filter  [string]
    
    Examples:
      node backstop.js --command test --suite iasedu --url https://www-stage.ias.edu                   Test
      node backstop.js --command test --suite iasedu --url https://www-stage.ias.edu --filter IAS-299  Test (filtered)
      node backstop.js --command approve --suite iasedu --url https://www-stage.ias.edu                Approve changes

## Release Testing

As part of [release management](../docs/developer.md#release-management),
execute the tests below and examine the differences.
    
### Dynamic Content

Some content changes all the time. First, before applying code changes, create
a set of reference images:

    node backstop.js --command reference --suite iasedu-dynamic --url https://www-stage.ias.edu
    
Next, apply code changes. Then test:

    node backstop.js --command test --suite iasedu-dynamic --url https://www-stage.ias.edu
    
These bitmaps are __not__ to be committed.

### Static Content

Some content seldom changes. Test these after applying code changes:

    node backstop.js --command test --suite iasedu --url https://www-stage.ias.edu
    node backstop.js --command test --suite math --url https://www-stage.math.ias.edu
    
It is __mandatory__ to approve then commit changes to static content expected
in the release.

For example, to approve changes from a test run:

    node backstop.js --command approve --suite iasedu --url https://www-stage.ias.edu

## Configuration

Edit suites/* to add or modify tests.

## Troubleshooting

Kill zombie Chrome headless processes:

    pkill -f "(chrome)?(--headless)"
