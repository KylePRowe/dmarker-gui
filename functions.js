const SET_NAMES = [
  {
    "name": "Landmarks",
    "value": "landmarks"
  },
  {
    "name": "Player Homes",
    "value": "player_homes"
  }
]

const ICONS = [
    {
        "name": "Default",
        "value": "default"
    },
    {
        "name": "House",
        "value": "house"
    },
    {
        "name": "Big House",
        "value": "bighouse"
    },
    {
        "name": "Church",
        "value": "church"
    },
    {
        "name": "Bank",
        "value": "bank"
    },
    {
        "name": "Building",
        "value": "building"
    },
    {
        "name": "Factory",
        "value": "factory"
    },
    {
        "name": "Light House",
        "value": "lighthouse"
    },
    {
        "name": "Tower",
        "value": "tower"
    },
    {
        "name": "Temple",
        "value": "temple"
    },
    {
        "name": "Bookshelf",
        "value": "bookshelf"
    },
    {
        "name": "Theater",
        "value": "theater"
    },
    {
        "name": "Beer",
        "value": "beer"
    },
    {
        "name": "Drink",
        "value": "drink"
    },
    {
        "name": "Cutlery",
        "value": "cutlery"
    },
    {
        "name": "Cup",
        "value": "cup"
    },
    {
        "name": "Camera",
        "value": "camera"
    },
    {
        "name": "Tree",
        "value": "tree"
    },
    {
        "name": "Basket",
        "value": "basket"
    },
    {
        "name": "Cart",
        "value": "cart"
    },
    {
        "name": "Scales",
        "value": "scales"
    },
    {
        "name": "Coins",
        "value": "coins"
    },
    {
        "name": "Chest",
        "value": "chest"
    },
    {
        "name": "Hammer",
        "value": "hammer"
    },
    {
        "name": "Bricks",
        "value": "bricks"
    },
    {
        "name": "Flower",
        "value": "flower"
    },
    {
        "name": "Skull",
        "value": "skull"
    },
    {
        "name": "Anchor",
        "value": "anchor"
    },
    {
        "name": "Minecart",
        "value": "minecart"
    },
    {
        "name": "Truck",
        "value": "truck"
    },
    {
        "name": "Gear",
        "value": "gear"
    },
    {
        "name": "Portal",
        "value": "portal"
    },
    {
        "name": "Door",
        "value": "door"
    },
    {
        "name": "Sign",
        "value": "sign"
    },
    {
        "name": "King",
        "value": "king"
    },
    {
        "name": "Queen",
        "value": "queen"
    },
    {
        "name": "Up",
        "value": "up"
    },
    {
        "name": "Down",
        "value": "down"
    },
    {
        "name": "Left",
        "value": "left"
    },
    {
        "name": "Right",
        "value": "right"
    },
    {
        "name": "Point Up",
        "value": "pointup"
    },
    {
        "name": "Point Down",
        "value": "pointdown"
    },
    {
        "name": "Point Left",
        "value": "pointleft"
    },
    {
        "name": "Point Right",
        "value": "pointright"
    },
    {
        "name": "Pin",
        "value": "pin"
    },
    {
        "name": "Red Flag",
        "value": "redflag"
    },
    {
        "name": "Orange Flag",
        "value": "orangeflag"
    },
    {
        "name": "Yellow Flag",
        "value": "yellowflag"
    },
    {
        "name": "Green Flag",
        "value": "greenflag"
    },
    {
        "name": "Blue Flag",
        "value": "blueflag"
    },
    {
        "name": "Purple Flag",
        "value": "purpleflag"
    },
    {
        "name": "Pink Flag",
        "value": "pinkflag"
    },
    {
        "name": "Pirate Flag",
        "value": "pirateflag"
    },
    {
        "name": "Walk",
        "value": "walk"
    },
    {
        "name": "Gold Star",
        "value": "goldstar"
    },
    {
        "name": "Silver Star",
        "value": "silverstar"
    },
    {
        "name": "Bronze Star",
        "value": "bronzestar"
    },
    {
        "name": "Gold Medal",
        "value": "goldmedal"
    },
    {
        "name": "Silver Medal",
        "value": "silvermedal"
    },
    {
        "name": "Bronze Medal",
        "value": "bronzemedal"
    },
    {
        "name": "Diamond",
        "value": "diamond"
    },
    {
        "name": "Ruby",
        "value": "ruby"
    },
    {
        "name": "World",
        "value": "world"
    },
    {
        "name": "Caution",
        "value": "caution"
    },
    {
        "name": "Construction Warning",
        "value": "constructionwarning"
    },
    {
        "name": "Lock",
        "value": "lock"
    },
    {
        "name": "Exclamation",
        "value": "exclamation"
    },
    {
        "name": "Cross",
        "value": "cross"
    },
    {
        "name": "Fire",
        "value": "fire"
    },
    {
        "name": "Tornado",
        "value": "tornado"
    },
    {
        "name": "Bomb",
        "value": "bomb"
    },
    {
        "name": "Shield",
        "value": "shield"
    },
    {
        "name": "Sun",
        "value": "sun"
    },
    {
        "name": "Star",
        "value": "star"
    },
    {
        "name": "Key",
        "value": "key"
    },
    {
        "name": "Comment",
        "value": "comment"
    },
    {
        "name": "Dog",
        "value": "dog"
    },
    {
        "name": "Wrench",
        "value": "wrench"
    },
    {
        "name": "Compass",
        "value": "compass"
    },
    {
        "name": "Lightbulb",
        "value": "lightbulb"
    },
    {
        "name": "Heart",
        "value": "heart"
    },
    {
        "name": "Cake",
        "value": "cake"
    }
]

function Initialize() {
  var set_select = document.getElementById("set_name");
  var icon_select = document.getElementById("icon");

  var set_options = SET_NAMES.map((v) => { return `<option value=${v.value}>${v.name}</option>` })
  var icon_options = ICONS.map((v) => { return `<option value=${v.value}>${v.name}</option>` });


  set_select.innerHTML = set_options;
  icon_select.innerHTML = icon_options;
}

function generateMarker(e) {
  e.preventDefault();
  var action = this.action.value;
  var marker_name = this.marker_name.value;
  var set_name = this.set_name.value;
  var icon = this.icon.value;

  if (marker_name == "") {
    alert("Name cannot be blank");
    return;
  }

  var output_div = document.getElementById('inner-output');
  var copy_button = document.getElementById('copy-button');

  var out_dmarker_starter = "/dmarker";
  var out_action = action;
  var out_marker_name = "\"" + marker_name + "\"";
  var out_marker_id = "id:" + marker_name.replace(" ", "_").replace(/[\s`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
  var out_set_name = "set:" + set_name;
  var out_icon = "icon:" + icon;

  output_div.innerHTML = out_dmarker_starter + " " + out_action + (action == "delete" ? " " : " " + out_marker_name) + " " + out_marker_id + " " + out_set_name + (action == "delete" ? "" : " " + out_icon);
  copy_button.disabled = false;
}

function updateForm() {
  var action_value = document.getElementById("action").value;

  var icon = document.getElementById('icon-container');

  if (action_value == "delete") {
    icon.classList.add('hidden');
  } else {
    icon.classList.remove('hidden');
  }
}

function copyText() {
  var textToCopy = document.getElementById("inner-output").innerHTML;

  navigator.clipboard.writeText(textToCopy);

  // Alert the copied text
  alert("Copied");
}