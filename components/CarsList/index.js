import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';

const CarsList = () => {
    const cars = [
        {
            name:"Model S",
            tagline:"Starting at 69 000$",
            image: require('../../assets/images/ModelS.jpeg')
        },
        {
            name:"Model X",
            tagline:"Starting at 109 000$",
            image: require('../../assets/images/ModelX.jpeg')
        },
        {
            name: "Model 3",
            tagline:"Starting at 39 000$",
            image: require('../../assets/images/Model3.jpeg')
        },
    ]
return (
    <View style={styles.container}>
        <FlatList 
            showsVerticalScrollIndicator={false}
            snapToAlignment='start'
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            data={cars}
            renderItem={({item}) => <CarItem name={item.name} 
            tagline={item.tagline} image={item.image}
            />}
        ></FlatList>
    </View>
);
}

export default CarsList;
