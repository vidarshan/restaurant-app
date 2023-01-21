import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IAddOn} from '../../models/IAddOn';
import {IMealScreen} from '../../models/IMealScreen';
import {ISize} from '../../models/ISize';
import {rowTopMargin, bgColor} from '../../styles/GlobalStyles';
import {mealScreenStyles} from '../../styles/MealScreen';

const MealScreen: React.FC<IMealScreen> = ({navigation, route}) => {
  const {
    meal: {image, name, description, addons, price, vegan, sizes, orders},
  } = route.params;
  return (
    <ScrollView style={mealScreenStyles.mealScreen}>
      <View style={mealScreenStyles.imgContainer}>
        <Image style={mealScreenStyles.img} source={image} />
      </View>
      <View style={{marginTop: rowTopMargin}}>
        <Text style={mealScreenStyles.title}>{name}</Text>
        <Text style={mealScreenStyles.subTitle}>{description}</Text>
        <View style={mealScreenStyles.summaryRow}>
          <View style={mealScreenStyles.summaryItem}>
            <Icon
              style={mealScreenStyles.selectedIcon}
              name="first-order"
              size={12}
              color="green"
            />
            <Text style={mealScreenStyles.orderVeganText}>{orders} Orders</Text>
          </View>
          <View style={mealScreenStyles.summaryItem}>
            <Icon
              style={mealScreenStyles.selectedIcon}
              name="circle"
              size={12}
              color={vegan ? 'green' : 'red'}
            />
            <Text style={mealScreenStyles.orderVeganText}>
              {vegan ? 'Veg' : 'Non Veg'}
            </Text>
          </View>
        </View>

        <View style={{marginTop: rowTopMargin}}>
          <Text style={mealScreenStyles.subTitle}>Sizes</Text>
          <View style={mealScreenStyles.sizeRow}>
            {sizes.map((size: ISize, index: number) => (
              <TouchableOpacity key={index} style={mealScreenStyles.optionBtn}>
                <Icon
                  style={mealScreenStyles.selectedIcon}
                  name="check"
                  size={12}
                  color="white"
                />
                <Text key={index} style={mealScreenStyles.optionText}>
                  {size.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={mealScreenStyles.rowMargin}>
          <Text style={mealScreenStyles.subTitle}>Extras</Text>
          <View style={mealScreenStyles.addOnRow}>
            {addons.map((addon: IAddOn, index: number) => (
              <TouchableOpacity key={index} style={mealScreenStyles.optionBtn}>
                <Icon
                  style={mealScreenStyles.selectedIcon}
                  name="check"
                  size={12}
                  color="white"
                />
                <Text style={mealScreenStyles.optionText}>
                  {addon.addOnName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={mealScreenStyles.addToOvenQty}>
          <View style={mealScreenStyles.row}>
            <TouchableOpacity style={mealScreenStyles.qtyBtn}>
              <Icon name="plus" size={16} color={bgColor} />
            </TouchableOpacity>
            <Text style={mealScreenStyles.qtyText}>1</Text>
            <TouchableOpacity style={mealScreenStyles.qtyBtn}>
              <Icon name="minus" size={16} color={bgColor} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            // disabled={true}
            style={mealScreenStyles.btn}
            onPress={() => navigation.navigate('Oven')}>
            <Text style={mealScreenStyles.btnText}>Add to Oven</Text>
            <Text style={mealScreenStyles.btnText}>{`$${price}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealScreen;
