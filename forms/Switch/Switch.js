// We are collecting the first name from the users 
firstNameOne = prompt("Enter your first name person one")
firstNameTwo = prompt("Enter your first name person two")

// We are collecting states from the users
stateOne = prompt("Enter your state person one (Two letters)")
stateTwo = prompt("Enter your state person two (Two letters)")

// We are collecting temperature from the users 
temperatureOne = prompt("Enter your temperature person one (Fahrenheit)")
temperatureTwo = prompt("Enter your temperature person two (Fahrenheit)")

// We are storing our possilbe output messgaes 
messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.",  "wear a warm coat, hat and gloves. Maybe a scarf too."]

// We are testing for person one
switch (true) {
case 1: (temperatureOne < 32 && stateOne == "NE") 
    console.log(`${firstNameOne}, ${messages[1]}`)
    break
case 2: (temperatureOne > 32 && temperatureOne < 50 && stateOne == "NE")
    console.log(`${firstNameOne}, ${messages[2]}`)
    break
case 3: (temperatureOne > 32 && temperatureOne < 50 && stateOne == "FL")
    console.log(`${firstNameOne}, ${messages[3]}`)
    break
case 4: (temperatureOne > 32 && temperatureOne < 50 && stateOne == "FL")
    console.log(`${firstNameOne}, ${messages[4]}`)
    break
}

// We are testing for person two
switch (true) {
case 1: (temperatureTwo < 32 && stateTwo == "NE") 
    console.log(`${firstNameTwo}, ${messages[1]}`)
    break
case 2: (temperatureTwo > 32 && temperatureTwo < 50 && stateTwo == "NE")
    console.log(`${firstNameTwo}, ${messages[2]}`)
    break
case 3: (temperatureTwo > 32 && temperatureTwo < 50 && stateTwo == "FL")
    console.log(`${firstNameTwo}, ${messages[3]}`)
    break
case 4: (temperatureTwo > 32 && temperatureTwo < 50 && stateTwo == "FL")
    console.log(`${firstNameTwo}, ${messages[4]}`)
    break
}
