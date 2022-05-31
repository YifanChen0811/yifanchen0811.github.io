console.log(12344)
// Reading progress function! I written by myself except the offsetHeight which I found from Google.
// Retrieve variables for loading bar
const $loadingbar = document.getElementById('loadingbar')
// Reset count variable
let counts = 0

// Create function
function Scroll () {
    // Define counts as percentage of reading
    let bodyHeight = document.body.offsetHeight
    let scrollY = window.scrollY

    let counts = scrollY / bodyHeight * 100

    // Using else,if to create different classes for different progress
    // Less than 10%
    if (counts <= 10) {
        // p for percentage; Have to remove because user may scroll back
        $loadingbar.classList.remove('p50', 'p75', 'p100')
        $loadingbar.classList.add('p25')
    }
    // Between 10% and 25%
    else if (counts > 10 && counts <= 25) {
        $loadingbar.classList.remove('p25', 'p75', 'p100')
        $loadingbar.classList.add('p50')
    }
    // Between 25% and 35%
    else if (counts > 25 && counts <= 35) {
        $loadingbar.classList.remove('p25', 'p50', 'p100')
        $loadingbar.classList.add('p75')
    }
    // Bigger than 35% (because it can't be 100%)
    // Adjusted numbers for page length; 
    else if (counts > 35) {
        $loadingbar.classList.remove('p25', 'p50', 'p75')
        $loadingbar.classList.add('p100')
    }
}
Scroll()
// Add scroll event listener to the function
document.addEventListener('scroll', Scroll)