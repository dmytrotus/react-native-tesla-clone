import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    const { name, tagline, image } = props;
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={image}
            style={styles.image}
            />
            <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonContainer}>
            <StyledButton type="primary" label="Custom Order"
            onPress={() => {
                console.warn('Custom order was pressed')
            }}
            />
            <StyledButton type="secondary" label="Exiting Inventory"
            onPress={() => {
                console.warn('Exiting Inventory was pressed')
            }}
            />
            </View>

        </View>
    );
}

export default CarItem;
