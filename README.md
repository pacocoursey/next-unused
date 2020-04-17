# next-unused

next-unused is an easy way to find unused files in your [Next.js](https://github.com/zeit/next.js) project.

<br />

## Installation

Make sure you install as a `devDependency`, otherwise you will add 60mb+ to your build.

```
$ yarn add next-unused -D
```

<br />

### Usage

In `package.json`, add a script to find unused files:

```json
"scripts": {
  "find:unused": "next-unused"
}
```

Run the script to list any unused files: `yarn find:unused`.

### Configuration

Add a property to your `package.json` to configure next-unused:

```json
{
  "next-unused": {
    "alias": {},
    "include": [],
    "exclude": [],
    "entrypoints": []
  }
}
```

| Property      | Type     | Default   | Description                                                            |
| ------------- | -------- | --------- | ---------------------------------------------------------------------- |
| `debug`       | boolean  | `false`    | turn on debug messages                                                 |
| `alias`       | object   | `{}`        | import aliases in webpack format (`{ "@components": "components/" }`) |
| `include`     | string[] | `['pages']` | list of directories to search through. `pages` is always included      |
| `exclude`     | string[] | `[]`        | array of RegExp that exclude matching filenames                        |
| `entrypoints` | string[] | `['pages']` | list of directories to use as entrypoints. `pages` is always included  |

### Credits

Shu and Luc wrote the initial version of this script.

- [Shu](https://twitter.com/shuding_)
- [Luc](https://twitter.com/lucleray)
