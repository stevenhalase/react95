export default class Dom {

  static HasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }

  static AddClass(ele,cls) {
    if (!this.HasClass(ele,cls)) ele.className += " "+cls;
  }

  static RemoveClass(ele,cls) {
    if (this.HasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,'');
    }
  }

}