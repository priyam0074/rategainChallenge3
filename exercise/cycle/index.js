const cycle =function(index,array) {

    function prev() {
      if(index == 0) {
        index = array.length;
      }
      index = index-1;
      return array[index];
    }
    function next() {
      if(index == array.length-1) {
        index = -1
      }
      index = index+1;
      return array[index];
    }
     cycle.prev = prev;
     cycle.next = next;
     return cycle
  }

  module.exports = cycle;