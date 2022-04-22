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
function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage