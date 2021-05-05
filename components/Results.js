import React from 'react'
import Pagination from './pagination'

function Results({results}) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">About {results.searchInformation?.formattedTotalResults}
            {results.searchInformation?.formattedSearchTime} seconds</p>
             
           { 
              results.items?.map((result)=>(
                <div key={result.link}
                className="max-w-xl mb-8">
                    <div className="group">
                        <a className="line-clamp-1"  href={result.link}>
                        {result.formattedUrl}</a>

                        <a  href={result.link}>
                        <h2 className="truncate text-xl capitalize
                        text-blue-800 font-medium group-hover:underline">{result.title}</h2></a>
                        
                        <p className="line-clamp-2">{result.snippet}</p>
                    </div>
                   

                </div>

                ))
            }
           <Pagination/>
        </div>
    )
}

export default Results
