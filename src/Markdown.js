// @flow
import * as React from 'react';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs'; // todo: use prism babel plugin to reduce load
import 'prismjs/themes/prism.css';

import './github-markdown.css';
import { cleanTemplate } from './cleanTemplate';

const styles = {
  root: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    overflowY: 'scroll'
  },
  container: {
    marginBottom: '1rem'
  }
};

type Props = {
  source?: string,
  children?: React.Node
};

export default class Markdown extends React.Component<Props> {
  md: MarkdownIt;

  constructor(props: Props) {
    super(props);

    this.md = new MarkdownIt({
      html: true,
      xhtmlOut: true,
      highlight: (str, lang) => {
        if (lang) {
          try {
            return Prism.highlight(str, Prism.languages[lang], lang);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }
        return ''; // use external default escaping
      }
    });
  }

  content() {
    if (this.props.source) {
      return (
        <span
          className="markdown-body"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: this.md.render(cleanTemplate(this.props.source)) }}
        />
      );
    }

    return React.Children.map(this.props.children, child => {
      if (typeof child === 'string') {
        return (
          /* eslint-disable-next-line react/no-danger */
          <span
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: this.md.render(cleanTemplate(child)) }}
          />
        );
      }

      return <div style={styles.container}>{child}</div>;
    });
  }

  render() {
    return <div style={styles.root}>{this.content()}</div>;
  }
}
