#  Onboarding Screens – React Native

This is a React Native Expo app that demonstrates a simple onboarding flow with two screens:

- Did You Know → Presents fun, educational facts with a cause & effect structure.

- Flashcard → Displays flashcard-style content for quick learning.

Both screens fetch their content from different API endpoints using Redux Toolkit and RTK Query for state management and data fetching.

## Features

- Onboarding flow with timed screen rotation

- Custom UI with typography, progress bar, and styled cards

- API-powered content (via Redux Toolkit + RTK Query)

- Cross-platform support with Expo (Android, iOS, Web)

- Loading, error, and retry states for smooth UX

## Technologies

- [React Native](https://reactnative.dev/)
 – Cross-platform app development

- [Expo](https://expo.dev/)
 – Fast development and deployment

- [Redux Toolkit](https://redux-toolkit.js.org/)
 – State management

- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
 – API fetching & caching

## Project Setup

### - Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/en/download/)

- [npm](https://docs.npmjs.com/cli/install)
 or [Yarn](https://yarnpkg.com/)

- [Git](https://git-scm.com/)

- [Android Studio](https://developer.android.com/studio/index.html) (for Android)

- [Android Emulator](https://developer.android.com/studio/run/emulator-installation.html) (for Android)
 (or physical device with Expo Go app)

## Installation Steps

1. Clone the repository

```bash
git clone https://github.com/mazam5/Onboarding-View-React-Native
cd Onboarding-View-React-Native
```

2. Install dependencies

```bash
npm install
```
   - Set environment variables

   Create a .env file in the root directory and add:
   ```
   EXPO_PUBLIC_API_URL=your_api_url_here
   ```

3. Run the app
```bash
npm run android   # For Android
npm run ios       # For iOS (macOS only)
npm run web       # For web
```

##  Troubleshooting

If you encounter issues, run:
```bash
npx expo-doctor
```

## Screenshots & Demo
<table>
<tr>
<th>
<h3>
Did you like screen (Home Page)
</h3>
</th>
<th>
<h3>
Flashcard screen 
</h3>
</th>
<th>
<h3>
Demo
</h3>
</th>
</tr>
<tr>
<td>

![Screenshot](/screenshots/1.png)
</td>
<td>

![Screenshot](/screenshots/2.png)
</td>
<td>

![Screenshot](/screenshots/demo.gif)
</td>
</tr>
</table>
