        let evenNumber = "50";
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                console.log("Step " + i + ": " + i);
            }
        }
        
        let oddNumber = "50";
        for (let i = 1; i <= 50; i++) {
            if (i % 2 !== 0) {
                console.log("Step " + i + ": " + i);
            }
        }

        let number = "50";
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                console.log("Even Number: " + i);
            } else if (i % 2 !== 0) {
                console.log("Odd Number: " + i);
            } else {
                console.log("Not a valid number");
            }
        }