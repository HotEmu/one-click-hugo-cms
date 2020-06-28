import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerEditorComponent({
  id: "gist",
  label: "Gist",
  fields: [{
    name: "username",
    label: "Github Username",
    widget: "string"
  },
  {
    name: "gid",
    label: "Gist ID",
    widget: "string"
  },
  ],
  pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
    return {
      username: match[1],
      gid: match[2],
    };
  },
  toBlock: function(obj) {
    return `{{< gist ${obj.username} ${obj.gid} >}}`;
  },
  toPreview: function(obj) {
    return `{{< gist ${obj.username} ${obj.gid} >}}`;
  },
});

CMS.init();


