function Aatar({url, className}) {
    return <img
        loading="lazy"
        src={url}
        className={`h-10 w-10 cursor-pointer
        transition duration-150 transform hover:scale-110 
        rounded-full ${className}`}
        alt="profile pic"
        />
}
export default Aatar
