import Head from "next/head";
import Header from '../components/Header'
import {KEY, CONTACT} from '../components/Keys'
import Response from '../Response'
import {useRouter} from 'next/router'
import Results from '../components/Results'
function Search({results}) {
    const router = useRouter();
    console.log(results)
    return (
        <div>
            <Head>
                <title>{`${router.query.term}- Sky Search`} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
           <Header/>
          <Results results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0"; 
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${CONTACT}&q=${context.query.term}&start=${startIndex}`)
    .then((res)=>res.json());
    return{
        props:{
            results:data
        }
    }
}
