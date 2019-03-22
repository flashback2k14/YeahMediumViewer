(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const { searchParams } = new URL(window.location);
    const textAsUrl = searchParams.get("text");
    const url = searchParams.get("url");

    const txtTitle = document.querySelector("#txtTitle");
    const txtResult = document.querySelector("#txtResult");

    // if (textAsUrl) {
    //   window
    //     .fetch(textAsUrl)
    //     .then(res => {
    //       if (res.ok) {
    //         return res.text();
    //       } else {
    //         console.error(
    //           "The fetch fails, and the response code is " + res.status
    //         );
    //       }
    //     })
    //     .then(text => {
    //       const parser = new DOMParser();
    //       const doc = parser.parseFromString(text, "text/html");
    //       const blog =
    //         doc.querySelector(".article-post-wrapper") ||
    //         doc.querySelector("#content");
    //       txtTitle.innerText =
    //         doc.querySelector(".full-bleed-data h2") ||
    //         doc.querySelector(".container .text-center h1");
    //       const title = txtTitle.innerText;
    //       const turndownService = new window.TurndownService();
    //       if (title != null) {
    //         txtResult.innerText =
    //           "# " + title + "\n" + turndownService.turndown(blog);
    //       } else {
    //         txtResult.innerText = turndownService.turndown(blog);
    //       }
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }

    // if (url) {
    // }
  });
})();
