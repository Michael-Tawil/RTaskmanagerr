import Input from "./ui/Input"

export default function Navbar({searchQuery, setSearchQuery, setView}){
    return(
        <nav className="x-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:h-16">
                <div className="flex justify-between items-center">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:justify-between sm:items-center sm:h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
                            <span className="text-blue-600">R</span>TaskManager
                        </h1>
                    </div>
                    <div className="sm:hidden">
    <select 
        onChange={e => setView(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 cursor-pointer"
    >
        <option value="list">📋 List</option>
        <option value="cal">📅 Calendar</option>
    </select>
</div>
</div>
                    {/* Search Section */}
                    <div className="w-full sm:flex-1 sm:max-w-xs sm:mx-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <Input
                                className="w-full pl-10 pr-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tasks..."
                            />
                        </div>
                    </div>

                    {/* View Selector */}
                    <div className="hidden sm:block flex-shrink-0">
                        <div className="relative">
                            <select 
                                onChange={e => setView(e.target.value)}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 cursor-pointer"
                            >
                                <option value="list">📋 List View</option>
                                <option value="cal">📅 Calendar View</option>
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Mobile responsive hamburger menu for future expansion */}
            <div className="sm:hidden">
                {/* Mobile menu button placeholder */}
            </div>
        </nav>
    )
}