/* Version de test pour essayer de filtrer les users dans le détail des commits
 * zf210721.1210
 *
 * TODO: 
 * filter by author
 * filter by tags
 * 
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const myRequest = new Request('https://api.github.com/repos/epfl-si/wp-ops/commits', 
  {
    method: 'GET',
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      //'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0',
      //'Accept': 'application/vnd.github.cloak-preview+json'
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
);

fetch(myRequest)
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
   //console.log(data);
   //let newBody = '';
   let newBody = '<h1>wp-ops 1210</h1>';
   newBody += '<a href="https://github.com/epfl-si/wp-ops" >https://github.com/epfl-si/wp-ops</a>';
    let authors = [];
    data.forEach((item, i) => {
      if (!authors.includes(item.commit.author.name)) {
        authors.push(item.commit.author.name);
      }
      // console.log('\n');
      //console.log(item);
      // console.log(item.commit.message);
      newBody += '<div id="' + item.sha + '" data-author="' + item.commit.author.name + '">';
      newBody += '<h3>' + item.commit.author.date + '</h3>';
      newBody += '<p>' + item.commit.message + '</p>';
      newBody += '</div>';
    });
    console.log(authors);

    let authorsLinks = ''
    authors.forEach((author) => {
      authorsLinks += '<a href="#" onclick="filterAuthor(this); return false;">' + author + '</a>&nbsp;';
    })
    newBody = authorsLinks + newBody;
    document.body.innerHTML = newBody;
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

function filterAuthor(author) {
  console.log(author.innerHTML);
  let res = document.querySelectorAll("[data-author^='"+author.innerHTML+"']")
  res.forEach((item) => {
    if (item.style.visibility=='hidden') {
      item.style.visibility='visible';
      item.style.display='block';
    } else {
      item.style.visibility='hidden';
      item.style.display='none';
    }
   });
}
