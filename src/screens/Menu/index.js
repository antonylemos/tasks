import React from 'react'

import {
  View,
  ScrollView,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'

import { Gravatar } from 'react-native-gravatar'
import { DrawerItems } from 'react-navigation'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default props => {
  const logout = () => {
    delete axios.defaults.headers.common['Authorization']

    AsyncStorage.removeItem('userData')

    props.navigation.navigate('Loading')
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Gravatar
          style={styles.avatar}
          options={{
            email: props.navigation.getParam('email'),
            secure: true
          }}
        />
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
            <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
          </View>
          <TouchableOpacity onPress={logout}>
            <View style={styles.logoutIcon}>
              <Icon
                name='sign-out'
                size={30}
                color='#800'
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  )
}
