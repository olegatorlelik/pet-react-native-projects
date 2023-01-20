package com.lomray.wallpapers.common;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Rect;
import android.util.DisplayMetrics;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class CommonModule extends ReactContextBaseJavaModule {
  private final Context context;

  CommonModule(ReactApplicationContext context) {
    super(context);

    this.context = context;
  }

  @NonNull
  @Override
  public String getName() {
    return "CommonModule";
  }

  @ReactMethod
  public void minimizeApp() {
    Objects.requireNonNull(this.getCurrentActivity()).moveTaskToBack(true);
  }

  @ReactMethod
  public void getNavigationBarDimension(Promise promise) {
    Resources resources = context.getResources();
    int resourceId = resources.getIdentifier("navigation_bar_height", "dimen", "android");
    int height = 0;

    if (resourceId > 0) {
        height = resources.getDimensionPixelOffset(resourceId);
    }

    Rect rectangle = new Rect();
    DisplayMetrics displayMetrics = new DisplayMetrics();
    Activity activity = this.getCurrentActivity();
    activity.getWindow().getDecorView().getWindowVisibleDisplayFrame(rectangle);
    activity.getWindowManager().getDefaultDisplay().getRealMetrics(displayMetrics);
    int heightDisplay = displayMetrics.heightPixels;
    int heightWindow =  (rectangle.top + rectangle.height());

    WritableMap map = new WritableNativeMap();

    map.putInt("heightDisplay", heightDisplay);
    map.putInt("heightWindow", heightWindow);
    map.putBoolean("hasNavbar", heightDisplay != heightWindow);
    map.putInt("heightNavbar", height);

    promise.resolve(map);
  }

  @ReactMethod
  public void clearBadge() {
    NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
      if (notificationManager != null) {
        notificationManager.cancelAll();
      }
    }
  }
}
