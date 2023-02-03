import { Manager } from '@lomray/react-mobx-manager';
import { action, makeObservable } from 'mobx';

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
   * User has premium access
   */
  public isPremium = false;

  /**
   * Trial period is active
   */
  public isTrial = false;

  /**
   * @constructor
   */
  constructor() {
    makeObservable(this, {
      setIsPremium: action.bound,
      setIsTrial: action.bound,
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
}

export default Manager.persistStore(UserStore, 'user');
