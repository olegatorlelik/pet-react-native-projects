import type { IFlatList } from '@lomray/client-helpers-react-native/components/flat-list';
import FlatList from '@lomray/client-helpers-react-native/components/flat-list';
import { Analytics } from '@lomray/client-helpers-react-native/services/analytics';
import { Observer } from 'mobx-react-lite';
import type { FC } from 'react';
import React from 'react';
import type { ListRenderItem } from 'react-native';
import { ImageBackground, View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import BackgroundImage from '@assets/images/screens/backgrounds/main.png';
import Ad from '@services/ad';
import type { IWallpaper } from '@store/endpoints/interfaces/entities/wallpaper';
import type Wallpapers from '@store/modules/common/wallpapers';
import type { StoreProps } from './index.stores';
import Wallpaper from './wallpaper';
import styles from './styles';

export interface IListWallpapers extends Omit<IFlatList<IWallpaper>, 'renderItem'> {
  getCurrentWallpapers: Wallpapers['getCurrentWallpapers'];
}

type TProps = StoreProps & IListWallpapers;

const ListWallpapers: FC<TProps> = ({
  data,
  userStore: { wallpapers, setFavouriteWallpaper, isPremium },
  getCurrentWallpapers,
  onEndReachedAsync,
  ...props
}) => {
  /**
   * Render wallpaper
   */
  const renderItem: ListRenderItem<IWallpaper> = ({ item, index }) => (
    <>
      <Observer>
        {() => (
          <Wallpaper
            item={item}
            index={index}
            isFavourite={wallpapers.includes(item.id)}
            setFavouriteWallpaper={setFavouriteWallpaper}
            getNextPage={onEndReachedAsync}
            hasMargin={index % 5 === 0 && index !== 0 && !isPremium}
            getCurrentWallpapers={getCurrentWallpapers}
          />
        )}
      </Observer>
      {index % 5 === 0 && index !== 0 && !isPremium && (
        <View style={styles.banner}>
          <BannerAd
            unitId={Ad.get().getBannerId('BANNER_CATEGORY', 'BANNER')}
            size={BannerAdSize.LARGE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: Analytics.get().getATTStatus() === true,
            }}
          />
        </View>
      )}
    </>
  );

  return (
    <View style={styles.main}>
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover" />
      <FlatList
        data={data}
        initialNumToRender={8}
        windowSize={8}
        maxToRenderPerBatch={8}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        onEndReachedAsync={onEndReachedAsync}
        columnWrapperStyle={styles.columnWrapperStyle}
        {...props}
      />
    </View>
  );
};

export default ListWallpapers;
