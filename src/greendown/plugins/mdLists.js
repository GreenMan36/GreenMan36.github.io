// Author: GreenMan36
// License: CC BY-NC-SA 4.0
// Date: 25-09-2022
// Version: 0.1.0
// Description: mdLists is a plugin for GreenDown that adds support for MarkDown style lists or unordered lists
// Usage: greendown.registerPlugin(mdLists);
// Dependencies: none
export const mdLists = {
  name: "mdHeaders",
  script: function (markdown) {
    var html = "";
    var lines = markdown.split(
      /\r\n|\r|\n/
    );

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var prev = lines[i - 1];
      var next = lines[i + 1];

      prev = prev || "";
      next = next || "";

      // if the previous line contains " 1) " // ^\s[0-9]\)\s.+
      // if the previous line is not a list
      if (!prev.match(/^\s[0-9]\)\s.+/) && line.match(/^\s[0-9]\)\s.+/)) {
        let text = line.replace(/^\s[0-9]\)\s/, "");
        // add text with open tag
        html += `<ol><li>${text}</li>`;
      
      } else
      if (prev.match(/^\s[0-9]\)\s.+/)) {
        let text = line.replace(/^\s[0-9]\)\s/, "");
        // add text with open tag
        html += `<li>${text}</li>`;
      } else
       {
        // its not a header so just add it to the html, keeping the line breaks\
        html += line + "\n";
      }
      // if the next line is not a list but the current line is
      if (!next.match(/^\s[0-9]\)\s.+/) && line.match(/^\s[0-9]\)\s.+/)) {
        // add text with close tag
        html += `</ol>`;
      }
    }
    return html;
  },
};