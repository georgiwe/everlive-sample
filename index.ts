import Everlive from 'everlive-sdk';
import * as _ from 'underscore';

const stringify = o => JSON.stringify(o);

let el = new Everlive('<Some API key>');

el.data('TestType')
    .get()
    .then(res => console.log(stringify(res)))
    .catch(err => console.log(stringify(err)));
