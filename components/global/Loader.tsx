export default function Loader() {
    const height = '100vh'
    return (
        <div style={{ height: `${height})` }} className="activeBg backdrop-blur-lg h-full grid relative place-content-center">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
