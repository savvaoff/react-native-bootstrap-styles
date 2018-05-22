# react-native-bootstrap-styles
Bootstrap style library for React Native  

Original class names are transformed from "dashed" to "camelcase" style, for example: `text-center` to `textCenter` and `my-sm-4` to 'mySm4'. Also all the contants (variables in terms of Bootstrap) could be accessible in templates. It helps to make custom tweaks preserving styling guidelines, for example: {fontSize: 10 * FONT_SIZE_BASE}.


```
import React, { Component } from 'react';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { View, Text } from 'react-native';

const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const s = styles = bootstrapStyleSheet.create();
const c = constants = bootstrapStyleSheet.constants;

class Hello extends Component {

  render() {
    return (
      <View style={[s.body]}>
        <View style={[s.container, s.h100, s.justifyContentCenter]}>
          <Text style={[s.text, s.h3, s.textPrimary, s.myXs1, s.myMd3]}>Hello world!</Text>
          <Text style={[s.text, s.py3, {fontSize: 5 * c.REM}]}>🤓🚀🚀🚀</Text>
        </View>
      </View>
    );
  }
}
```