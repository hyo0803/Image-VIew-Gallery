import React from 'react';
import { SafeAreaView,TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import {  } from 'react-native-safe-area-context';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const CameraV =(props)=> {
  const CameraIMG = props.route.params.arr;

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
            CameraIMG.map((img, index)=>(
                <TouchableOpacity
                    key={index}
                >
                    <Image
                        style={{
                            width: deviceWidth/2-6,
                            height: deviceHeight/4,
                            margin: 1
                        }}
                        source={img.uri}
                    />
                        </TouchableOpacity>
            )
            )
        } 
        </SafeAreaView>
        </ScrollView>
        )
}
export default CameraV;