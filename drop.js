class Drop {
  static store = "";

  static string(string = "") {
    this.store = string;
    return this;
  }
  static setString(string = "") {
    this.store = string;
    return this.store;
  }

  static cutText(text, cutFrom = this.store) {
    if (!text) {
      console.log("cutText: no text is passed");
      return;
    } else {
      return cutFrom.includes(text) ? cutFrom.split(text).join("") : console.log("cutText: text argument is not including in cut string");
    }
  }

  go(times, cb) {
    for (i = 0; i <= times; i++) {
      cb()
    }
  }
}

// console.log(Drop.string("textpe"))

console.log( Drop.cutText("text", Drop.string("rtrttexttexthghkl")) );