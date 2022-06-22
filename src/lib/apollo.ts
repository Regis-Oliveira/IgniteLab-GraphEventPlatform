import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nsaerk0n2y01xp4vcse325/master',
	cache: new InMemoryCache()
})
