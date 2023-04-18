const React = require('react')
const DefaultLayout = require('./layout/Default')

function Index(props) {
    const { logs } = props

    return (
        <DefaultLayout title='Logs Index Page'>
            <nav>
                <a href="/logs/new">Create A New Log</a>
            </nav>

            <ul>
                {
                    logs.map((log, i) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a> 
                                {" | "}
                                <a href={`/logs/${log._id}/edit`}>Edit</a>
                                {" | "}
                                <b>Last Updated:</b> {log.updatedAt.toLocaleString()}

                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        )
                    })
                }
            </ul>

        </DefaultLayout>
    )
}

module.exports = Index;