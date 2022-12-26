// Author: GreenMan36
// License: CC BY-NC-SA 4.0
// Date: 25-09-2022
// Version: 0.1.0
// Description: example is a plugin for GreenDown that replaces GreenDown with a greentext linked version of GreenDown
// Usage: greendown.registerPlugin(mdHeaders);
// Dependencies: none

export const example = {
  name: "example",
  script: function (markdown) {
    var html = "";
    // use regex to replace all instances of GreenDown with a link to the GreenDown github page and make it green
    html = markdown.replace(/([gG][rR][eE][eE][nN][dD][oO][wW][nN])/g, "<a href='https://github.com/GreenMan36/GreenDown' style='color: #0f0;'>$1</a>");
    return html;
  },
};
