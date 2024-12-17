const ErrorMessage = ({ message }) => {
    return (
        <span className="text-red-500 p-1 text-xs">{message.charAt(0).toUpperCase() + message.slice(1)}</span>)
}

export default ErrorMessage;