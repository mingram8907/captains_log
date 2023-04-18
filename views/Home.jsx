const React = require('react');
const DefaultLayout = require('./layout/Default')

function Home() {
    return (
        <DefaultLayout title='Home'>
            <a href="/logs">Go To Index</a>
        </DefaultLayout>
    )
}

module.exports = Home;