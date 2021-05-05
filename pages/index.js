import Head from "next/head";
import Avatar from '../components/Aatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import {useRouter} from 'next/router'
import {useRef} from 'react'
export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Sky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

        <Avatar url={`https://images.unsplash.com/photo-1613250432964-46d07324734e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}/>
        </div>
         
      </header>
      <form className="flex flex-col items-center mt-16 sm:mt-44 w-4/5">
        <div className="h-auto flex space-x-4">
        <h2 className="font-bold self-start"></h2>
          <Image
          height={150}
          width={250}
          src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA8SEBIPFRAPDw4QEBAVEA8XFhAPFRgWFxcRFRYYHSgiGBolHRYVJTEiJSkrLi4uIyAzODMtNyg5LisBCgoKDg0OGxAQGi0mICYtLS0tLS4tLS0tLTIuLS0tMTItLy0tKy0tLS0rLS0uLS8tLS0tLS0tLy0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcCBAUDAQj/xABFEAABAwECCgMNBgUFAQAAAAABAAIDEQQhBQYHEjFBUWFxgRMjshQiMjNCUnJzdJGSobEkNGLB0dIXU4KiwhZDk6PwVP/EABsBAQADAQEBAQAAAAAAAAAAAAAEBQYDAgEH/8QAOhEAAQMCAgYIBQIFBQAAAAAAAQACAwQRBSESMUFxgZETUWGhscHR8BQyMzThFSIGQlPS8UNScoKi/9oADAMBAAIRAxEAPwC8URERERERERERERERERERERERFg51ASbgLydgWai2PNu6OJsTTQzF1fQbSo5kj5rjPMIYy87PY5nJdqeEzStjG32e5Y4SxxjYS2FhkIuzic1td2s/JcmTHefVHCOT/wByjLivJ5VEK2eQ30rbvfitTHhlMwW0L9p9+CsHFXGSS1yuY9sYDYnPBaHVqC0UvP4lK1XOTk/apPZ39uNWMrqlc50d3G+aocUhZFPosFhYIiIpKrkREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREUDyhnroPVntKeKBZRvGw+qPaUDEvtzvHiFZ4P90Nx8FEXFebivrivNxVNE1a+yleTf71J7O/txqx1W+Tf71J7M/txqyFf0n0+KyeNfc8B5oiIpKqURERERERERERERERERERERERERERERERERERERERERFFcNYwGpZAaAXGQaT6Owb1GqquOmZpyHcNp3e7Dau8FO+Z2i3/C7tswhFCOseAdml3uF65M+NkY8Bj3cSGj81EnuqSTeTeTtKxJWblx2of9MBo5nvy7ldRYVC0fvue4d3qpG/G9+qJg4ucfyC8TjhL5kXuf+qjxKwcVH/U6s/6h5D0UttBTj+Qd/qpH/rKXXHF/f+qzGOh1wtPCQj6hRYleZK6NxKr/AKh5D0Xv9OpTrYO/1UyZ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RFq2uyRygCSON4BqA5oIB0VFdBvK50uK1jfeYGD0TI3skLtovDo2O+YA8F2jqJo/pvI3EjwKjMmJFjOhkg4SP/Oq1pMntkPlWgf1x/mxS9F46CL/AGhSG4pWN1Su538VDv4dWTz7V8UX7E/hzZPPtPxw/sUxRehEwagun6xXf1T3KKwYgWFulkj/AEpD/jRdewYDs0FOigiaW6HZgLh/Uan5rpovYACjy1tTKLSSOI6iTblqRERfVFRcHGDFeC3OY6Z0oMbc1uY5oFK1vq0rvIvoJBuF1hnkhfpxmx61DP4bWPz7T8UP7F0cH4m2KGjhFnuGh0hzv7fB+SkSL10j9rjzUqTFKyQWdK629fAF9RF4UBERERYSMBBBAIIoQdY2KL4UxCsM5LhG6Jx0mItb/aQWjkFK0XSKaSI3jcQexe45Hxm7CRuVfnJVZa+OtFNnVfXNW1ZsmNgYauE8m58gA/6w0/NTZFLOJ1ZFukPDLwXR1VM7W8rSsGDobOzMhjZGytc1jQATcKnabheVuoigkkm5NyuGtRDKThruWxOa00ltNYWbQwjrH8mmldRcFS0bVI8fcNd2W2TNNYoawx7CGnvn83Vv2Bq4UbVucLpvhqYA/Mczx2cB33VRWVGeSzjaurgXBzrTPFC3TI8AnzW6XO5AErQjarJyYYKoJLS4eF1cXDS93voORX2vqeghMm3ZvOr13BVcDfiJhHs27tvpxU6ggbGxjGCjGNaxo2NAoAvZEWEWrRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERRjH3DXcljeWmks3UxbQXDvn8m1PGm1SdUllHwz3TbHNaaxWWsTdhfXrH/EKcGhWWFUvxFQNL5W5nyHE911ymfosKjEbV7xtXkwLZjC2ziSs3UuW3YLM6V7GMFXPc1jRvJoFeWDLE2zwxxM8GNgbXadbjvJqVCcnOLxae6pW0uIgB033GThS4bak7FYSyGM1QkkEbdTde/8DzVlhNKY2GRwzd4fnXyRERUyt0REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREUTwjk/sMxJDHxOOkxPoK+i4Fo5BfEXWGolhN43EbvPrXwtDsiFoNyY2cf70/8A1/oungrEaxwEOzXyEXjpCCAfRAAPOqIpEmI1T22Mh8PCy4fDQ3vohSlERQlIREREREREREREREREX//Z`}/>
          <h2 className="font-bold self-end">Search</h2>
        </div>
        <div className="flex w-full hover:shadow-lg mt-5 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center">
          <SearchIcon className="h-5 mr-3 text-gray-700"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5 "/>
        </div>    
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4">
           <button onClick={search} className="btn">Sky Search</button>
           <button onClick={search} className="btn">I'm Feeling Lucky</button>
           <button hidden onClick={search} type="submit"></button>
        </div>
      </form>
      <Footer/>
    </div>
  );
}
