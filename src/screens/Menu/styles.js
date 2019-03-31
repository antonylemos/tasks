import { StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  title: {
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
    paddingTop: 30,
    padding: 10
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: '#aaa',
    borderRadius: 30,
    margin: 10
  },
  name: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 20,
    marginLeft: 10
  },
  email: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoutIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  }
})

export default styles
