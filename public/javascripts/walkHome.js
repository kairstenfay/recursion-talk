/**
 * For loop
 *
 * @param stepsFromHome
 */
const walkHome = (stepsFromHome) => {
    for (let i = 0; i < stepsFromHome; i++) {
        stepsFromHome--;
    }
};

walkHome(20);

















/**
 * While loop
 *
 * @param stepsFromHome
 */
const walkHome1 = (stepsFromHome) => {
    while (stepsFromHome > 0) {
        stepsFromHome--;
    }
};

walkHome1(20);

























/**
 * Tail recursion with print statements 
 * 
 * @param stepsFromHome
 */
const walkHome2 = (stepsFromHome) => {
    if (stepsFromHome === 0) {
        console.log("I did it!");
        return;
    } else {
        stepsFromHome--;

        const home = "🏠";

        let steps = '';
        for (let i = 0; i < stepsFromHome; i++) {
            steps += '-';
        }

        console.log(home + steps + '🚶');
        return walkHome2(stepsFromHome);
    }

};

walkHome2(20);




















/**
 * Tail recursion, cleaner code
 *
 * @param stepsFromHome
 */
const walkHome23 = (stepsFromHome) => {
    if (stepsFromHome > 0) {
        return walkHome23(stepsFromHome - 1);
    }
};

walkHome23(20);





