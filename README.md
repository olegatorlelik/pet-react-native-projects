# Animation Mobile App

App Name: `Animation Mobile App`   
Npm: `7.24.1`  
NodeJS: `14.20.0`  
macOS: `latest`  
Cocapods: `latest`

## Prepare for development
1. Go to [React Native Documentation](https://reactnative.dev/docs/environment-setup)
2. Make sure you have installed all dependencies from `Target OS` sections.
- You need: `NodeJS - 14.20.0`, `Watchman`, `Xcode`, `Java Development Kit`
- Make sure you have installed `cocapods`: macOS - `brew install cocoapods` (if you have M1 chip, read sections `Note for Mac M1 users`), `Other OS` - see instructions from React Native Doc

## How to run
1. `npm i`
2. `cd ios && pod install`
3. Run application:
   IOS: `npm run ios`
   Android: `npm run android`

`NOTE`: Make sure you have disabled hardware keyboard in `IOS` simulator.

## Structure
- `constants/index` - configure application constants
- `constants/navigation` - application navigation structure
- `common/components` - reusable components
- `navigation` - navigation structure
- `screens` - application screens
- `store` - state manager

## Debugger link

http://localhost:8081/debugger-ui/

## Reactotron debug on Android:

```bash
adb reverse tcp:9090 tcp:9090
adb reverse tcp:8081 tcp:8081
```

## Git workflow

1. Clone repo
2. Create new branch from `dev`
3. Create Pull Request from your branch to `dev`
4. `Squash` commit into `dev` after code review and approvals.

## Commit format
- feat:
- fix:
- feat(android):
- feat(ios):
