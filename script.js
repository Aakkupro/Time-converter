function convertTime() {
    const input = document.getElementById('timeInput').value.trim();
    const result = document.getElementById('result');
    let alertmsg = document.getElementById('alert_msg');
    alertmsg.innerText = ''; 
    result.textContent = ''; 

    // Check if the input contains AM/PM
    const is12HourFormat = /am|pm/i.test(input);
    let hours, minutes, period;

    if (is12HourFormat) {
        // Parse 12-hour format (e.g., "5 PM" or "02:30 AM")
        const match = input.match(/(\d+)(?::(\d+))?\s*(am|pm)/i);
        if (!match) {
            alertmsg.innerText = "Invalid time format. Please use formats like '5 PM' or '02:30 AM'.";
            return;
        }
        [hours, minutes, period] = [parseInt(match[1]), parseInt(match[2] || 0), match[3].toLowerCase()];

        // Validate hours and minutes
        if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
            alertmsg.innerText = "Invalid time format. Hours should be 1-12 and minutes 0-59.";
            return;
        }

        // Convert to 24-hour format
        hours = (period === 'pm' && hours < 12) ? hours + 12 : (period === 'am' && hours === 12) ? 0 : hours;
        result.textContent = `24-hour format: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else {
        // Parse 24-hour format (e.g., "14:30" or "5")
        const match = input.match(/(\d+)(?::(\d+))?/);
        if (!match) {
            alertmsg.innerText = "Invalid time format. Please use formats like '14:30' or '5'.";
            return;
        }
        [hours, minutes] = [parseInt(match[1]), parseInt(match[2] || 0)];

        // Validate hours and minutes
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            alertmsg.innerText = "Invalid time format. Hours should be 0-23 and minutes 0-59.";
            return;
        }

        // Convert to 12-hour format
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        result.textContent = `12-hour format: ${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }
}

document.addEventListener('keydown', function (e) {
    const input = document.getElementById('timeInput').value.trim();
    let alertmsg = document.getElementById('alert_msg');
    alertmsg.innerText = ''; 

    // Trigger convertTime only on Enter key (keyCode 13)
    if (e.key === 'Enter') {
        if (input !== '') {
            convertTime();
        } else {
            alertmsg.innerText = "Please enter a valid time format.";
        }
    }
});

/*function convertTime() {
    const input = document.getElementById('timeInput').value.trim();
    const result = document.getElementById('result');
    let alertmsg = document.getElementById('alert_msg');
    alertmsg.innerText = ''; // Clear previous messages
    result.textContent = ''; // Clear previous results

    if (input.toLowerCase().includes("am") || input.toLowerCase().includes("pm")) {
        let timeParse = input.split(/[:\s]+/);
        let hours = parseInt(timeParse[0]);
        let minutes = parseInt(timeParse[1]);
        let Pm_Am = timeParse[2].toLowerCase();

        console.log(hours, minutes, Pm_Am);

        // 12-hour format validation
        if (hours < 1 || hours > 12) {
            alertmsg.innerText = "Invalid time format, hours should be between 1 and 12 or you can use 24-hour format.";
            return;
        }
        if (Pm_Am !== "am" && Pm_Am !== "pm") {
            alertmsg.innerText = "Invalid time format, valid format e.g. 02:30 PM or 14:30.";
            return;
        }
        if (minutes < 0 || minutes > 59 || isNaN(minutes)) {
            alertmsg.innerText = "Invalid time format, minutes should be between 0 and 59.";
            return;
        }

        if (Pm_Am === "am" && hours === 12) {
            hours = 0;
        } else if (Pm_Am === "pm" && hours < 12) {
            hours += 12;
        }
        result.textContent = 24-hour format: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')};
        
    } else {
        let timeParts = input.split(":");
        let hours = parseInt(timeParts[0]);
        let minutes = parseInt(timeParts[1]);

        // 24-hour format validation
        if (hours < 0 || hours > 23) {
            alertmsg.innerText = "Invalid time format, hours should be between 0 and 23.";
            return;
        }
        if (minutes < 0 || minutes > 59 || isNaN(minutes)) {
            alertmsg.innerText = "Invalid time format, minutes should be between 0 and 59.";
            return;
        }

        let am_pm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        result.textContent = 12-hour format: ${hours}:${minutes.toString().padStart(2, '0')} ${am_pm};
       
    }
}

document.addEventListener('keydown', function (e) {
    const input = document.getElementById('timeInput').value.trim();
    let alertmsg = document.getElementById('alert_msg');
    alertmsg.innerText = ''; // Clear previous messages

    // Trigger convertTime only on Enter key (keyCode 13)
    if (e.keyCode === 13) {
        if (input !== '') {
            convertTime();
        } else {
            alertmsg.innerText = "Please enter a valid time format.";
        }
    }
});

*/
