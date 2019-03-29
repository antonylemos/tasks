import { StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.default
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.default,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 15
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    width: '90%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default styles
