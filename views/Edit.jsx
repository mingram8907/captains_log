const React = require('react');
const DefaultLayout = require('./layout/Default')


function Edit(props) {
    const {log} = props

    return (
        <DefaultLayout title='Edit Log Page'>
            <form action={`/logs/${log._id}/?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={log.title} />
                <br />
                <br />

                Entry: <textarea name="entry" cols="30" rows="5" defaultValue={log.entry}></textarea>
                <br />
                <br />

                Is Ship Broken: { log.shipIsBroken 
                ? <input type="checkbox" name="shipIsBroken" defaultChecked/>
                : <input type="checkbox" name="shipIsBroken" /> }
                <br />
                <br />

                <input type="submit" value="Update Log" />
                <br />
                <br />

                <a href="/logs">Back To Index</a>
                {" | "}
                <a href={`/logs/${log._id}`}>Back To Log</a> 
            </form>
        </DefaultLayout>
    )
}

module.exports = Edit;