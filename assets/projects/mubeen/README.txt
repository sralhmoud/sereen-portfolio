Place Mubeen project screenshots here (landscape orientation recommended, e.g. 16:9 or 16:10).

Suggested files:
- cover.jpg / cover.png            → used as the project card + modal hero image
- screenshot-1.jpg ... screenshot-6.jpg → used in the project detail gallery

After adding images, open js/projects-data.js and update the "cover" and "gallery[].src" fields
for the "mubeen" project to point to these files, e.g.:

  cover: "assets/projects/mubeen/cover.jpg",
  gallery: [
    { src: "assets/projects/mubeen/screenshot-1.jpg", caption: "App home / level map" },
    ...
  ]
