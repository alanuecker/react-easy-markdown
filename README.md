# React Easy Markdown
This project was created as an internal tool to provide an easy solution for component documentation. The Playground provides simple interactivity and gives everyone a chance to understand the props.

## code
```jsx
  <Markdown>
    {`
      # Button

      This is a simple button component to interact with the software.

      ### Props
      |prop|value|
      |--|--|
      |label|string|

      ### Interactive Demo

    `}
    <Playground
      scope={{ Button }}
      code={`
        <Button label="Test" />
      `}
    />
  </Markdown>
```

## results

note: for some reasons MarkdownIt did not want to accept the `highlight` option so prism did not work