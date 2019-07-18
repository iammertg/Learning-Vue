new Vue({
  el: "#vue-app",
  data: {
    name: "Mert",
    job: "Being Awesome",
    website: "www.github.com/iammertg",
    websiteTag:
      "<a href='www.bitbucket.com/agileafterlifestudios'> Go to Bitbucket <a/>",
    age: 24,
    x: 0,
    y: 0,
    something: "",
    a: 0,
    b: 0
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },
    add: function(inc) {
      this.age += inc;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert("You clicked!");
    },
    logName: function() {
      console.log("You entered your name");
    },
    logAge: function() {
      console.log("You entered your age");
    }
  },
  computed: {
    addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    }
  }
});
