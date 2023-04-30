// importing relative files works fine
// the final js will contain the real paths - e.g /assets/other.123abc.js
import './other.js';
import './subdir/delayed_import.js';

// made possible via the importmap you'll find in your HTML source
// see importmap.php
import * as Turbo from '@hotwired/turbo';

const body = document.querySelector('body');
const footer = document.createElement('footer');
footer.innerHTML = 'Added via JavaScript!';
body.appendChild(footer);
