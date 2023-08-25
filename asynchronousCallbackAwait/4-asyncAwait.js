async function friendlyFunction() {
    return `Hello`;
}
function friendlyFunction2() {
    return Promise.resolve(`Hello`);
}

// console.log(friendlyFunction())
// console.log(friendlyFunction2())


const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meeting',
            time: '10:00 PM'
        };
        resolve(meetingDetails)
    } else {
        reject(new Error('Meeting already scheduled!'))
    }
})

const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar)
    })
}
// when only do resolve then use this system
const addToCalendarSimplified = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar)

}
/*----------Uncomment------------*/
// meeting
//     .then(addToCalendarSimplified)
//     .then((result) => {
//         // jodi if(){ ay block sotto hy tahole aytar vitorer code execude hobe ... }
//         // console.log(JSON.stringify(result));
//         console.log(result)
//     }).catch((err) => {
//         // jodi else{ay block er ta sotto hy tahole ayta run hbe}
//         console.log(err.message)
//     });

async function myMeetingErrorHandling() {
    const meetingDetails = await meeting;
    // console.log(meetingDetails)
    const calender = addToCalendarSimplified(meetingDetails);
    console.log(calender)
}

myMeetingErrorHandling()

console.log('hello world')


// Error handling with asyncAwait
async function myMeetingErrorHandling() {
    try {
        const meetingDetails = await meeting;
        const calender = addToCalendarSimplified(meetingDetails);
        console.log(calender)
    } catch (error) {
        console.log(`Something wrong happend`, error.message)
    }
}

myMeetingErrorHandling()
console.log('hello world 2')
