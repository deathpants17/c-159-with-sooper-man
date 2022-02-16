AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  update: function () {
    const fadeBoi = document.querySelector("#fadeBackground");

    c = fadeBoi.children;
    if (c.length > 0) {
      var i;
      for (i = 0; i <= c.length; i++) {
        fadeBoi.removeChild(c[i]);
      }
    } else {
      this.handleMouseClickEvents();
    }
  },
  handleMouseEnterEvents: function () {

    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const postersId = [
        "superman",
        "spiderman",
        "captain-aero",

      ];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "#1565c0" });
      }
    });
  },
  handleMouseLeaveEvents: function () {

    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "#fff" });
        }
      }
    });
  },
  handleMouseClickEvents: function () {
 
    this.el.addEventListener("click", () => {
      const { selectedItemId } = this.data;

      const fadeBoi = document.querySelector("#fadeBackground");
      const coolBoi = document.querySelector("#app-title");
      const cursorEl = document.querySelector("#camera-cursor");
      if (selectedItemId) {
        fadeBoi.setAttribute("visible", true);
        fadeBoi.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        coolBoi.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        });
      } else {

        fadeBoi.setAttribute("visible", false);
        coolBoi.setAttribute("visible", true);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        });
      }
    });
  },
});
