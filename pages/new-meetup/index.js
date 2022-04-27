// our-domain.com/new-meetup.com
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
        const response = await fetch(`/api/new-meetup`, {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log("Inserted Data -->", data)
        router.push('/')
    }
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup </title>
                <meta name="description" content=" Add your own meetup create your own opportunity " />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage;