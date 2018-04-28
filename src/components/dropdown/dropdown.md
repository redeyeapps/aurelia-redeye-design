## `<re-dropdown></re-dropdown>`

A dropdown item with a button to show the dropdown.

The attributes available

| attributes  | type    | default | description                    |
|-------------|---------|---------|--------------------------------|
| btn-class   | string  | ''      | The class to add to the button |
| badge-count | number  | null    | The number to add to the badge |

Example usage with the menu in the slot

```html
<re-dropdown btn-class="btn btn--success">
  <span slot="button">Dropdown Button</span>
  <div slot="menu">
    <li class="dropdown__menu-item" repeat.for="item of menuItems">
      <a class="display-block" href="${item.link}">${item.title}</a>
    </li>
  </div>
</re-dropdown>
```
