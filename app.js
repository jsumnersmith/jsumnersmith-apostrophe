var site = require('apostrophe-site')({

  // This line is required and allows apostrophe-site to use require() and manage our NPM modules for us.
  root: module,
  shortName: 'jsumnersmith',
  hostName: 'jsumnersmith',
  title: 'Joel Sumner Smith',
  sessionSecret: 'crazy orpheus party time',
  adminPassword: 'orpheus',

  locals: {
    loginButton: false
  },

  lockups: {
    left: {
      label: 'Left',
      tooltip: 'Float Small',
      icon: 'icon-arrow-left',
      // Only allows one type of widget
      widgets: [ 'slideshow' ],
      // Override the options for slideshows when they are inside the lockup to get the size right
      slideshow: {
        size: 'one-third'
      },
      video: {
        size: 'one-half'
      }
    },
    right: {
      label: 'Right',
      tooltip: 'Float Right',
      icon: 'icon-arrow-right',
      widgets: [ 'slideshow', 'video' ],
      slideshow: {
        size: 'one-half'
      },
      video: {
        size: 'one-half'
      }
    }
  },

  // Here we define what page templates we have and what they will be called in the Page Types menu.

  // For html templates, the 'name' property refers to the filename in ./views/pages, e.g. 'default'
  // refers to '/views/pages/default.html'.

  // The name property can also refer to a module, in the case of 'blog', 'map', 'events', etc.

  pages: {
    types: [
      { name: 'default', label: 'Simple' },
      { name: 'home', label: 'Home Page' },
      { name: 'blog', label: 'Blog' },
    ]
  },

  // These are the modules we want to bring into the project.
  modules: {
    // Styles required by the new editor, must go FIRST
    'apostrophe-ui-2':   { },
    'apostrophe-blog-2':   {
      widget: true,
      indexes: {
        addFields: [
          {
            name: 'theme',
            label: 'Blog Theme: Select One',
            type: 'select',
            choices: [
              {
                label: 'Literature',
                value: 'literature'
              },
              {
                label: 'Technology',
                value: 'technology'
              }
            ]
          }
        ]
      }
    },
    'apostrophe-map':    { },
    'apostrophe-people': { },
    'apostrophe-groups': { },
    // The new editor
    'apostrophe-editor-2': { },
    'apostrophe-schema-widgets': {
      
    },
  },

  // These are assets we want to push to the browser.
  // The scripts array contains the names of JS files in /public/js,
  // while stylesheets contains the names of LESS files in /public/css
  assets: {
    scripts: ['site'],
    stylesheets: ['site']
  },

});
