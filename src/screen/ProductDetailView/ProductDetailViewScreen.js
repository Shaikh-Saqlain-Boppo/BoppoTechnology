import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './ProductDetailViewStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors, Constant} from '../../global';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import HeartSvg from '../../assets/svgs/HeartSvg.svg';
import ShareSvg from '../../assets/svgs/ShareSvg.svg';
import {STATIC_DATA} from '../../global/staticdata';
import {ProductDetailViewHooks} from './ProductDetailViewHooks';
import CartSvg from '../../assets/svgs/CartSvg.svg';
const ProductDetailViewScreen = () => {
  const {
    renderTopBar,
    openCustomView,
    navigateToCheckOut,
    handleGoBack,
    navigateToCartPage,
    selectedProduct,
    addToCart,
  } = ProductDetailViewHooks();

  const productData = selectedProduct?.productMedia || [];
  const productInfo = selectedProduct?.shop_product_variants || {};
  const productDescription = productInfo?.description || '';
  const productPrice = productInfo?.price || '';
  const productId = productInfo?.product_id || '';
  const id = productInfo?.id || '';
  const Imageurl = productData.length > 0 ? productData[0].url || '' : '';
  console.log('productData', productData);
  console.log('productInfo', productInfo, 'yyyyyyyyyyyyyyyyyy', Imageurl);
  console.log('pratik data', selectedProduct);

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar
        showSearchIcon={true}
        showIcon={true}
        showHeart={true}
        showCartIcon={true}
        showCartCount={true}
        handleGoBack={handleGoBack}
        onCartPress={navigateToCartPage}
        onPress={handleGoBack}
      />
      <View style={styles.elevationContainer}>
        <View style={styles.carosalContainer}>
          <Image
            source={{uri: `https://cdn-stage.boppogo.com/${Imageurl}`}}
            style={styles.img}
          />
          <View style={styles.iconPositionContainer}>
            <HeartSvg
              heigth={CHANGE_BY_MOBILE_DPI(31)}
              width={CHANGE_BY_MOBILE_DPI(31)}
              style={styles.heartSvgStyle}
            />
            <ShareSvg
              heigth={CHANGE_BY_MOBILE_DPI(31)}
              width={CHANGE_BY_MOBILE_DPI(31)}
            />
          </View>
        </View>
        <View style={styles.topTabContainer}>
          <FlatList
            horizontal
            data={STATIC_DATA.topTabData}
            renderItem={renderTopBar}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingTop: CHANGE_BY_MOBILE_DPI(2)}}>
        {openCustomView(productDescription, productPrice)}
      </View>
      <View style={styles.positionContainer}>
        <View style={styles.addToContainer}>
          <View style={styles.flexContainer}>
            <TouchableOpacity
              onPress={() => addToCart(productId, id)}
              style={styles.addToCartSubContainer}>
              <CartSvg
                heigth={CHANGE_BY_MOBILE_DPI(23)}
                width={CHANGE_BY_MOBILE_DPI(23)}
              />
              <Text style={styles.addToCartFontStyle}>Add to cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexContainer}>
            <TouchableOpacity
              onPress={navigateToCheckOut}
              style={styles.buyNowContainer}>
              <Text style={styles.buyNowFontStyle}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailViewScreen;
