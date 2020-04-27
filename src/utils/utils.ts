
import Request from "axios-request-handler";
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function getQuestion1Response() {
  const reviews = new Request("http://localhost:3000/questions/2");
  const test = 'gino';
  console.log(test);
  reviews.poll(200).get((res) => {
    console.log(res.data);
    return res.data;
    // you can cancel polling by returning false
  });
}
