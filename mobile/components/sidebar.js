import React from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { Image, StyleSheet, ScrollView } from 'react-native'

const CustomeSideBar = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png'
        }}
        style={{
          height: 120,
          width: '100%',
          alignSelf: 'stretch'
        }}
      />
      <Image
        square
        style={{
          height: 80,
          width: 70,
          position: 'absolute',
          alignSelf: 'center',
          top: 65
        }}
        source={{
          uri:
            'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png'
        }}
      />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CustomeSideBar
