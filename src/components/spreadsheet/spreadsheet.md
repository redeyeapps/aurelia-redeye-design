## `<re-spreadsheet></re-spreadsheet>`

The spreadsheet component displays a list of data in a table depending on the given column configurations.


The attributes available

| attributes | type     | default | description                                               |
|------------|----------|---------|-----------------------------------------------------------|
| data       | [Object] | []      | The data to be displayed see (data)[#data] section        |
| columns    | [Object] | []      | The column configuration, see (columns)[#columns] section |
| loading    | boolean  | false   | Whether or not data is being loaded                       |

### Data

The given data to display in the spreadsheet. Each entry in the array will be turned into a row in the spreadsheet. The minimum format for each row is as below:

```ts
{
  id: string,           // The id of the row
  isFavourite: boolean, // Whether this row has been favourited or not
  isSelected: boolean   // Whether this row is currently being selected
}
```

### Columns

The columns of the spreadsheet are adjusted based on a given configuration. The configuration object for each column are as follows:

```js
{
  type: string,         // The type (see below for more types)
  key: string,          // the key for the value in the data set, e.g. name or address.suburb
  label: string,        // the label to give the column heading
  dir:  'asc' || 'desc' // the current sorting direction
  element: viewModel    // optional, required if type is custom
}
```

| Column Type | description                                       |
|-------------|---------------------------------------------------|
| string      | Display as string                                 |
| select      | a select box to choose the entire row with        |
| favourite   | a favourite star to favourite the entire row with |
| date        | Date formatted using `date-fns`                   |
| custom      | a custom component, using `compose`, so must add an additional `element` in the config which will be a custom view model for this item |

An example of a custom view-model that can be used for the custom column type:

```js
// Example of the view model, when using a custom component
// As you can see, the row or column is provided straight in and can be used
@containerless()
@inlineView('<template><a route-href="route: templates_view; params.bind: { id: row.id }">${column.value}</a></template>')
class TemplateViewLink {}
```

### Events

The component emits certain HTML Events

#### `spreadsheet-heading-click`

Emitted when the one of the headings in the spreadsheet is clicked. This could be used to determine the sorting direction.

#### `favourite-click`

Emitted when the favourite column is toggled for that row. The details of the event is as below:

```js
{
  id: 'id of the row',
  isFavourite: true // Boolean
}
```

#### `select-click`

Emitted when the selection column is toggled for that row. The details of the event is as below:

```js
{
  id: 'id of the row',
  isSelected: true // Boolean
}
```

#### `scroll-end`

Emitted when the spreadsheet has scrolled to the end. This requires the component to be scrollable using `CSS`. Useful for when creating an infinity scroll for the spreadsheet.