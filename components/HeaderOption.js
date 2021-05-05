import React from 'react'


function HeaderOption({Icon, title , selected}) {
    return (
        <div className={`flex items-center space-x-1 
        hover:text-blue-500 cursor-pointer
        hover:border-blue-500
        border-b-4 border-transparent 
        ${selected && 'text-blue-500'}`}>
            
            <Icon className="h-4"/>
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption
