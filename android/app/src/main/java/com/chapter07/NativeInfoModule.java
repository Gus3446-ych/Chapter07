package com.chapter07;

import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

public class NativeInfoModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    private static final String APP_VERSION = "appVersion";
    private static final String APP_BUILD = "buildVersion";
    private static final String APP_ID = "bundleIdentifier";
    private static final String APP_DEVICE = "currentDevice";

    public NativeInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "NativeInfoModule";
    }
    public Map<String, Object> getConstants() {

        final Map<String, Object> constants = new HashMap<>();
        final PackageManager packageManager = this.reactContext.getPackageManager();
        final String packageName = this.reactContext.getPackageName();

        try {
            constants.put(APP_VERSION, packageManager.getPackageInfo(packageName, 0).versionName);
            constants.put(APP_BUILD, packageManager.getPackageInfo(packageName, 0).versionCode);
            constants.put(APP_ID, packageName);
            constants.put(APP_DEVICE, Build.DEVICE);
        } catch (NameNotFoundException e) {
            e.printStackTrace();
        }

        return constants;
    }
}