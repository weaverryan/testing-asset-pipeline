// importing relative files works fine
// the final js will contain the real paths - e.g /assets/other.123abc.js
import './other';
import './subdir/delayed_import';

// not related to this feature - see base.html.twig for a manual
// importmap that makes this work.
import * as Turbo from '@hotwired/turbo';

const body = document.querySelector('body');
const footer = document.createElement('footer');
footer.innerHTML = 'Added via JavaScript!';
body.appendChild(footer);
