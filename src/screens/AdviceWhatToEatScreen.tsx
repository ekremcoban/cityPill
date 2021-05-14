import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LisWhatToEat from '../components/lists/ListWhatToEat';

const data = [
    {
        id: 0,
        title: 'Kurufasulye',
        img: require('../assets/img/kuru.jpeg'),
    },
    {
        id: 1,
        title: 'Lahmacun',
        img: require('../assets/img/lahmacun.jpeg'),
    },
    {
        id: 2,
        title: 'Lokum',
        img: require('../assets/img/lokum.jpeg'),
    },
]

function AdviceWhatToEatScreen() {
    return (
        <ScrollView>
            {data.map(d =>  <LisWhatToEat key={d.id} {...d} />)}
    </ScrollView>
    )
}

export default AdviceWhatToEatScreen;