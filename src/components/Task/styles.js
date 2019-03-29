import { StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#aaa'
  },
  checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%'
  },
  pending: {
    borderWidth: 1,
    height: 25,
    width: 25,
    borderRadius: 15,
    borderColor: '#555'
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12
  },
  exclude: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  excludeText: {
    fontFamily: commonStyles.fontFamily,
    color: 'white',
    fontSize: 20,
    margin: 10
  }
})

export default styles
