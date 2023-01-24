import ProgressiveImage from '@lomray/client-helpers-react-native/components/progressive-image';
import NavigationService from '@lomray/client-helpers-react-native/services/navigation';
import type { FC } from 'react';
import React from 'react';
import { View } from 'react-native';
import colors from '@assets/colors';
import FavoriteIcon from '@assets/images/icons/favorite.svg';
import FilledFavoriteIcon from '@assets/images/icons/filled-favourite.svg';
import Button from '@components/buttons/primary';
import PremiumIndicator from '@components/premiuim-indicator';
import AppNavigators from '@navigation/navigators/app';
import type { IWallpaper } from '@store/endpoints/interfaces/entities/wallpaper';
import type { IListWallpapers } from '../index';
import styles from './styles';

interface IWallpaperComponent {
  item: IWallpaper;
  index: number;
  setFavouriteWallpaper: (wallpaper: IWallpaper) => void;
  isFavourite: boolean;
  getCurrentWallpapers: IListWallpapers['getCurrentWallpapers'];
  getNextPage: IListWallpapers['onEndReachedAsync'];
  hasMargin: boolean;
}

const Wallpaper: FC<IWallpaperComponent> = ({
  item,
  index,
  isFavourite,
  setFavouriteWallpaper,
  getCurrentWallpapers,
  getNextPage,
  hasMargin = false,
}) => {
  const {
    attributes: {
      isPremium,
      image: {
        data: {
          attributes: {
            url,
            formats: { thumbnail, small },
          },
        },
      },
    },
  } = item;

  return (
    <View style={[styles.wrapperImage, hasMargin && styles.extraMargin]}>
      <PremiumIndicator isPremium={isPremium} size="medium" />
      <Button
        additionalStyles={styles.buttonImage}
        hasResetStyles
        onPress={() =>
          void AppNavigators.openWallpaper(NavigationService.getComponentId(), {
            index,
            getCurrentWallpapers,
            getNextPage,
          })
        }>
        <ProgressiveImage
          style={styles.image}
          thumbnailSource={thumbnail?.url}
          source={{ uri: small?.url ?? url }}
          isFastImg
        />
      </Button>
      <Button
        additionalStyles={styles.favouriteButton}
        hasResetStyles
        onPress={() => setFavouriteWallpaper(item)}>
        {isFavourite ? <FilledFavoriteIcon /> : <FavoriteIcon fill={colors.gray} />}
      </Button>
    </View>
  );
};

export default React.memo(Wallpaper);
