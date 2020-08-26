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

## Workout

1. SQUAT / ANTERIOR (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Alt. Single Leg Box Squats (use low box if advanced / higher box for beginners)
1 1/2 Bottomed Out Squats (to failure)
Jump Squats

2. UPPER PUSH (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Handstand Pushups OR Power Pushaways
Rotational Pushups OR Knee Rotational Pushups
Cobra Pushups (long head contracted) OR Knee Cobra Pushups

3. HINGE / POSTERIOR (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Alt. Single Leg Heel Touch Squats (use “kickstand” if needed)
Alt. Sprinter Lunges
Plyo Sprinter Lunges (jump from higher position if more beginner)

4. UPPER PULL (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Pullups OR Seated Pullups
Human Pullovers OR BW Sliding Pulldowns
Inverted Chin Curls

5. ABS (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Reverse Corkscrews
Black Widow Knee Slides
Levitation Crunches

6. CORRECTIVE (1 MINUTE PER EXERCISE / REST-PAUSE IF NEEDED)
Angels and Devils

COMPLETE 1-2 MORE ROUNDS (TOTAL WORKOUT TIME: 35-50 MINUTES)

Here is how to construct the perfect home workout B:

1. HINGE / POSTERIOR x 3 ROUNDS
Slick Floor Bridge Curl (Single Leg) OR Slick Floor Bridge Curl (Dual Leg)
Long Leg March
High Hip Bucks

2. UPPER PUSH x 3 ROUNDS
Variable Wall Pushups OR Knee Decline Pushups to Knee Flat Pushups
Alt. BW Side Lateral Raises (from knees for beginners)
Tricep BW Extensions (long head stretch)

3. LUNGE / ANTERIOR x 3 ROUNDS
Alt. Crossover Step Ups
Alt. Reverse Lunges
Split Squat Jumps

4. UPPER PULL x 3 ROUNDS
Chin Ups OR Seated Chin Ups
Inverted Rows
Back Widows

5. ABS x 2 ROUNDS
Ab Halos
V-Up Tucks
Sit-Up Elbow Thrusts

6. CORRECTIVE x 2 ROUNDS
Reverse Hypers

## Workout labels

workout A
1A advanced
1A beginner
1B all
1C all
2A advanced
2A beginner
2B advanced
2B beginner
2C advanced
2C beginner
...
6 all

workout B
...

Asset naming:
a-1a-adv
a-1a-beg
a-1b-all

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
  Variants []
    label: advanced / beginner / all
    image(s) / gif

Group:
  Name
  Exercises []

## Components

- Container that shows short video in a loop
- Component that pre-loads a list of videos
- Service worker that stores a list of media assets in browser cache

## Tasks

### MVP:

User experience:
- [x] App displays all exercises for A and B sequentially
- [x] The last 5 seconds, once per second sound alarm
- [x] When timer reaches 0 sound longer alarm than in last 5 seconds
- [x] App displays well on mobile
- [x] App looks the same on desktop as it does on mobile, with mobile max width and some reasonable max height
- [x] Videos don't show unnecessary black bands
- [x] When timer reaches zero, automatically switch to next group / exercise
- [x] When workout finishes, show complete screen
- [x] Clicking on the timer does not change it right out, one second elapses

PWA:
- [ ] Workouts can be accessed offline

Load data asynchronously
- [x] Load data ascynchronously (an async function)
- [x] Handle loading state

Use Vuex store
- [x] Current exercise being grabbed from workout store
- [x] Replace eventbus emitters by store actions
- [x] Prev and next btns for exercises update store

Other:
- [x] Burger menu opens drawer
- [x] Home gives credit to Athleanx

Issues:
- [x] Timer doesn't reset when switching exercise
- [x] All videos are always same size

### Nice to have:

Design
- [ ] Make 'home' a bit nicer
  - [ ] Select workout, then 2 buttons: Day A, Day B
- [ ] Tweak fonts to make them a bit better
- [ ] Tweak color palette, perhaps decrease contrast
- [ ] Make timer have circumference with moving circle around
- [ ] Use colors to distinguish different groups

User experience
- [ ] At end of workout give option to repeat again
- [ ] Keep in localStorage last workout done
- [ ] Handle workout error state
- [ ] App is fully responsive
- [ ] Burger menu toggles
  - [ ] Donate button
  - [ ] Link to athleanx channel and site
- [ ] Improve variant usability
  - [ ] Show next / prev variant at the borders as interaction cues
  - [ ] Switch variant with a swipe (so prev and next btns can be removed on mobile)
  - [ ] Add red border around current variant
  - [ ] Swiping does not trigger timer
- [ ] FAQ page
- [ ] Contact
- [ ] Donate

Statistics
- [ ] Keep track of workouts and days in calendar
- [ ] Keep track of number of times workout is done per session
- [ ] Keep track of number of 'pauses' in each exercise, and have some measure of improvement
- [ ] Give audio cues when an exercise performance is going to be improved on
