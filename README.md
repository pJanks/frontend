![logo](https://ibb.co/7RjM3Gc)

# RAIN OR SHINE [Frontend Repo]
An Android app for scheduling outdoor activities at specified locations. If the weather doesn't seem like the best for outdoor fun, we will give you exercises that you can do from home which target the same muscle groups.

### Intro
We help make sure you get the workout you want, regardless of the weather. Schedule an outdoor activity with us, and we will keep track of the weather for you. If it doesn't look like the weather is on your side, we present you with a list of exercises that work similar muscle groups to the outdoor activity you scheduled.

### Description
This project, our 'Cross Pollination', was the final project at Turing School of Software and Design. Our team consisted of two backend and two frontend developers and over the span of two weeks we collaborated to create this mobile app. The backend README, which is linked at the bottom of this page, has a list of all endpoints they created using Python and Django, which were new technologies for both backend students. On the frontend we utilized React Native, which was also a new technology for us. Both sides implemented TravisCI for the first time as well.

### Screenshots
![screenshot 1]()
![screenshot 3]()
![screenshot 3]()
![screenshot 4]()
![screenshot 5]()
![screenshot 6]()

### Directions for Use
- Upon initial page load the user is greeted with a login screen asking for username and password. Currently, the app is a prototype and doesn't require a login, you can just press the `LOGIN` button.
- The next screen displays all current and future activities that a user has scheduled, filtered by date, as well as a button for scheduling a new activity, viewing past activities. Each scheduled activity has a button to delete that activity as well as a `VIEW ACTIVITY` button to expand its details and see whether it's a good weather day or, if not, to see exercises for primary and secondary muscle groups that a user can do from indoors.
- Clicking on `CREATE NEW ACTIVITY` from this screen navigates to an input where a user can select an activity from a dropdown list of different activities. They can then input a location for the activity and select a date from a calendar component. Upon selecting the user is currently redirected to the home screen with the new activity added to the list of scheduled activities.

### Project Learning Goals and Requirements by Turing
This is a unique opportunity that presents some valuable goals:
- Ultimately, demonstrate knowledge you’ve gained throughout Turing
- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow
- Gain experience using continuous integration tools to build and automate the deployment of features in various environments
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between frontend and backend teams in order to complete and deploy features that have been outlined by the project spec

### Front-End Technologies Used
- React Native
- React Navigator
- React Native DateTimePicker
- NPM
- Andriod Studio Simulator
- Expo
- Jest
- TravisCI

### How to run simulator on a Mac using NPM
1. To view on your Android device, you will need to download Expo CLI on your device. You can also view it on your computer using an emulator, Android Studio. It can be downloaded at [here](https://developer.android.com/studio)
2. Clone down this repo into a local directory.
3. `cd` into the project directory and run `npm install` in your terminal.
4. You must then install expo by running `npm install -g expo-cli`. Then run `expo start` to fire up the backend servers.
5. You will then be redirected to a page where you can either scan a QR code to view on your phone or open up the app on an emulator to view it on your computer.

### Future Iterations/Bug Fixes
- Refactor to fix buggy behavior on iOS.
- Enable a user to modify an existing event
- Disable the ability for a user to create an event in the past or from creating two events on the same day.

### Frontend Project Creators:
Grayson Palmer https://github.com/grayson-palmer<br>
Johnny Cassidy https://github.com/pJanks

### Backend Project Creators:
Dylan Connolly https://github.com/dylanconnolly<br>
Darren Campbell https://github.com/darren2802

### Link to Back End Repo:
https://github.com/M4-Cross-Poll/backend
