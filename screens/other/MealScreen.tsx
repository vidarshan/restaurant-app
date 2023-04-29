import React, {useState, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IAddOn} from '../../models/IAddOn';
import {IMealScreen} from '../../models/IMealScreen';
import {IOrder} from '../../redux/oven/models';
import {ISize} from '../../models/ISize';
import {accentColor, bgColor, rowTopMargin} from '../../styles/GlobalStyles';
import {mealScreenStyles} from '../../styles/MealScreen';
import {addOrdertoOven} from '../../redux/oven/index';
import {AppDispatch} from '../../redux/store';
import uuid from 'react-native-uuid';
import {useParams} from 'react-router-dom';
import {getMeal} from '../../utils';
import WebHeader from '../../components/WebHeader';
import {FaCheck, FaPlus, FaMinus, FaCircle, FaCocktail} from 'react-icons/fa';

const MealScreen: React.FC<IMealScreen> = ({navigation}) => {
  const {mealId = ''} = useParams();

  const {name, sizes, addons, image, orders, description, vegan} =
    getMeal(mealId);

  const dispatch = useDispatch<AppDispatch>();
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
      id: uuid.v4(),
      status: 'In Progress',
      image,
      name,
      size: selectedSize,
      addons: selectedAddOns,
      quantity,
      price: itemPrice.current,
    };
    dispatch(addOrdertoOven(ovenObj));
    navigation.navigate('Oven');
  };

  console.log(sizes);

  return (
    <View style={mealScreenStyles.mealScreen}>
      <WebHeader />
      <View style={mealScreenStyles.container}>
        <View style={mealScreenStyles.imgContainer}>
          <Image style={mealScreenStyles.img} source={{uri: image}} />
        </View>
        <View style={{marginTop: rowTopMargin}}>
          <Text style={mealScreenStyles.title}>{name}</Text>
          <Text style={mealScreenStyles.subTitle}>{description}</Text>
          <View style={mealScreenStyles.summaryRow}>
            <View style={mealScreenStyles.summaryItem}>
              <FaCocktail size={8} color={vegan ? 'lightGreen' : 'red'} />
              <Text style={mealScreenStyles.orderVeganText}>
                {orders} Orders
              </Text>
            </View>
            <View style={mealScreenStyles.summaryItem}>
              <FaCircle size={8} color={vegan ? 'lightGreen' : 'red'} />
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
                  {selectedSize.size === size.size && <></>}
                  <FaCheck size={12} color={accentColor} />
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
                    <FaCheck size={12} color={accentColor} />
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
                <View>
                  <FaPlus size={12} color={bgColor} />
                </View>
              </TouchableOpacity>
              <Text style={mealScreenStyles.qtyText}>{quantity}</Text>
              <TouchableOpacity
                style={mealScreenStyles.qtyBtn}
                onPress={() => increaseDecreaseQuantity('decrease')}>
                <View>
                  <FaMinus size={12} color={bgColor} />
                </View>
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
      </View>
    </View>
  );
};

export default MealScreen;
