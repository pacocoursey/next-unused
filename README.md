# next-unused

next-unused is an easy way to find unused files in your [Next.js](https://github.com/zeit/next.js) project.


## Installation

Install as a `devDependency`:

```
$ yarn add next-unused -D
```

### Usage

In `package.json`, add a script to find unused files:

```json
"scripts": {
  "find:unused": "next-unused"
}
```

Run the script to list any unused files:

```
$ yarn find:unused
```

### Configuration

Add a property to your `package.json` to configure next-unused:

```json
{
  "next-unused": {
    "alias": {},
    "include": [],
    "exclude": [],
    "entrypoints": [],
    "fileExtensions": []
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
| `fileExtensions` | string[] | `['js', 'jsx', 'ts', 'tsx']` | List of file extensions to be searched. `js`, `jsx`, `ts`, and `tsx` are always included. |

### Example

Your Next.js setup looks like this:

```
package.json
├─ pages/
│  ├─ index.js
└─ components/
   ├─ button.js
   └─ image.js
```

And your `pages/index.js` contains:

```js
import Button from '../components/button'

export default () => {
  return (
    <Button>Click me</Button>
  )
}
```

Configure `next-unused` to include the `components` directory in `package.json`:

```json
{
  "next-unused": {
    "include": ["components"]
  }
}
```

Running `next-unused` will output:

```
Found 1 unused file:
components/image.js
```

### Credits

Shu and Luc wrote the initial version of this script.

- [Shu](https://twitter.com/shuding_)
- [Luc](https://twitter.com/lucleray)
