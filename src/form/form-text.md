## `<re-form-text>`

This is the form text component, which is probably one of the most used form component.

Here are the options that you can use:

| option        | type    | default | description |
|---------------|---------|---------|-------------|
| label         | string  | null    | Label for the form |
| name          | string  | null    | Name for the form  |
| placeholder   | string  | null    | Placeholder for the form |
| disabled      | boolean | false   | HTML5 disabled |
| readonly      | boolean | false   | HTML5 readonly |
| inline        | boolean | false   | Set form to be inline or not |
| hint          | string  | null    | Hit for the form |
| action-href   | string  | null    | The link for the action to go to |
| action-label  | string  | null    | The label for the action |
| value         | string  | null    | The value of the text |
| maxlength     | int     | null    | HTML5 maxlength |
| type          | string  | text    | HTML5 type, also used for some default validation | 
| pattern       | RegExp  | null    | Regex pattern to validate against |
| pattern-error | string  | null    | Error to display if pattern does not match |
| validated     | boolean | null    | Whether or not it is validated |