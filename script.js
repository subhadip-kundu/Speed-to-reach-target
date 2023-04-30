// Select all elements with class 'counter'
const counters = document.querySelectorAll('.counter')

// Loop through each counter element
counters.forEach(counter => {

    // Set the initial text content of the counter element to '0'
    counter.innerText = '0'

    // Define a function to update the counter
    const updateCounter = () => {
        // Get the target value from the 'data-target' attribute of the counter element
        const target = +counter.getAttribute('data-target')
        // Get the current value of the counter element
        const c = +counter.innerText

        // Calculate the increment value for each step
        const increment = target / 200

        // If the current value of the counter is less than the target value
        if(c < target) {
            // Update the text content of the counter element to the rounded-up sum of the current value and the increment value
            counter.innerText = `${Math.ceil(c + increment)}`
            // Schedule the next update of the counter after 1 millisecond
            setTimeout(updateCounter, 1)
        } else {
            // If the current value of the counter has reached or exceeded the target value, set the text content of the counter element to the target value
            counter.innerText = target
        }
    }

    // Call the updateCounter function to start the counter animation
    updateCounter()
})
