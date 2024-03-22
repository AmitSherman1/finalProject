
import React from 'react';
import { Text } from 'react-native';
import RenderHTML, {TChildrenRenderer} from 'react-native-render-html';

export const htmlToComponents = (html: string) => {
  if (html.indexOf('<') > -1) {
    const renderers = {
      h2: ({TDefaultRenderer, tnode}) => {
        return (
          <Text  style={{marginBottom: 20, textAlign: "right"}}>
            <TChildrenRenderer tchildren={tnode.children} />
          </Text>
        );
      },
      p: ({TDefaultRenderer, tnode}) => {
        return (
          <Text  style={{marginBottom: 20, textAlign: "right"}}>
            <TChildrenRenderer tchildren={tnode.children} />
          </Text>
        );
      },
    };

    return <RenderHTML source={{html}} renderers={renderers} />;
  }

  return html;
};
