
# React-CSS Walking Simulator

A simple React website that uses spritesheets to make the character on screen appear to walk through fields of grass.


## Lessons Learned

This projects gave me a much firmer understanding of a lot of vanilla CSS, including variables, pseudo-classes, animations and more.

While all the animations are done using CSS, I feel it'd be better to use JS for the grass moving animation at least. As it is, the grass background has a lot of sharp visual jumps. Each time the character changes directions, or starts or stops moving the grass either suddenly appears or disappears. This could be mitigated using JS to change the translate: transform3d() rule. This would give me fine control over starting and stopping tha nimations, allowing it to be stopped at any point on the screen and avoid the visual jumps.

## Local Deployment

To run this project locally run

```bash
  git clone https://github.com/Kayos113/walking-simulator

  cd walking-simulator

  npm install

  npm start

  The app will start a development server on localhost port 3000
```


## Authors

- [@Kayos113](https://www.github.com/Kayos113)
