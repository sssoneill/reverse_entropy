function Coordinates(x, y, diftc, link) {
  
  this.x = x;
  this.y = y;
  this.diftc = diftc;
  this.link = link;
  this.txtt = createA(this.link, this.diftc); //
  this.lifespan2 = 1;

  this.display = function() {

    this.txtt.class("fuck"); // cool created a css .fuck // then added safari code in html
    this.txtt.style("opacity", this.lifespan); // can't figure out how to run fct in mouseover
    this.txtt.position(this.x, this.y);
    // this.lifespan += -0.1;

  }

  this.update = function() {
    this.txtt.style("opacity", this.lifespan2); // can't figure out how to run fct in mouseover
    this.lifespan2 = this.lifespan2 - 0.007; // -0.01 doesnt seem to leave the shadows 
    if(this.lifespan2 <= 0) {
      this.txtt.remove(); // this got rid of object that was transparent but still 'clickable'
    }
  }
}

// fade out wasnt working, just increased in opacity .. had txtt.createA('#', this.diftc);
// needed to add this.txtt.createA..-- in order for the fade (lifespan to work)