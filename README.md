# A Tiny Pattern Library

## Customizing colors and type

1. To pick the font family, open the file `src/_includes/layouts/base.njk` and pick one of `<link>` with corresponding font family.
2. Enable corresponding font family in the CSS file, `src/css/design-tokens.typography.font-family.css`
3. To pick color palette, edit the file `src/css/main.css` and uncomment one of the palette, `design-tokens.colors.primary-01.css`, `design-tokens.colors.primary-02.css`, or `design-tokens.colors.primary-03.css`

## Development

```sh
$ npm install
$ npm dev # Starts development server.
```
