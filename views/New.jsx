const React = require('react')
const DefaultLayout = require('./layout/Default')

function New() {
    return (
        <DefaultLayout title='New Page'>

            <form action='/logs' method='POST'>
                Title: <input type="text" name="title" />
                <br />
                <br />
                Entry: <textarea name="entry" cols="30" rows="5"></textarea>
                <br />
                <br />
                Is Ship Broken: <input type="checkbox" name="shipIsBroken" />
                <br />
                <br />
                <input type="submit" />
                
            </form>
            
        </DefaultLayout>
    )
}

module.exports = New;