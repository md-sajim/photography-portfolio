import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight text-uppercase" style={{ color: "hsl(218,81%,95%)" }} >
                            question and answer section
                        </h1>
                        <div className='quastion-container'>
                            <h1>Quastion and answer </h1>
                            <h5>&#10031; Difference between SQL and NoSQL?</h5>
                            <p>&#10021; SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                            <h5>&#10031; What is JWT, and how does it work?.</h5>
                            <p>&#10021; JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                            <h5>&#10031; What is the difference between javascript and Node JS?</h5>
                            <p>&#10021; JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                            <h5>&#10031; How does NodeJS handle multiple requests at the same time?</h5>
                            <p>&#10021; How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default Blog;