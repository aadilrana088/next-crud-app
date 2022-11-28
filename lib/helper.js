const api_url = 'http://localhost:3000';

console.log(api_url);

export const getUser = async () => {
    // console.log(api_url);
    const response = await fetch(`${api_url}/api/users`);
    const json = response.json;
    return json;
};
