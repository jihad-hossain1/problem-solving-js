/*
=================
---- Promise
=================
*/

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


const promis1 = Promise.resolve(`Promise 1 resolved`);

const promis2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`)
    }, 2000);
})

/*----------Uncomment------------*/
// promis1.then((result) => console.log(result));
// promis2.then((result) => console.log(result));

Promise.all([promis1, promis2]).then((result) => {
    console.log(result)
})

