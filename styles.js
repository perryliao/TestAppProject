import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    // marginLeft: 20,
    // marginRight: 40,
    // padding: 10,
    textAlign: 'center',
    fontSize: 20
  },
  texts: {
    color: 'black',
    fontSize: 12,
    height: 16,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40
  },
  textInput: {
    height: 40,
    paddingLeft: 40,
    marginRight: 40,
    fontSize: 12
  },
  errorMessage: {
    color: 'red',
    padding: 10,
    fontSize: 12
  },
  validMessage: {
    color: 'green',
    padding: 10,
    fontSize: 12
  },
  button: {
    borderWidth: 1,
    paddingBottom: 40,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  },
  buttonText: {
    padding: 11,
    fontSize: 12
  }
});
