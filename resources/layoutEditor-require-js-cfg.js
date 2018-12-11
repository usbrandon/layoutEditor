/*!
 * Copyright 2002 - 2017 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * RequireJS configuration file for sparkl
 */

(function() {

  if(!requireCfg.map) requireCfg.map = {};
  if(!requireCfg.map['*']) requireCfg.map['*'] = {};
  

  var requirePaths = requireCfg.paths,
    requireShims = requireCfg.shim,
    requireConfig = requireCfg.config;

  if(!requireConfig['amd']) {
    requireConfig['amd'] = {};
  }
  if(!requireConfig['amd']['shim']) {
    requireConfig['amd']['shim'] = {};
  }
  var amdShim = requireConfig['amd']['shim'];


  var prefix;
  if(typeof KARMA_RUN !== "undefined") { // unit tests
    prefix = requirePaths['layoutEditor/components'] = 'resources/amd-components';

  } else if(typeof CONTEXT_PATH !== "undefined") { // production
    prefix = requirePaths['layoutEditor/components']  = CONTEXT_PATH + 'api/repos/layoutEditor/resources/amd-components';

  } else if(typeof FULL_QUALIFIED_URL != "undefined") { // embedded production
    prefix = requirePaths['layoutEditor/components']  = FULL_QUALIFIED_URL + 'api/repos/layoutEditor/resources/amd-componentss';

  } else { // build
    prefix = requirePaths['layoutEditor/components'] = '../resources/amd-components';
  }

  requirePaths['layoutEditor/components/LayoutEditorComponent'] = prefix + '/LayoutEditor/LayoutEditorComponent';

  amdShim['layoutEditor/components/LayoutEditor/resources/libs/js/jqueryFileTree'] = {
    exports: 'jQuery',
    deps: {
      'cdf/lib/jquery': 'jQuery',
      'css!layoutEditor/components/LayoutEditor/resources/libs/css/jqueryFileTree.css': ''
    }
  };

})();
