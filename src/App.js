import React, { Component } from 'react';

import Markdown from './Markdown';
import Playground from './Playground';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <Markdown styles={{ margin: 0, pading: 0 }}>
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
    );
  }
}

export default App;
