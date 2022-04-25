import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 1234 some city',
        description: "This is a first meetup"
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 4567 some city',
        description: "This is a second meetup"
    }
];
function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

//used for frequesnt data changes ..

// export async function getServerSideProps() {
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

//used for prerendered cycle ...
export async function getStaticProps() {
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}

export default HomePage