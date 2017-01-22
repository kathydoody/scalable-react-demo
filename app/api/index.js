export function createLink({ topicName, url, description}){
  console.log('post it');
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      url,
      description,
      topicName
    }),
  }).then(response => response.json());
}