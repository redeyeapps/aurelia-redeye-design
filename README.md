# RedEye Design Aurelia

Component Library based on the [RedEye Design Library](https://redeyeapps.github.io/design/).

## Usage

To use this plugin, firstly install this library:

```bash
npm install "git+ssh://git@github.com/redeyeapps/aurelia-redeye-design.git#X.X.X"
```

> `X.X.X` is the version number of the release. Please check this repository for the latest version.

To get the component styling, import in your project as well the CSS from the [RedEye Design Library](https://redeyeapps.github.io/design/).

In your project's `main.ts` file, utilize the plugin.

```ts
export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-redeye-design'), config => {
    config.useAll();
  });

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('main'));
}
```

For documentation on how to use the components individually, see [here](src/components/components.md)

## Development

### NPM

To start, must link the package first.

1. `npm install`
1. `npm run build && npm link aurelia-redeye-design`
1. `cd /path/to/aurelia/app`
1. `npm install --link aurelia-redeye-design`

And when finished.

1. `cd /path/to/aurelia/app`
1. `npm install --unlink aurelia-redeye-design`

### JSPM

To start, must link the package first.

1. `npm install`
1. `npm run build && jspm link github:redeyeapps/aurelia-redeye-design@1.2.1 -y`
1. `cd /path/to/aurelia/app`
1. `jspm install --link aurelia-redeye-design=github:redeyeapps/aurelia-redeye-design@1.2.1`

And when finished.

1. `cd /path/to/aurelia/app`
1. `jspm install --unlink aurelia-redeye-design=github:redeyeapps/aurelia-redeye-design@1.2.1`
