import gradient from 'gradient-string';

const coolGradient = gradient('red', 'blue', 'green');

const awesome = () => {
  console.log(
    coolGradient(String.raw`
    ______ ___      __________________________ ________
    _  __ ${'`'}/_ | /| / /  _ \_  ___/  __ \_  __ ${'`'}__ \  _ \
    / /_/ /__ |/ |/ //  __/(__  )/ /_/ /  / / / / /  __/
    \__,_/ ____/|__/ \___//____/ \____//_/ /_/ /_/\___/
        ______                         _____
        ___  /________________________ ___(_)_______
        __  __ \  _ \  _ \_  ___/  __ ${'`'}/_  /__  ___/
        _  /_/ /  __/  __/  /   / /_/ /_  / _  /
        /_.___/\___/\___//_/    \__,_/ /_/  /_/

          ^^@syoung125    @hy57in     @cyjo9603^^
`),
  );
};

export default awesome;
