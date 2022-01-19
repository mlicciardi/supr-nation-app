export async function getRendonInt() {
  const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
  return fetch(url).then(res => res.text()).then((data) => {
    return data
  });
}
