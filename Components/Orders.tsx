import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Entypo';

export default function Orders() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Container 1 */}
            <View style={styles.container1}>
              {/* User Profile */}
              <TouchableOpacity>
                <Icons name='user' size={40} color='black' />
              </TouchableOpacity>
              {/* User Name */}
              <Text style={styles.profileText}>Roronoa Zoro</Text>
              {/* Switch button */}
              <Switch
                trackColor={{ false: 'red', true: '#90EE90' }}
                thumbColor={isSwitchOn ? '#fff' : '#fff'}
                ios_backgroundColor="#90EE90"
                onValueChange={toggleSwitch}
                value={isSwitchOn}
                style={styles.switch}
              />
            </View>
            {/* Container 2 */}
            <View style={styles.container2}>
              {/* Order Catagory  */}
              <View style={styles.orderCategory}>
                {/* Pending orders  */}
                <View style={styles.card1}>
                    <Text style={styles.orderText}>Pending orders</Text>
                </View>
                {/* Pending Deliveries  */}
                <TouchableOpacity style={styles.card2}>
                    <Text style={styles.orderText}>Pending Deliveries</Text>
                </TouchableOpacity>
                {/* Completed orders  */}
                <View style={styles.card3}>
                    <Text style={styles.orderText}>Completed orders</Text>
                </View>
              </View>
            </View>
            {/* Container 3  */}
            <View style={styles.container3}>
                {/* Pending orders list  */}
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                        No orders
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                        No orders
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                    5 Pending orders
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                    2 Pending orders
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                        No orders
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        Order No.#11111
                    </Text >
                    <Text style={styles.rowText2}>
                        2 Pending orders
                    </Text>
                </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container1: {
    backgroundColor: '#FFDC52',
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingTop: 30,
  },
  container2: {
    marginTop: -18,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container3: {
    flex: 1,
    marginTop: -5,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
 
  profileText: {
    fontSize: 30,
    fontWeight: '400',
    color: 'black',
    marginTop: 10,
  },
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  orderCategory: {
    height: 130,
    marginTop: -18,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 30,
  },
  card1: {
    height: 80,
    width: 120,
    backgroundColor: '#8F1413',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  card2: {
    height: 80,
    width: 120,
    backgroundColor: '#FD3E00',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  card3: {
    height: 80,
    width: 120,
    backgroundColor: 'green',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  orderText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  row: {
    backgroundColor: '#fff',
    height: 80,
    width: '80%',
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  rowText: {
    fontSize:16,
    fontWeight: '500',
    color: 'black',
  },
  rowText2: {
    fontSize:17,
    fontWeight: '500',
    color: 'red',
  },
});
