import { useEffect, useState, Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';
import Head from 'next/head';
// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A first Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 5, 1234 some city',
//         description: "This is a first meetup"
//     },
//     {
//         id: 'm2',
//         title: 'A second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 10, 4567 some city',
//         description: "This is a second meetup"
//     }
// ];
function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content=" Browse a highly active react Meetups of Max" />
            </Head>
            < MeetupList meetups={props.meetups} />
        </Fragment>
    )
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
    const client = await MongoClient.connect(`mongodb+srv://max:max123@cluster0.3yymq.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollections = db.collection('meetups_data');
    const meetups = await meetupsCollections.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage