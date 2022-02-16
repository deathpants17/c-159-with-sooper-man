AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/posters/superman-banner.jpg",
        title: "Superman",
        released_year: "God knows when",
        description:
          "Dude's the man of steel. Don't mess with him and you would be safe. If you want to, just keep some kryptonite in handy.",
      },
      spiderman: {
        banner_url: "./assets/posters/spiderman-banner.png",
        title: "Spiderman",
        released_year: "Before i was born",
        description:
          "Spooder-man is one of the heroes ",
      },
      "captain-aero": {
        banner_url: "./assets/posters/captain-aero-banner.jpg",
        title: "Captain Aero",
        released_year: "Who is he first of all?",
        description:
          "Who is Captain Aero? xD",
      },

    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityBruv = document.createElement("a-entity");
    entityBruv.setAttribute("visible", true);
    entityBruv.setAttribute("id", `${itemId}-banner`);

    entityBruv.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityBruv.setAttribute("material", { color: "#000" });
    entityBruv.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityBruv.appendChild(imageEl);
    entityBruv.appendChild(titleEl);
    entityBruv.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityBruv);
  },
  createImageEl: function (item) {
    const entityBruv = document.createElement("a-entity");
    entityBruv.setAttribute("visible", true);
    entityBruv.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityBruv.setAttribute("material", { src: item.banner_url });
    entityBruv.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityBruv;
  },
  createTitleEl: function (item) {
    const entityBruv = document.createElement("a-entity");
    entityBruv.setAttribute("visible", true);
    entityBruv.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityBruv.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityBruv;
  },
  createDescriptionEl: function (item) {
    const entityBruv = document.createElement("a-entity");
    entityBruv.setAttribute("visible", true);
    entityBruv.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityBruv.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityBruv;
  },
});
