import './lib';
import ClientComp from './components/ClientComp';
import { ENDPOINT } from '@/constants';
import ArticleList from '@/components/articleList';

export default async function SSR() {

    const article = await fetch(ENDPOINT).then(res => res.json()); 
    return (
        <>
            <div>SSR Page</div>
            <ClientComp />
            <ArticleList list={article} basePath="/010_SSR"/>
        </>
    )
}