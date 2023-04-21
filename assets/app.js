import * as Turbo from '@hotwired/turbo';
import './other';
import './subdir/delayed_import';

console.log('Logging Turbo', Turbo);

const body = document.querySelector('body');
const footer = document.createElement('footer');
footer.innerHTML = 'Added via JavaScript!';
body.appendChild(footer);


console.log(Turbo);
