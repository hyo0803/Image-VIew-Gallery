import React from 'react';
import { SafeAreaView,TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import {  } from 'react-native-safe-area-context';

import { IMAGES } from '../Routes';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const HomeSreen =(props)=> {
    return (
        <ScrollView> 
    <SafeAreaView
        style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
        {
            IMAGES.map((img, index)=>(
                <TouchableOpacity
                    key={index}
                    onPress={() => props.navigation.navigate('Preview',{
                        url: img.image,
                        key: index
                    })}
                >
                    <Image
                        style={{
                            width: deviceWidth/2-6,
                            height: deviceHeight/4,
                            margin: 1
                        }}
                        source={img.image}
                    />
                        </TouchableOpacity>
            )
            )
        } 
        </SafeAreaView>
        </ScrollView>
        )
}

export default HomeSreen;
