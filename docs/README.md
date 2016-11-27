## FitPop

### Background

FitPop is an iOS music fitness app build with React Native. It syncs your the motivation of a personal trainer with the perfect playlist to deliver an elevated, on-demand audio fitness experience.

### Functionality & MVP  

With this app, users will be able to:

- [ ] Listen to playlist synced with workout audio
- [ ] Filter workouts by category
- [ ] Start, stop, pause and turn up/down music
- [ ] Play audio in the background if off app page

### Wireframes

This app will consist of a single screen with a list of possible workouts. Each workout will have artwork, audio controls and (start, stop, volume, pause).

![wireframe](./FitPop.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `React-Native`, `Vanilla JavaScript` and `jQuery`
- `CSS` with `HTML5` for styling
- `Cloudinary` API for audio and image storage to Cloud
- `Webpack` to bundle and serve up the various scripts

In addition to the `webpack` entry file, there will be 4 scripts involved in this project:

`CategoryIndex.jsx`: This Component will loop through all Categories display each as Category Index Items.

`CategoryIndexItem.js`: This Component will display the an image and name of the Category, as well as the Workout Index Items associated with the Category.  

`WorkoutIndexItem.js`: This Component will show a image and description of the class

`WorkoutDetailItem.js`: This will display the description, image and audio controls to start, stop, pause and turn up or down the volume.

### Database Schema

##Categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    | not null


## Workouts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    | not null
audio_url       | string    | not null
category_id     | integer   | foreign_key (references Categories table)


### Sample Data Object
```js
{
  categories: {
    id: 1,
    name: "Cycling"
  },
  workouts: {
    id: 1,
    name: "Beginner Pop Cycle",
    audio_url: "www.cloudinary.com/someurl",
    category_id: 1
  }
}
```

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `react-native-cli` installed.  Create `webpack.config.js` as well as `package.json`. Write a basic entry file and the bare bones of the Category Index Component outlined above.  Learn the basics of `react-native-cli.js`.

**Day 2**: Dedicate this day to learning the `react-native-cli` API and building out the Category Index Component and Category Index Items.

**Day 3**: Create the Workout Index Items

**Day 4**: Seed with appropriate data

**Day 5**: Style the frontend, making it polished and professional.


### Bonus features

There are many directions that FitPop.  Some anticipated updates are:
- [ ] Track calories burned and heart rate using `react-native-apple-healthkit` library
- [ ] Create accounts with Facebook auth to keep track of workouts and stats
- [ ] Ability to share results on social media
