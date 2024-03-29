import Alert from 'react-bootstrap/Alert'

function MessageBox(props) {
    return (
        <div>
            <Alert variant={props.variant || 'info'} style={{ backgroundColor: "red", color: "black" }}>{props.children}</Alert>
        </div>
    )
}

export default MessageBox