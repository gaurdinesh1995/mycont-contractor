import React from 'react';
import PropTypes from 'prop-types';
import {createBox, createText} from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {palette} from '../Theme/Index';
const {width} = Dimensions.get('window');
const Box = createBox();
const Text = createText();
const TextInputBase = createBox(RNTextInput);
const SearchIcon = require('../../assets/Search/search.png');

const Search = ({
  onChangeText,
  value,
  title,
  showErrorField,
  errorText,
  right,
  style,
  ...props
}) => {
  return (
    <Box style={styles.container}>
      <TextInputBase
        {...props}
        style={[
          {
            backgroundColor: showErrorField ? 'white' : palette.tertiary,
          },
          styles.input,
          style,
        ]}
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
      />
      {right() ? right() : null}
    </Box>
  );
};
export default Search;

Search.propTypes = {
  title: PropTypes.string,
  right: PropTypes.func,
  renderLeft: PropTypes.func,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

Search.defaultProps = {
  title: '',
  showErrorField: false,
  onChangeText: () => {},
  right: () => {},
  value: '',
  style: {},
};

const styles = StyleSheet.create({
  error: {
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'flex-end',
  },
  right: {right: 35},
  title: {marginBottom: 10},
  input: {
    paddingLeft: 10,
    marginHorizontal: 20,
    height: 48,
    width: width - 40,
    borderRadius: 10,
  },
  container: {flexDirection: 'row', flex: 1, alignItems: 'center'},
});
