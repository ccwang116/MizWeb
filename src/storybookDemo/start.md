## step 1
`$npx -p@storybook/cli sb init`
check package.json 
New directory .storybook
## step 2
create component/Button/
` js , css and .stories.js`

## global decorator 
please add preview.js in .storybook directory ,
`add global decorator in it`
so that you don't have to add  the decorator in every stories

## Docs Addon

`yarn add -D @storybook/addon-docs`

## Others
knobs -> change disabled and label
viewport -> see from different device
a11y -> see Accessiblility:Violations,Passes and Incomplete