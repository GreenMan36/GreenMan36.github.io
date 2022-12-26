// Author: GreenMan36
// License: CC BY-NC-SA 4.0
// Date: 25-09-2022
// Version: 0.1.0
// Description: mdHeaders is a plugin for GreenDown that adds support for MarkDown style headers
// Usage: greendown.registerPlugin(mdHeaders);
// Dependencies: none
export const mdHeaders = {
  name: "mdHeaders",
  script: function (markdown) {
    var html = "";
    var lines = markdown.split(
      /\r\n|\r|\n/
    );

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      // if line starts with #+ {1}[a-zA-Z]+
      if (/^#+\s[^\s]+/.test(line)) { // ^#+\s[^\s]+ was ^#+\s[a-zA-Z]+
        // count the number of #s
        var count = line.match(/^#+/)[0].length;
        // remove the #s
        line = line.replace(/^#+\s/, "");
        // add the correct header tag
        html += `<h${count}>${line}</h${count}>\n`;
      } else {
        // its not a header so just add it to the html, keeping the line breaks\
        html += line + "\n";
      }
    }
    return html;
  },
};
