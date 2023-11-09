//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import BrandStoreListScreen from '../../components/BrandStore/BrandStoreScreen';
import RecommendedItemListScreen from '../../components/RecommendedItems/RecommendedItemsScreen';
import ShopByCategoryListScreen from '../../components/ShopByCategory/ShopByCategoryScreen';
import BrowsingHistoryListScreen from '../../components/YourBrowsingHistory/YourBrowsingHistoryScreen';
import { HomeHooks } from './HomeHooks';
import { styles } from './HomeStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import BoppoSvg from '../../assets/svgs/LogoSvg.svg'
import LocationSvg from '../../assets/svgs/LocationSvg.svg'
import SearchField from '../../components/SearchField';
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import ExploreItems from '../../components/ExploreItems/ExploreItems';
import TopDealList from '../../components/TopDeals/TopDeals';
import BestOffer from '../../components/BestOffer/BestOffer';


const HomeScreen = () => {
  const {
    isPopupVisible, setPopupVisible,
    togglePopup
  } = HomeHooks()
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <View style={styles.boppoHeaderContainer}>
        <View style={styles.flexContainer}>
          <TouchableOpacity>
            <BoppoSvg heigth={CHANGE_BY_MOBILE_DPI(35)} width={CHANGE_BY_MOBILE_DPI(35)} />
          </TouchableOpacity>
          <Text style={styles.headerFontStyle}>Boppo</Text>
        </View>
        <TouchableOpacity>
          <LocationSvg heigth={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
        <View style={styles.carousalContainer}>
          <CustomCarousel width={Constant.SCREEN_WIDTH - 60} />
        </View>
        <View style={styles.backgroundColorStyle}>
          <View style={styles.dealOfTheDayStyle}>
            <DealsOfTheDay title={`Deals Of the Day`} />
          </View>
          <View style={styles.ExploreItemContainer}>
            <ExploreItems />
          </View>
          <View style={styles.topCategoryContainer}>
            <TopDealList />
          </View>
          <View style={styles.bestOfferContainer}>
            <BestOffer />
          </View>


                   
{/* 
          <BrandStoreListScreen />
          <RecommendedItemListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
            onBuyNowPress={() => {
              navigation.navigate('YourCart');
            }}
          />
          <ShopByCategoryListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
          />
          <BrowsingHistoryListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
            onBuyNowPress={() => {
              navigation.navigate('YourCart');
            }}
          /> */}
          {/* <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
                <FlushBar />
              </View> */}
        </View>
        <Modal
          visible={isPopupVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            setPopupVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ color: 'black', margin: 50 }}>
                Your Popup Content Goes Here
              </Text>
              <TouchableOpacity
                onPress={togglePopup}
                style={styles.closeButton}>
                <Text style={{ color: 'black' }}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

// define your styles

//make this component available to the app
export default HomeScreen;
