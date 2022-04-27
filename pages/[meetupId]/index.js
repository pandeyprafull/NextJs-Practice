import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from 'react'

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDeatils(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title} </title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>

    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://max:max123@cluster0.3yymq.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollections = db.collection('meetups_data')
    const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log("--->", meetupId)
    const client = await MongoClient.connect(`mongodb+srv://max:max123@cluster0.3yymq.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollections = db.collection('meetups_data')
    const selectedMeetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) })
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDeatils;