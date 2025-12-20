import { Link } from "react-router";

const MoreSettings = ({setIsDropDownOpen}) =>{
    return(
        <div className="absolute bottom-full left-0 mb-2 w-full bg-black rounded-lg shadow-lg border-gray-700 overflow-hidden z-50">
            <form className="flex flex-col">
                <Link to={"/login"} onClick={() => setIsDropDownOpen(false)} className="px-4 py-3 hover:bg-gray-800 text-sm">Add an existing Account</Link>
                <Link to={"/logout"} onClick={() => setIsDropDownOpen(false)} className="px-4 py-3 hover:bg-gray-800 text-sm border-t border-gray-700">Logout Username</Link>
            </form>
        </div>
    );
}

export default MoreSettings;