import React, {useState, useRef} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {IAddOn} from '../../models/IAddOn';
import {IMealScreen} from '../../models/IMealScreen';
import {IOrder} from '../../redux/oven/models';
import {ISize} from '../../models/ISize';
import {rowTopMargin, bgColor, accentColor} from '../../styles/GlobalStyles';
import {mealScreenStyles} from '../../styles/MealScreen';
import {addToOven as addMealToOven} from '../../redux/oven/index';

const MealScreen: React.FC<IMealScreen> = ({navigation, route}) => {
  const {
    meal: {image, name, description, addons, vegan, sizes, orders},
  } = route.params;

  const dispatch = useDispatch();
  const itemPrice = useRef(sizes[0].price * 1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const addAddOns = (newAddOnName: string, newAddOnPrice: number) => {
    let selectedAddOnList = JSON.parse(JSON.stringify(selectedAddOns));
    const currentItemPrice = itemPrice.current;
    let ifAddOnExists = selectedAddOns.includes(newAddOnName as never);
    if (ifAddOnExists) {
      let indexOfAddOn = selectedAddOns.indexOf(newAddOnName as never);
      selectedAddOnList.splice(indexOfAddOn, 1);
      setSelectedAddOns(selectedAddOnList);
      itemPrice.current = currentItemPrice - newAddOnPrice;
    } else {
      selectedAddOnList.push(newAddOnName);
      setSelectedAddOns(selectedAddOnList);
      itemPrice.current = currentItemPrice + newAddOnPrice;
    }
  };

  const changeSize = (size: ISize) => {
    setSelectedSize(size);
    itemPrice.current = size.price * quantity;
  };

  const increaseDecreaseQuantity = (type: string) => {
    if (type === 'decrease') {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      if (quantity < 10) {
        setQuantity(quantity + 1);
      }
    }
  };

  const addToOven = () => {
    let ovenObj: IOrder;
    ovenObj = {
      id: '',
      status: 'In Progress',
      image,
      name,
      size: selectedSize.size,
      addons: selectedAddOns,
      quantity,
      price: itemPrice.current,
    };
    dispatch(addMealToOven(ovenObj));
    navigation.navigate('Oven');
  };

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
              <TouchableOpacity
                key={index}
                style={mealScreenStyles.optionBtn}
                onPress={() => changeSize(size)}>
                {selectedSize.size === size.size && (
                  <Icon
                    style={mealScreenStyles.selectedIcon}
                    name="check"
                    size={12}
                    color={accentColor}
                  />
                )}

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
              <TouchableOpacity
                key={index}
                style={mealScreenStyles.optionBtn}
                onPress={() => addAddOns(addon.addOnName, addon.addOnPrice)}>
                {selectedAddOns.includes(addon.addOnName as never) && (
                  <Icon
                    style={mealScreenStyles.selectedIcon}
                    name="check"
                    size={12}
                    color={accentColor}
                  />
                )}
                <View style={mealScreenStyles.optionRow}>
                  <Text style={mealScreenStyles.optionText}>
                    {addon.addOnName}
                  </Text>
                  <Text style={mealScreenStyles.optionPriceText}>
                    + ${addon.addOnPrice} / each
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={mealScreenStyles.addToOvenQty}>
          <View style={mealScreenStyles.row}>
            <TouchableOpacity
              style={mealScreenStyles.qtyBtn}
              onPress={() => increaseDecreaseQuantity('increase')}>
              <Icon name="plus" size={16} color={bgColor} />
            </TouchableOpacity>
            <Text style={mealScreenStyles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              style={mealScreenStyles.qtyBtn}
              onPress={() => increaseDecreaseQuantity('decrease')}>
              <Icon name="minus" size={16} color={bgColor} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={mealScreenStyles.btn}
            onPress={() => addToOven()}>
            <Text style={mealScreenStyles.btnText}>Add to Oven</Text>
            <Text style={mealScreenStyles.btnText}>{`$${
              itemPrice.current * quantity
            }`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealScreen;
