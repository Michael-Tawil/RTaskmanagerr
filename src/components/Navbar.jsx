import Input from "./ui/Input"

export default function Navbar({searchQuery, setSearchQuery, setView}){
    return(
        <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-4">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                            <span className="text-blue-600">R</span>TaskManager
                        </h1>
                    </div>

                    {/* Search Section */}
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <Input
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tasks..."
                            />
                        </div>
                    </div>

                    {/* View Selector */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <select 
                                onChange={e => setView(e.target.value)}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 cursor-pointer"
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