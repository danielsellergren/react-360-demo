import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  View,
  AmbientLight
} from 'react-360';
import Entity from 'Entity';

class Duck extends React.Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <Entity 
        source={{
          gltf2: asset('Duck/Duck.gltf')
        }}
        style={{
          transform: [
            { translate: [0, -1, -0.75] },
            { rotateX: 0.0 },
            { rotateY: 290.0 },
            { rotateZ: 0.0 },
            { scaleX: 1.0 },
            { scaleY: 1.0 },
            { scaleZ: 1.0 },
          ]
        }}
      />
    )
  }
}

export default class ReactRvaDemo extends React.Component {
  componentDidMount() {
    
  }

  componentDidUpdate() {
    console.log(this.filter(function (p) {
      return typeof Math[p] === 'function';
    }));  
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={1} />
        <Duck />
      </View>
    );
  }
};

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('ReactRvaDemo', () => ReactRvaDemo);
