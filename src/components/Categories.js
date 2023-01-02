import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import {SIZES} from "../../constants";

const Categories = () => {
  return (
    <View style={{paddingTop: 60}}>
      <Text style={{fontSize: SIZES.h1, fontWeight: "bold"}}>
        Hey,
      </Text>
      <Text style={{fontSize: SIZES.h2}}>
        what's up?
      </Text>

      {
        Categories.map(cat => {
          <TouchableHighlight>
           
          </TouchableHighlight>
        })
      }
    </View>
  );
};

export default Categories;