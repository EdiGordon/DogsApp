// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

fetchCount().then((res) => {
  console.log(res.data);
});