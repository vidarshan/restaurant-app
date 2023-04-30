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
// import {cardbgColor} from '../../styles/GlobalStyles';
import {homeStyles} from '../../styles/HomeScreen';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCategories,
  setMeals,
  searchMeals,
  searchCategory,
} from '../../redux/meals';
import {meals as mealsListFromDisk} from '../../data/meals';
import {categories as categoriesFromDisk} from '../../data/categories';
import WebHeader from '../../components/WebHeader';
import {FaSearch} from 'react-icons/fa';

const HomeScreen: React.FC<IHomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {mealsList, categoriesList, selectedCategory} = useSelector(
    (state: RootState) => state.mealsList,
  );

  const filterByCategory = (selected: boolean, category: string) => {
    if (selected) {
      dispatch(searchCategory('All'));
    } else {
      dispatch(searchCategory(category));
    }
  };

  useEffect(() => {
    dispatch(setMeals(mealsListFromDisk));
    dispatch(setCategories(categoriesFromDisk));
  }, [dispatch]);

  return (
    <SafeAreaView style={homeStyles().container}>
      <WebHeader
        header="Meals"
        type="dual"
        leftPath="/user"
        rightPath="/oven"
      />
      <View style={homeStyles().searchListContainer}>
        <FaSearch color="#fff" />
        <TextInput
          placeholderTextColor="white"
          style={homeStyles().searchBar}
          placeholder="Search for meals..."
          onChangeText={search => dispatch(searchMeals(search))}
        />
      </View>
      <View>
        <ScrollView horizontal style={homeStyles().scrollCategories}>
          {categoriesList.map((category: any) => (
            <TouchableHighlight
              key={category}
              style={
                selectedCategory === category
                  ? homeStyles().selectedChip
                  : homeStyles().chip
              }
              onPress={() =>
                filterByCategory(selectedCategory === category, category)
              }>
              <Text
                style={
                  selectedCategory === category
                    ? homeStyles().selectedChipText
                    : homeStyles().chipText
                }>
                {category}
              </Text>
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
