// Author: GreenMan36
// License: CC BY-NC-SA 4.0
// Date: 25-09-2022
// Version: 0.1.0
// Description: mdParagraph is a plugin for GreenDown that adds support for MarkDown style paragraphs
// Usage: greendown.registerPlugin(mdParagraph);
// Dependencies: none
export const mdParagraph = {
  name: "mdParagraph",
  script: function (markdown) {
    var html = "";
    // split the markdown into lines based off of line breaks
    var lines = markdown.split(
      /\r\n|\r|\n/
    );

    // loop trough all the lines
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var prev = lines[i - 1];
      var next = lines[i + 1];

      prev = prev || "";
      next = next || "";

      // if the previous line contains a closing tag
      if (prev.match(/.+<\/.+>$/) && !line.match(/^\<.+>.+<\/.+>$/)) {
        // add text with open tag
        html += `<p>${line}`;
      }
      // if the previous line is empty
      else if (prev === "" && !line.match(/^\<.+>.+<\/.+>$/)) {
        // add text with open tag
        html += `<p>${line}`;
      }
      // if the line doesn't contain tags
      else if (!line.match(/^\<.+>.+<\/.+>$/)) {
        // add text
        html += ` ${line}`;
      }
      else if (line.match(/^\<.+>.+<\/.+>$/)) {
        // add text
        html += ` ${line}`;
      }
      else {
        console.error("Error parsing lines, this should never happen");
      }

      // closing tag in regex is: .+<\/.+>$
    }
    return html;
  },
};