# athleanx-home-workout-app

Wanna see the app in action? [show me!](https://ahtleanx-home-workout.netlify.app/)

Based on https://www.youtube.com/watch?v=vc1E5CfRfos

This App makes it easier to do this workout

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
- [x] Keep in localStorage last workout done
- [x] In home indicate which was the last workout done
- [x] Mobile view shows everything without need to scroll

PWA:
- [x] Deploy app in netlify and run performance audit
- [x] Workouts can be accessed offline (PWA)

- [ ] Remove tests
- [ ] Clean up unused files

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
- [ ] Add accept cookies modal

Issues:
- [x] Timer doesn't reset when switching exercise
- [x] All videos are always same size

- [x] Fix video ordering (some videos are not matching the exercise)
- [x] When going to prev exercise, sometimes it goes to 1st exercise of previous group, instead of last one
- [x] Last exercise end goes to completed page
- [x] Other round button breaks, all internal links must be router-link
- [x] Pause screen is semi-transparent
- [x] Another round button doesnt reset exercises index to 0
- [x] Message" I am not affiliated to AthleanX

### Nice to have:

Reach
- [ ] Share icons in menu
- [ ] Share workout in Instagram when workout is finished, with custom message
- [ ] Links to my facebook and twitter

Design
- [x] Make 'home' a bit nicer
  - [x] Select workout, then 2 buttons: Day A, Day B
- [ ] Tweak fonts to make them a bit better
- [ ] Tweak color palette, perhaps decrease contrast
- [ ] Make timer have circumference with moving circle around
- [ ] Use colors to distinguish different groups
- [ ] Refactor: set default styles once for links and text (color, size, etc) instead of defining them for each component separately

User experience
- [x] At end of workout give option to repeat again
- [ ] Handle workout error state
- [ ] App is fully responsive
- [x] Burger menu toggles
  - [ ] Donate button
  - [x] Link to athleanx channel and site
- [ ] Improve variant usability
  - [ ] Show next / prev variant at the borders as interaction cues
  - [ ] Switch variant with a swipe (so prev and next btns can be removed on mobile)
  - [ ] Add red border around current variant
  - [ ] Swiping does not trigger timer
- [ ] FAQ page
- [x] Contact
- [ ] User login and save user data in their google drive or in a DB

Statistics
- [ ] Keep track of workouts and days in calendar
- [ ] Keep track of number of times workout is done per session
- [ ] Keep track of number of 'pauses' in each exercise, and have some measure of improvement
- [ ] Give audio cues when an exercise performance is going to be improved on

Infrastructure
- [ ] Host media in S3
