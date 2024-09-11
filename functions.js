import { SET_NAMES } from "./constants";

export function Initialize() {
  var select = document.getElementById("set_name");

  var options = SET_NAMES.map((v) => {return `<option value=${v.value}>${v.name}</option>`})

  select.innerHTML = options
}

export function generateMarker(e) {
  e.preventDefault();
  var action = this.action.value;
  var marker_name = this.marker_name.value;
  var set_name = this.set_name.value;
  var icon = this.icon.value;

  alert("/dmarker " + action + " \"" + marker_name + "\" " + "id:" + marker_name.replace(" ", "_").replace(/[\s`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase() + " set:" + set_name + " icon:" + icon);
}

export function updateForm() {
  var action_value = document.getElementById("action").value;

  var name_of_set = document.getElementById('set_name-container');
  var icon = document.getElementById('icon-container');

  if (action_value == "delete") {
    name_of_set.classList.add('hidden');
    icon.classList.add('hidden');
  } else {
    name_of_set.classList.remove('hidden');
    icon.classList.remove('hidden');
  }
}