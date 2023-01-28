import React, {useEffect} from 'react';
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
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {setCategories, setMeals} from '../../redux/meals';
import {meals as mealsListFromDisk} from '../../data/meals';
import {categories as categoriesFromDisk} from '../../data/categories';

const HomeScreen: React.FC<IHomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {mealsList, categoriesList} = useSelector(
    (state: RootState) => state.mealsList,
  );

  useEffect(() => {
    dispatch(setMeals(mealsListFromDisk));
    dispatch(setCategories(categoriesFromDisk));
  }, [dispatch]);

  return (
    <SafeAreaView style={homeStyles().container}>
      {/* add key */}
      <View style={homeStyles().searchListContainer}>
        <Icon
          style={{backgroundColor: cardbgColor}}
          name="search"
          size={12}
          color="white"
        />
        <TextInput
          placeholderTextColor="white"
          style={homeStyles().searchBar}
          placeholder="Search for meals..."
        />
      </View>
      <View>
        <ScrollView horizontal style={homeStyles().scrollCategories}>
          {categoriesList.map((category: any) => (
            <TouchableHighlight style={homeStyles().chip}>
              <Text style={homeStyles().chipText}>{category}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={mealsList}
        renderItem={({item, index}) => (
          <CustomCard key={index} navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
