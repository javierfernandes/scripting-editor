/* Substance Component styles */
import '../../node_modules/substance/substance.css';
/* You may want to use your own reset and pagestyle */
import '../../node_modules/substance/substance-reset.css';
import '../../node_modules/substance/substance-pagestyle.css';

/* Using url here, so font-awesome does not get bundled. */
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import '../../src/comment/_comment.css';
import '../../src/scripting-editor/_simple-writer.css';

export default () => {
  // nothing, just to import css files from js (webpack)
}