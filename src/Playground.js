// @flow
import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { cleanTemplate } from './cleanTemplate';

const column = {
  border: '1px solid #eaecef',
  padding: '1rem',
  margin: '1rem 1rem 0 0',
  flex: '1 1 calc(50% - 2rem)'
};

const styles = {
  editor: {
    ...column,
    outline: 'none'
  },
  preview: {
    ...column,
    backgroundColor: '#f6f8fa'
  },
  error: {
    ...column
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    overflow: 'visible',
    flexDirection: 'row'
  }
};

type Props = {
  scope: { [string]: any },
  code: string
};

const Playground = ({ scope, code }: Props) => (
  <LiveProvider mountStylesheet={false} scope={scope} code={cleanTemplate(code)}>
    <div style={styles.wrapper}>
      <LiveEditor style={styles.editor} />
      <LiveError style={styles.error} />
      <LivePreview style={styles.preview} />
    </div>
  </LiveProvider>
);

export default Playground;
