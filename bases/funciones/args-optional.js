"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Jonathan');
    console.log(name);
})();
