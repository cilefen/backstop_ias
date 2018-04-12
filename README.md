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
      --command  The BackstopJS command: reference, test, or openReport  [string] [required]
      --suite    The test suite to execute (example: iasedu)  [string] [required]
      --url      The base URL  [string] [required]
      --filter   The label filter  [string]
    
    Examples:
      node backstop.js --command reference --suite iasedu --url https://www.ias.edu                            Reference run
      node backstop.js --command test --suite iasedu --url http://www-stage.ias.edu                            Test run
      node backstop.js --command reference --suite iasedu --url https://www.ias.edu --filter IAS-299           Filtered reference run
      node backstop.js --command reference --suite iasedu --url https://www.ias.edu --filter "give authorize"  Filtered reference run

## Configuration

Edit suites/* to add or modify tests.

## Troubleshooting

Kill zombie Chrome headless processes:

    pkill -f "(chrome)?(--headless)"
