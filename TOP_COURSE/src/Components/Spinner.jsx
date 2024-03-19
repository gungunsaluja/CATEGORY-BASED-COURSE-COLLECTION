import "./Spinner.css"

export default function Spinner() {
    return (
        <div className="flex flex-col items-center space-y-7">
            <div className="spinner "></div>
            <p className=" text-blue-950 text-lg font-semibold">Loading...</p>
        </div>
    )
} 