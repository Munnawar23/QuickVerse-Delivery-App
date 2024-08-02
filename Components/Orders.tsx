import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp, RootStackParamList} from '../types';

export default function Orders() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);
  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Ensure 'Profile' is a valid route
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Container 1 */}
            <View style={styles.container1}>
              {/* User Profile */}
              <TouchableOpacity onPress={navigateToProfile}>
                <Ionicons name="person-circle" size={44} color="black" />
              </TouchableOpacity>
              {/* User Name */}
              <Text style={styles.profileText}>Roronoa Zoro</Text>
              {/* Switch button */}
              <Switch
                trackColor={{false: 'red', true: '#90EE90'}}
                thumbColor={isSwitchOn ? '#fff' : '#fff'}
                ios_backgroundColor="#90EE90"
                onValueChange={toggleSwitch}
                value={isSwitchOn}
                style={styles.switch}
              />
            </View>

            {/* Conditionally render the data based on the switch state */}
            {isSwitchOn && (
              <>
                {/* Container 2 */}
                <View style={styles.container2}>
                  {/* Order Category */}
                  <View style={styles.orderCategory}>
                    {/* Pending orders */}
                    <View style={styles.card1}>
                      <Text style={styles.orderText}>Pending Orders</Text>
                    </View>
                    {/* Pending Deliveries */}
                    <TouchableOpacity style={styles.card2}>
                      <Text style={styles.delhiveriesText}>
                        Pending Deliveries
                      </Text>
                    </TouchableOpacity>
                    {/* Completed orders */}
                    <TouchableOpacity style={styles.card3}>
                      <Text style={styles.completedText}>Completed Orders</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Container 3 */}
                <View style={styles.container3}>
                  {/* Pending orders list */}
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>No orders</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>3 Pending Orders</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>2 Pending Orders</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>No Orders</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>No Orders</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Restro Name</Text>
                    <Text style={styles.rowText2}>2 Pending Orders</Text>
                  </View>
                </View>
              </>
            )}
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
    fontSize: 32,
    fontWeight: '400',
    color: '#020202',
    marginTop: -10,
    fontFamily: 'Battambang-Bold', // Applying Battambang font
  },
  switch: {
    transform: [{scaleX: 2}, {scaleY: 2.4}],
    marginTop: -4,
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1, // 1px stroke
    borderColor: '#000', // Black stroke color
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    height: 80,
    width: 120,
    backgroundColor: '#F6DAD0',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1, // 1px stroke
    borderColor: '#000', // Black stroke color
    justifyContent: 'center',
    alignItems: 'center',
  },
  card3: {
    height: 80,
    width: 120,
    backgroundColor: '#F6DAD0',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1, // 1px stroke
    borderColor: '#000', // Black stroke color
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Battambang-Regular', // Applying Battambang font
    lineHeight: 32,
  },
  delhiveriesText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#8F1413',
    textAlign: 'center',
    fontFamily: 'Battambang-Regular', // Applying Battambang font
    lineHeight: 32,
  },
  completedText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 19,
    fontWeight: '500',
    color: '#8F1413',
    textAlign: 'center',
    fontFamily: 'Battambang-Regular', // Applying Battambang font
    lineHeight: 31, // Adjust the line height to reduce vertical spacing
    // Reduce the bottom margin to bring lines closer
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
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Battambang-Regular', // Applying Battambang font
  },
  rowText2: {
    fontSize: 17,
    fontWeight: '500',
    color: 'red',
    fontFamily: 'Battambang-Regular', // Applying Battambang font
  },
});
