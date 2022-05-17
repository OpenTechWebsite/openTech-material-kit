import React from 'react';
import Markdown from 'markdown-to-jsx';

function MarkdownFetch(props) {
  return <Markdown>{props.markdown}</Markdown>;
}

export default MarkdownFetch;
