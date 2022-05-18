import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import { IMAGES } from '../Routes'
import { SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const Preview=(props)=> {
  const [showComponent, setShowComponent] = useState(false);
  const carouselRef = useRef();
  const flatListRef = useRef();
  const [images, setImages] = useState(
    IMAGES.map(function(img, index) {
      var item ={};
      item['id']=index+1;
      item['image']=img.image;
      return item;
    }));
  const [indexSelected, setIndexSelected] = useState(props.route.params.key);  
  props.navigation.setOptions({title: `${ indexSelected+1 } of ${ images.length }`, key: indexSelected});

  const onSelect = (indexSelected) => {
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true,
    });
  props.navigation.setOptions({title: `${ indexSelected+1 } of ${ images.length }`, key: indexSelected})
  setIndexSelected(indexSelected);
  };

  const onTouchThumbnail = (touched) => {
    if (touched === indexSelected) return;
    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View 
      style={{
        flex: 1, 
        flexDirection: "column",
        backgroundColor:'black',
        alignItems: 'center', 
        justifyContent: "flex-start"}}
      pointerEvents='box-none'>
      {/* Carousel View */}
      <Pressable onPress={() => setShowComponent(!showComponent)}>
        <SafeAreaView style={{flex: 5, flexDirection: "column"}}>
          <Carousel
              ref={carouselRef}
              layout="default"
              data={images}
              sliderWidth={width}
              itemWidth={width}
              navigation={props.navigation}
              firstItem={indexSelected}
              onSnapToItem={(index) => onSelect(index)}
              renderItem={({item, index}) => (
                <ReactNativeZoomableView
                  zoomEnabled={false}
                  maxZoom={4}
                  minZoom={0.7}
                  zoomStep={0.5}
                  initialZoom={1}
                  bindToBorders={true}
                >
                  <Image
                    key={index}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                    source={item.image}
                    />
                </ReactNativeZoomableView>
              )}
          />
        </SafeAreaView>
        <View
          style={{
            flex:1,
            paddingHorizontal: 20,
            width: width,
          }}>
            <Pagination
              inactiveDotColor="gray"
              dotColor={'orange'}
              activeDotIndex={indexSelected}
              dotsLength={images.length}
              animatedDuration={150}
              inactiveDotScale={1}
            />
        </View>
      </Pressable>

      {/* Thumbnail component using FlatList */}
      {
        showComponent &&
          <FlatList
            ref={flatListRef}
            horizontal={true}
            data={images}
            style={{
              position: 'absolute', 
              bottom: 80,
              display:showComponent ? 'flex' : 'none'}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: SPACING,
            }}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onTouchThumbnail(index)}
              activeOpacity={0.9}
            >
              <Image
                style={{
                  width: THUMB_SIZE,
                  height: THUMB_SIZE,
                  marginRight: SPACING,
                  borderRadius: 16,
                  borderWidth: index === indexSelected ? 4 : 0.75,
                  borderColor: index === indexSelected ? 'orange' : 'white',
                }}
                source={item.image}
              />
            </TouchableOpacity>
            )}
          />
      }
    </View>
  );
};


export default Preview;