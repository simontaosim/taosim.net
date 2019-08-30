import React from 'react';
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);


CMS.registerEditorComponent({
    // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${obj.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${obj.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }
});

CMS.registerEditorComponent({
  // Internal id of the component
id: "ipfs",
// Visible label
label: "ipfs",
// Fields the user need to fill out when adding an instance of the component
fields: [{name: 'id', label: 'ipfs hash', widget: 'string'}],
// Pattern to identify a block as being an instance of this component
pattern: /^ipfs (\S+)$/,
// Function to extract data elements from the regexp match
fromBlock: function(match) {
  return {
    id: match[1]
  };
},
// Function to create a text block from an instance of this component
toBlock: function(obj) {
  return `<video controls="" autoplay="" name="media" style="width: 100%;"><source src="http://67.209.177.130:8080/ipfs/${obj.id}" type="video/mp4" /></video>`
},
toPreview: function(obj) {
  return `<video controls="" autoplay="" name="media" style="width: 100%;"><source src="http://67.209.177.130:8080/ipfs/${obj.id}" type="video/mp4" /></video>`
}
});

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
