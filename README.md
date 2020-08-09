# athleanx-home-workout-app

Based on https://www.youtube.com/watch?v=vc1E5CfRfos

This App makes it easier to do this workout

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Data structure

data
  workout-a
    group-1 eg anterior lower (squat)
      exercise-1
        Alternatives (advanced, beginner)
      exercise-2
    group-2
  workout-b

Exercises:
1A
1B
1C
2A
2B
...

Exercise:
  Name
  Versions []
    label: advanced / beginner / all
    image(s) / gif

Group:
  Name
  Exercises []
