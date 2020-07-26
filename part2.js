jQuery.prototype.text = function(txt) {
    if (typeof txt === 'string') {
      this.elements.forEach(element => element.innerText = txt);
    }
    else {
      return this.elements.map(element => element.innerText);
    }
    return this;
}
