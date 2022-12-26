// Author: GreenMan36
// License: CC BY-NC-SA 4.0
// Date: 25-09-2022
// Version: 0.1.0
// Description: GreenDown is a simple markdown like parser for HTML
// Usage: greendown.parse(markdown)
// Dependencies: none
export const greendown = {
  plugins: [],

  parse(markdown) {
    if (typeof markdown !== "string") {
      throw new Error("Markdown must be a string, not " + typeof markdown);
    }
    if (markdown.length === 0) {
      throw new Error("Markdown must not be empty");
    }
    let html = "";
    // run trough all plugins and pass the output of the previous plugin to the next plugin
    this.plugins.forEach((plugin) => {
      console.info(`Running plugin: ${plugin.name}`);
      html = plugin.script(html || markdown);
    });
    return html;
  },

  registerPlugin(plugin) {

    if (Array.isArray(plugin)) {
      console.log(`Registering plugins: ${plugin.map((p) => p.name)}`);
      plugin.forEach((p) => {
        this.plugins.push(p);
      });
    } else {
      console.log(`Registering plugin: ${plugin.name}`);
      this.plugins.push(plugin);
    }
    console.info("GreenDown currently has " + greendown.plugins.length + (greendown.plugins.length === 1 ? " plugin registered" : " plugins registered"));
  },

  unregisterPlugin(plugin) {
    console.log(`Unregistering plugin: ${plugin.name}`);
    this.plugins.splice(this.plugins.indexOf(plugin), 1);
  },

  clearPlugins() {
    this.plugins = [];
  }
  
};