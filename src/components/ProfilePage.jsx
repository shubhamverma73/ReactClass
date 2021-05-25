import React, { Suspense } from "react";
import { fetchProfileData } from "./fakeapi/fakeApi";
const resource = fetchProfileData();

function ProfilePage() {
    return (
        <Suspense fallback={<h1>Loading profile...</h1>} >
            <ProfileDetails />
            <Suspense fallback={<h1>Loading posts...</h1>} >
                <ProfileTimeline />
            </Suspense>
        </Suspense>
    );
}

function ProfileDetails() {
    // Try to read user info, although it might not have loaded yet
    const user = resource.user.read();
    return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
    // Try to read posts, although they might not have loaded yet
    const posts = resource.posts.read();
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>
    );
}

export default ProfilePage;

/*
This is all less complicated than it may seem. Traditionally in React, you’d set state, 
and your UI would update. Life was simple. But it also led to the sorts of inconsistencies described above. 
What Suspense adds is the ability to have a component notify React at render time that it’s waiting for asynchronous data; 
this is called suspending, and it can happen anywhere in a component’s tree, as many times as needed, 
until the tree is ready. When a component suspends, 
React will decline to render the pending state update until all suspended dependencies have been satisfied.
*/