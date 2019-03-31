import { StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#333',
    marginLeft: 20
  },
  input: {
    marginLeft: 20,
    width: '70%'
  }
})

export default styles
