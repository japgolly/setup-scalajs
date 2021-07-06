# 'Setup Scala.JS' GitHub Action

A GitHub Action to prepare the environment for Scala.JS dev and testing.

* Install `jsdom`
* Install `source-map-support`
* Set `NODE_PATH`

## Requirements

* Call `actions/setup-node` before this action.
* You still need to call `olafurpg/setup-scala` for Scala.

## Inputs

* `jsdom-version` - The `jsdom` version to install. Defaults to `latest`
* `source-map-support-version` - The `source-map-support` version to install. Defaults to `latest`

## Example usage

```yaml
steps:
- uses: actions/checkout@v2
- uses: olafurpg/setup-scala@v12
- uses: actions/setup-node@v2
  with:
    node-version: '16' # or whatever
- uses: japgolly/setup-scalajs@v1
- run: sbt test
```
