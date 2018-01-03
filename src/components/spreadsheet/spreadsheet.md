# Spreadsheet

## Column Config

Column config is an array of different columns consisting of

```json
{
  type: 'string', // The type (see below for more types)
  key: 'template.name', // the key for the value in the data set
  label: 'Template', // the label to give the column heading
  dir:  'asc or desc' // the current sorting direction
  element: 'ViewModel' // optional, required if type is link
}
```

Column Types:
* string - normal string
* select - a select box to choose the entire row with
* favourite - a favourite star to favourite the entire row with
* date - a date formatted using date-fns
* custom - a custom component, using compose, so must add an additional element in the config which will be a custom view model for this item.
```js
// Example of the view model, when using a custom component
// As you can see, the row or column is provided straight in and can be used
@containerless()
@inlineView('<template><a route-href="route: templates_view; params.bind: { id: row.id }">${column.value}</a></template>')
class TemplateViewLink {}
```