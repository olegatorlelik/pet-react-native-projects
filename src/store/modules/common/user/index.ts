import { Manager } from '@lomray/react-mobx-manager';
import { action, makeObservable, observable } from 'mobx';

/**
 * Current user store
 */
class UserStore {
  /**
   * This is singleton
   */
  static isSingleton = true;

  /**
   * Error message
   */
  public error: string | null = null;

  /**
   * Saved wallpapers
   */
  public savedWallpapers: number[] = [];

  /**
   * User has premium access
   */
  public isPremium = false;

  /**
   * Trial period is active
   */
  public isTrial = false;

  /**
   * Sum wallpapers download
   */
  public downloadCount = 0;

  /**
   * @constructor
   */
  constructor() {
    makeObservable(this, {
      downloadCount: observable,
      savedWallpapers: observable,
      setIsPremium: action.bound,
      setIsTrial: action.bound,
      increaseDownloadCount: action.bound,
      setSavedWallpaper: action.bound,
    });
  }

  /**
   * Toggle user premium status
   */
  public setIsPremium(isPremium: boolean): void {
    this.isPremium = isPremium;
  }

  /**
   * Toggle user premium status
   */
  public setIsTrial(isTrial: boolean): void {
    this.isTrial = isTrial;
  }

  /**
   * Increase total wallpapers download
   */
  public increaseDownloadCount(): void {
    this.downloadCount += 1;
  }

  /**
   * Set saved wallpaper
   */
  public setSavedWallpaper(id: number): void {
    this.savedWallpapers = [...this.savedWallpapers, id];
  }
}

export default Manager.persistStore(UserStore, 'user');
