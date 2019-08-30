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
CMS.registerWidget("ipfsuploader", <div>
  <input type="file" />
</div>, <div>test</div>);

CMS.registerEditorComponent({
    // Internal id of the component
    id: "ipfs",
    // Visible label
    label: "ipfs",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: '输入您的ipfs地址', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    // pattern: //,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return <div>
      <video src="http://67.209.177.130:8080/ipfs/QmfDeE8wQrQ4CBvG4JkzjwxCn8jC8CatXMjBtGVDJt5Pkd"></video>
    </div>;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        <div>
          <video src="http://67.209.177.130:8080/ipfs/QmfDeE8wQrQ4CBvG4JkzjwxCn8jC8CatXMjBtGVDJt5Pkd"></video>
        </div>
      );
    }
});

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
