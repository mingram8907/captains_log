const React = require('react');
const DefaultLayout = require('./layout/Default')

function Show(props) {

    const {log} = props

    return (
        <DefaultLayout title='Show Log Page'>
            <h3>{log.title}</h3>
            <p>
                <b>Notes:</b> {log.entry}
                <br />
                <b>Status:</b> {log.shipIsBroken
                ? 'Ship is broken, boat is rocked. DO NOT BOARD!'
                : 'Ship is in tip top shape. All aboard!'}
                <br />
                <b>Original Post Date:</b> {log.createdAt.toLocaleString()}
                {" | "}
                <b>Last Updated:</b> {log.updatedAt.toLocaleString()}
            </p>

            <a href="/logs">Back To Index</a>
            {" | "}
            <a href={`/logs/${log._id}/edit`}>Edit</a>


        </DefaultLayout>
    )
}

module.exports = Show;