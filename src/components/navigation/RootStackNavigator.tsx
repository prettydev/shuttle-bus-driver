import { Colors, IconButton } from 'react-native-paper';
import React, { ReactElement } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthCheck from '../screen/AuthCheck';
import BookingList from '../screen/BookingList';
import ChatScreen from '../screen/ChatScreen';
import CheckScreen from '../screen/CheckScreen';
import Confirm from '../screen/Confirm';
import DashboardScreen from '../screen/DashboardScreen';
import DropoffMap from '../screen/DropoffMap';
import ForgotPassword from '../screen/ForgotPasswordScreen';
import HelpScreen from '../screen/HelpScreen';
import Home from '../screen/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../screen/Login';
import PaymentScreen from '../screen/PaymentScreen';
import PhoneLogin from '../screen/PhoneLogin';
import PickupMap from '../screen/PickupMap';
import Preview from '../screen/Preview';
import ProfileScreen from '../screen/ProfileScreen';
import Register from '../screen/RegisterScreen';
import ReviewScreen from '../screen/ReviewScreen';
import SelectTable from '../screen/SelectTable';
import TrackingScreen from '../screen/TrackingScreen';
import TripDetails from '../screen/TripDetails';
import TripList from '../screen/TripList';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { theme } from '../core/theme';

const AuthStack = createStackNavigator({
  Login: Login,
  PhoneLogin: PhoneLogin,
  Register: Register,
  ForgotPassword: ForgotPassword,
});

const BookingStack = createStackNavigator({
  BookingList: {
    screen: BookingList,
    navigationOptions: ({ navigation }) => ({
      title: 'Booking list',
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Chat with rider',
    }),
  },
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Current trip',
    }),
  },
  Payment: {
    screen: PaymentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
    }),
  },
  CheckList: {
    screen: CheckScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Check riders',
    }),
  },
  Review: {
    screen: ReviewScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Give rider reviews and ratings',
    }),
  },
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My profile',
    }),
  },
});

const HistoryStack = createStackNavigator({
  TripList: {
    screen: TripList,
    navigationOptions: ({ navigation }) => ({
      title: 'Trips history',
    }),
  },
  TripDetails: {
    screen: TripDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Trip details',
    }),
  },
});

const AppStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: (
        <IconButton icon="road-variant" color={theme.colors.icon} size={20} />
      ),
    },
  },
  Bookings: {
    screen: BookingStack,
    navigationOptions: {
      tabBarLabel: 'Bookings',
      tabBarIcon: (
        <IconButton icon="ticket" color={theme.colors.icon} size={20} />
      ),
    },
  },
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      tabBarLabel: 'dashboard',
      tabBarIcon: (
        <IconButton
          icon="view-dashboard-outline"
          color={theme.colors.icon}
          size={20}
        />
      ),
    },
  },
  History: {
    screen: HistoryStack,
    navigationOptions: {
      tabBarLabel: 'history',
      tabBarIcon: (
        <IconButton icon="history" color={theme.colors.icon} size={20} />
      ),
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthCheck: AuthCheck,
    },
    {
      initialRouteName: 'AuthCheck',
    },
  ),
);
