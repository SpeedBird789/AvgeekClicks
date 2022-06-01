import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='container mt-4 rounded'>

            <PageTitle title='Blogs'></PageTitle>
            
            <div> 
                <h2>What is the difference between authorization and authentication? </h2>
                <h6>- Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. For example, The lock on a door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials. Once inside, the person has the authorisation to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the Suser whereas authorization works through settings that are implemented and maintained by the organization. Authentication is visible to and partially changeable by the user however authorization isn’t.</h6>
            </div>

            <div> 
                <h2> Why are we using firebase? What other options do we have to implement authentication?</h2>
                <h6>- Firebase is a complete package of services that makes the development process quite different from the traditional process. The traditional process involved working on both, frontend and backend development. But when we use Firebase, the backend process is almost bypassed and we deliver mainly on the client-side. The Firebase SDK can be used for Android and iOS, and the support is extended to the web, Flutter, C++, and Unity. Along with the SDKs, a developer gets acquainted with the FirebaseUI library, which makes the development process easier than ever before. Firebase provides various methods to login with Google, Facebook, Twitter, Microsoft, Yahoo, and yet stores into a single account in Firebase Authentication. There are a lot of alternative options to using firebase. Some examples are Parse, AWS Amplify, Backendless, Supabase, Deployd, Back4app and many more.</h6>
            </div>

            <div> 
                <h2>What other services does firebase provide other than authentication?</h2>
                <h6>- Google analytics is such a one. It helps in growing and managing businesses. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports. The service provides visualisation of all this data on just a single tap. Firebase is also a great tool to implement notifications in the form of cloud messaging, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won’t be charged a penny for using this service as it’s free of charge. Remote config is another service which helps in remotely changing your application UI and content, without publishing it again. For example, if you have published an application on the stores with provocative words in the static content, but it could not be managed from the back-end. And a lot of users have downloaded the app, then how can you avoid this situation of embarrassment? If it is a normal application, then you can proceed to the process of changing and publishing the application which will take at least a week. But with Remote Config, you can change that content with a single click. More cases of this service can help you moderate the difficulty level of your game application, for a particular user group, without changing its code.</h6>
            </div>
        </div>
    );
};

export default Blogs;