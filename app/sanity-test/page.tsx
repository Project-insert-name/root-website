import { getDataTest } from '@/sanity';

export default async function SanityTest() {
    const data = await getDataTest();
    return (
        <div className={ "w-max mx-auto" }>
            <h1>Sanity Test</h1>
            <p>Pet name: { data[0].name }</p>
        </div>
    )
}