import {GlobeIcon} from '@heroicons/react/solid'
function Footer() {
    return (
        <footer className="absolute bottom-0 grid w-full divide-gray-300 text-gray-500 bg-gray-100 text-sm divide-y-[1px]">
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1
                lg:col-start-2 ">
                   <GlobeIcon className="h-5 mr-1 text-green-700"/> Sky Search Engine
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                   <p>Advertising</p>
                   <p>Business</p>
                   <p>How search work</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                   <p>Privacy</p>
                   <p>Settings</p>
                   <p>Terms</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
