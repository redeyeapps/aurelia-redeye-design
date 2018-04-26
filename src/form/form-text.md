## `<re-form-text>`

This is the form text component, which is probably one of the most used form component.

Here are the options that you can use:

| option        | type    | default | description                                       |
|---------------|---------|---------|---------------------------------------------------|
| label         | string  | null    | Label for the form                                |
| name          | string  | null    | Name for the form                                 |
| placeholder   | string  | null    | Placeholder for the form                          |
| disabled      | boolean | false   | HTML5 disabled                                    |
| readonly      | boolean | false   | HTML5 readonly                                    |
| inline        | boolean | false   | Set form to be inline or not                      |
| hint          | string  | null    | Hit for the form                                  |
| action-href   | string  | null    | The link for the action to go to                  |
| action-label  | string  | null    | The label for the action                          |
| value         | string  | null    | The value of the text                             |
| maxlength     | int     | null    | HTML5 maxlength                                   |
| type          | string  | text    | HTML5 type, also used for some default validation | 
| pattern       | RegExp  | null    | Regex pattern to validate against                 |
| pattern-error | string  | null    | Error to display if pattern does not match        |
| validated     | boolean | null    | Whether or not it is validated                    |


### Types

The types to passthrough will firstly be passed onto the HTML element, therefore would need to be a HTML5 Input Type
There are certain types which includes its own validation methods. The default text type allows anything to be validated as long as it has more than 1 character inputted.

* email - This allows most email addresses, we've used this [one](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
* phone - This allows the usage of Australia Phone numbers, we've used this [one](https://ilikekillnerds.com/2014/08/regular-expression-for-validating-australian-phone-numbers-including-landline-and-mobile/)