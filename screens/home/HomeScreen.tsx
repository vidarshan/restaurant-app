import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import CustomCard from '../../components/CustomCard';
import {IHomeScreenProps} from '../../models/IHomeScreen';
import {cardbgColor} from '../../styles/GlobalStyles';
import {homeStyles} from '../../styles/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen: React.FC<IHomeScreenProps> = ({navigation}) => {
  const data = [
    {
      name: 'Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '4 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 3.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger1.png'),
      vegan: false,
      orders: 8,
      rating: 4.7,
      description: 'A special Burger with extra goodies.',
      ordersThisWeek: 8,
    },
    {
      name: 'Whopper Sandwich',
      sizes: [
        {size: '2 Layer', content: 1, price: 1.0},
        {size: '3 Layer', content: 2, price: 2.0},
        {size: '4 Layer', content: 3, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 4.5,
      foodType: 'Sandwitch',
      image: require('../../assets/images/sandwitch1.png'),
      vegan: false,
      orders: 3,
      rating: 5.0,
      description: 'A special sandwitch with extra goodies.',
      ordersThisWeek: 3,
    },
    {
      name: 'Whopper with Cheese',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 5.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger2.png'),
      vegan: false,
      orders: 7,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Bacon and Cheese Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 4.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger3.png'),
      vegan: false,
      orders: 1,
      rating: 4.5,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 1,
    },
    {
      name: 'Double Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 10.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger4.png'),
      vegan: false,
      orders: 7,
      rating: 4.2,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Double Whopper with Cheese',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 12.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger5.png'),
      vegan: false,
      orders: 8,
      rating: 5.0,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 8,
    },
    {
      name: 'Triple Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 15.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger6.png'),
      vegan: false,
      orders: 2,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 2,
    },
    {
      name: 'Triple Whopper with Cheese',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 17.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger7.png'),
      vegan: false,
      orders: 7,
      rating: 4.5,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Bacon King',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 8.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger1.png'),
      vegan: false,
      orders: 5,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 5,
    },
    {
      name: 'Double Whopper Bacon King',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 9.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger8.png'),
      vegan: false,
      orders: 7,
      rating: 5.0,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Rodeo Burger',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 3.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger2.png'),
      vegan: false,
      orders: 7,
      rating: 4.9,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Big King',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 10.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger9.png'),
      vegan: false,
      orders: 7,
      rating: 4.6,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Junior Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 9.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger10.png'),
      vegan: false,
      orders: 1,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 1,
    },
    {
      name: 'Whopper Junior',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 7.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger11.png'),
      vegan: false,
      orders: 3,
      rating: 4.4,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 3,
    },
    {
      name: 'Jr Whopper',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 7.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger3.png'),
      vegan: false,
      orders: 7,
      rating: 4.4,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Whopper Jr',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      foodType: 'Burger',
      price: 4.5,
      image: require('../../assets/images/burger12.png'),
      vegan: false,
      orders: 7,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Chicken Junior',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 3.25,
      foodType: 'Burger',
      image: require('../../assets/images/burger13.png'),
      vegan: false,
      orders: 7,
      rating: 4.0,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Chicken Jr',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 5.25,
      foodType: 'Burger',
      image: require('../../assets/images/burger14.png'),
      vegan: false,
      orders: 7,
      rating: 4.8,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Spicy Chicken Junior',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 6.75,
      foodType: 'Burger',
      image: require('../../assets/images/burger15.png'),
      vegan: false,
      orders: 7,
      rating: 4.6,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Spicy Chicken Jr',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 3.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger16.png'),
      vegan: false,
      orders: 7,
      rating: 4.6,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Veggie Burger',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 7.5,
      foodType: 'Burger',
      image: require('../../assets/images/burger7.png'),
      vegan: false,
      orders: 7,
      rating: 4.2,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'BK Veggie Burger',
      sizes: [
        {size: '2 Ounce', content: 1, price: 1.0},
        {size: '3 Ounce', content: 1, price: 2.0},
        {size: '3 Ounce', content: 1, price: 3.0},
      ],
      addons: [
        {addOnName: '🥗Salad', addOnPrice: 0.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 4.0,
      foodType: 'Burger',
      image: require('../../assets/images/burger11.png'),
      vegan: false,
      orders: 7,
      rating: 4.1,
      description: 'A special burger with extra goodies.',
      ordersThisWeek: 7,
    },
    {
      name: 'Chicken Burrito',
      foodType: 'Burrito',
      sizes: [
        {size: '1 Pcs.', content: 1, price: 1.0},
        {size: '2 Pcs.', content: 2, price: 2.0},
        {size: '3 Pcs.', content: 3, price: 3.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 9.5,
      image: require('../../assets/images/burrito1.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best burrito with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Steak Burrito',
      foodType: 'Burrito',
      sizes: [
        {size: '1 Pcs.', content: 1, price: 1.0},
        {size: '2 Pcs.', content: 2, price: 2.0},
        {size: '3 Pcs.', content: 3, price: 3.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 9.25,
      image: require('../../assets/images/burrito2.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best burrito with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Carnitas Burrito',
      foodType: 'Burrito',
      sizes: [
        {size: '1 Pcs.', content: 1, price: 1.0},
        {size: '2 Pcs.', content: 2, price: 2.0},
        {size: '3 Pcs.', content: 3, price: 3.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 10.0,
      image: require('../../assets/images/burrito3.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best burrito with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Barbacoa Burrito',
      foodType: 'Burrito',
      price: 9.0,
      image: require('../../assets/images/burrito4.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best burrito with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Chorizo Burrito',
      foodType: 'Burrito',
      sizes: [
        {size: '1 Pcs.', content: 1, price: 1.0},
        {size: '2 Pcs.', content: 2, price: 2.0},
        {size: '3 Pcs.', content: 3, price: 3.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 10.75,
      image: require('../../assets/images/burrito5.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best burrito with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Chicken Corn Tortilla Taco',
      foodType: 'Taco',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 6.0,
      image: require('../../assets/images/taco1.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best taco with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Chicken Flour Tortilla Taco',
      foodType: 'Taco',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 7.0,
      image: require('../../assets/images/taco2.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best Tacos with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Steak Corn Tortilla Taco',
      foodType: 'Taco',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 6.25,
      image: require('../../assets/images/taco3.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best Tacos with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Steak Flour Tortilla Taco',
      foodType: 'Taco',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 6.75,
      image: require('../../assets/images/taco4.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best Tacos with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Carnitas Corn Tortilla Taco',
      foodType: 'Taco',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 6.0,
      image: require('../../assets/images/taco1.png'),
      vegan: false,
      orders: 7,
      rating: 4.7,
      description: 'Best Tacos with many addons',
      ordersThisWeek: 7,
    },
    {
      name: 'Original Recipe Chicken Drumstick',
      foodType: 'Chicken',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 11.0,
      image: require('../../assets/images/chicken1.png'),
      vegan: false,
      orders: 7,
      rating: 4.3,
      description: 'Best Chicken with your desired taste',
      ordersThisWeek: 7,
    },
    {
      name: 'Original Recipe Chicken Thigh',
      foodType: 'Chicken',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 12.5,
      image: require('../../assets/images/chicken2.png'),
      vegan: false,
      orders: 7,
      rating: 4.9,
      description: 'Best Chicken with your desired taste',
      ordersThisWeek: 7,
    },
    {
      name: 'Original Recipe Chicken Whole Wing',
      foodType: 'Chicken',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 13.25,
      image: require('../../assets/images/chicken3.png'),
      vegan: false,
      orders: 7,
      rating: 4.6,
      description: 'Best Chicken with your desired taste',
      ordersThisWeek: 7,
    },
    {
      name: 'Extra Crispy Chicken',
      foodType: 'Chicken',
      sizes: [
        {size: '3 Pcs.', content: 3, price: 2.0},
        {size: '5 Pcs.', content: 5, price: 3.0},
        {size: '7 Pcs.', content: 7, price: 4.0},
      ],
      addons: [
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🍅Sauce', addOnPrice: 2.0},
        {addOnName: '🍟Fries', addOnPrice: 1.5},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
      ],
      price: 5.75,
      image: require('../../assets/images/chicken4.png'),
      vegan: false,
      orders: 7,
      rating: 4.8,
      description: 'Best Chicken with your desired taste',
      ordersThisWeek: 7,
    },
    {
      name: 'Pepperoni and Sausage',
      foodType: 'Pizza',
      sizes: [
        {size: 'Small', content: 4, price: 5.0},
        {size: 'Medium', content: 6, price: 7.0},
        {size: 'Large', content: 8, price: 9.0},
      ],
      addons: [
        {addOnName: '🍍Pineapple', addOnPrice: 2.0},
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🌽Corn', addOnPrice: 1.0},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥜Peanuts', addOnPrice: 1.0},
      ],
      price: 20.0,
      image: require('../../assets/images/pizza1.png'),
      vegan: false,
      orders: 6,
      rating: 4.8,
      description: 'Best pizza with taste like no other',
      ordersThisWeek: 6,
    },
    {
      name: 'Garden Fresh',
      foodType: 'Pizza',
      sizes: [
        {size: 'Small', content: 4, price: 5.0},
        {size: 'Medium', content: 6, price: 7.0},
        {size: 'Large', content: 8, price: 9.0},
      ],
      addons: [
        {addOnName: '🍍Pineapple', addOnPrice: 2.0},
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🌽Corn', addOnPrice: 1.0},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥜Peanuts', addOnPrice: 1.0},
      ],
      price: 30.0,
      image: require('../../assets/images/pizza2.png'),
      vegan: false,
      orders: 10,
      rating: 4.0,
      description: 'Best pizza with taste like no other',
      ordersThisWeek: 10,
    },
    {
      name: 'Spinach and Feta',
      foodType: 'Pizza',
      sizes: [
        {size: 'Small', content: 4, price: 5.0},
        {size: 'Medium', content: 6, price: 7.0},
        {size: 'Large', content: 8, price: 9.0},
      ],
      addons: [
        {addOnName: '🍍Pineapple', addOnPrice: 2.0},
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🌽Corn', addOnPrice: 1.0},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥜Peanuts', addOnPrice: 1.0},
      ],
      price: 40.0,
      image: require('../../assets/images/pizza3.png'),
      vegan: true,
      orders: 6,
      rating: 4.8,
      description: 'Best pizza with taste like no other',
      ordersThisWeek: 6,
    },
    {
      name: 'Philly Cheese Steak',
      foodType: 'Pizza',
      sizes: [
        {size: 'Small', content: 4, price: 5.0},
        {size: 'Medium', content: 6, price: 7.0},
        {size: 'Large', content: 8, price: 9.0},
      ],
      addons: [
        {addOnName: '🍍Pineapple', addOnPrice: 2.0},
        {addOnName: '🌶️Chilli', addOnPrice: 1.25},
        {addOnName: '🌽Corn', addOnPrice: 1.0},
        {addOnName: '🥢Utensils', addOnPrice: 0.25},
        {addOnName: '🧀Cheese', addOnPrice: 1.5},
        {addOnName: '🥜Peanuts', addOnPrice: 1.0},
      ],
      price: 35.5,
      image: require('../../assets/images/pizza4.png'),
      vegan: true,
      orders: 6,
      rating: 4.8,
      description: 'Best pizza with taste like no other',
      ordersThisWeek: 6,
    },
  ];

  const categories = [
    'Pizza',
    'Chicken',
    'Taco',
    'Burrito',
    'Burger',
    'Sandwitch',
  ];

  return (
    <SafeAreaView style={homeStyles().container}>
      {/* add key */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 'auto',
          backgroundColor: cardbgColor,
          borderRadius: 8,
          margin: 5,
          paddingLeft: 10,
        }}>
        <Icon
          style={{backgroundColor: cardbgColor}}
          name="search"
          size={12}
          color="white"
        />
        <TextInput
          placeholderTextColor="white"
          style={{
            flex: 1,
            backgroundColor: cardbgColor,
            borderRadius: 8,
            padding: 10,
            color: 'white',
          }}
          placeholder="Search for meals..."
        />
      </View>
      <View>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            overflow: 'scroll',
          }}>
          {categories.map(category => (
            <TouchableHighlight
              style={{
                backgroundColor: cardbgColor,
                padding: 8,
                margin: 3,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white'}}>{category}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CustomCard navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
