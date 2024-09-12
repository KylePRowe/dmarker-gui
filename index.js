function Initialize() {
  var set_select = document.getElementById("slt_setname");
  var icon_select = document.getElementById("slt_icon");

  var set_options = SET_NAMES.map((v) => { return `<option value=${v.value}>${v.name}</option>` })
  var icon_options = ICONS.map((v) => { return `<option value=${v.value} style=\"background-image:url(assets/icons/${v.icon ?? ""});\">${v.name}</option>` });

  set_select.innerHTML = set_options;
  icon_select.innerHTML = icon_options;
}

function generateMarker(e) {
  e.preventDefault();
  var action = this.slt_action.value;
  var marker_name = this.txt_markername.value;
  var new_marker_name = this.txt_newmarkername.value;
  var set_name = this.slt_setname.value;
  var icon = this.slt_icon.value;

  if (marker_name == "") {
    alert("Name cannot be blank");
    return;
  }

  var output_div = document.getElementById('div_output_container_display');
  var copy_button = document.getElementById('btn_copybutton');

  var out_dmarker_starter = "/dmarker";
  var out_action = action;
  var out_marker_name = "\"" + marker_name + "\"";
  var out_new_marker_name = "newlabel:\"" + new_marker_name + "\"";
  if (action == "add") {
    marker_name = marker_name.replace(/ /g, "_")
    marker_name = marker_name.replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
  }
  var out_marker_id = "id:" + marker_name;
  var out_set_name = "set:" + set_name;
  var out_icon = "icon:" + icon;

  output_div.innerHTML = out_dmarker_starter + " " + out_action + (action == "add" ? " " + out_marker_name : "") + " " + out_marker_id + (new_marker_name != "" ? " " + out_new_marker_name: "") + " " + out_set_name + (action == "delete" ? "" : " " + out_icon);
  copy_button.disabled = false;
}

function updateForm() {
  var action_value = document.getElementById("slt_action").value;
  var icon_value = document.getElementById("slt_icon").value;

  var icon_select = document.getElementById('div_icon_container');
  var icon_preview = document.getElementById('img_icon_prev');

  var newmarkername_container = document.getElementById('div_newmarkername_container');
  var lbl_markername = document.getElementById('lbl_markername');
  var txt_newmarkername = document.getElementById('txt_newmarkername');

  if (action_value == "delete") {
    lbl_markername.innerHTML = "ID: ";
    icon_select.style.display = 'none';
    newmarkername_container.style.display = 'none';
  } else if (action_value == "update") {
    lbl_markername.innerHTML = "ID: ";
    newmarkername_container.style.display = 'block';
  } else {
    lbl_markername.innerHTML = "Name: ";
    txt_newmarkername.value = "";
    newmarkername_container.style.display = 'none';
    icon_select.style.display = 'flex';
  }

  icon_preview.src = "./assets/icons/" + ICONS.find((i) => i.value == icon_value).value + ".png";
}

function loadErrImage(e) {
  e.target.src = "./assets/icons/error_image_generic.png"
  e.onerror = null
}

function copyText() {
  var textToCopy = document.getElementById("div_output_container_display").innerHTML;

  navigator.clipboard.writeText(textToCopy);
}