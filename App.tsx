import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from './Components/Homescreen'

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Homescreen />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})