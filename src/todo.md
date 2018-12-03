## README _needs to be made specific to your app, include link to back-end, tell us what the app does etc..._

- [ ] provides general info about app
- [ ] clear instructions on how to run locally
- [ ] link to API & back end repo
- [ ] specifies minimum versions
- [x] `package.json` includes dependencies
- [x] deployed

## ux

- [x] Basic styling added
- [x] Responsive design _need some media quieres!_
- [ ] Items aligned _post article / comment overflows from its containing element_
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console _If avatar link doest work, we get console error and broken image_
- [x] Login / Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

- [x] Some way to log in (should be very obvious to hiring partners) _need to make clear who I can login as, when i refresh after login out, no idea what the user names are unless i look at article / comment authors_
- [x] Some indication of who is logged in
- [x] A way to log out
- [x] Serves all articles / top articles
- [x] Can vote on articles
- [x] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [ ] Individual articles are served with comments - _only for articles that already have comments_
- [x] Can vote on comments
- [ ] New comments are persistent _need some indication that we need to be logged in to post a comment or article. should also clear input box once posted comment or article_
- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [ ] Can post an article _add button to homepage to psot an article also?_
- [x] User page
- [ ] Users page - _could page with lsit of users and their avatars_

NICE SEARCH FUNCTIONALITY, _would be nice to clear the input box when we clear the search_

## Error Handling

- [x] Error pages
- [x] All errors handled
  - Navigation: (Bad url / Bad topic slug in url / Bad article id in url / Bad username in url) - maybe dont show article ID in the error page, no need ot be as specific
  - Login: (Bad username / No username)
  - Post comment: (No text in comment body / Can you post without logging in?)
  - Post article: (No text in article body / No title / No topic selected / Can you post without logging in?) _get a 500 error, should be a 400!. Or FE validation to spevent submit (make the html input `required`)_
  - [ ] _error handling `navigate` should happen in our components. we can fix this by ahving our errorHandler function return the navigate object for navigate to be called with in the components themselves (otherwise we have taken react logic away from react)_

## Code

- [ ] Well named components - _delete create-react-app stuff please. e.g. app.test.js - not clear what `UserArticlesOrComments` might be from first glance - would be better as two separate components_
- [x] Functional components used where possible
- [x] `node_modules` git ignored
- [x] Components reused where possible (`Articles` / `Voter`...)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Uses object destructuring where possible - _e.g. `const {user} = this.state`_
- [ ] No `console.log`s / comments _(found one console.log in NvaBar and the odd comment dotted around)_
- [ ] could split up large components such as `groupOfArticles`
- [ ] _DO NOT USE PROPS TO INITIALISE STATE PLEASE (e.g. in VOTER)_
- [ ] _api functions could/should return data.comments/articles/article_ - _`url` argument gives too much logic to where the functions are called, what if our api changes_

## Stuff to do if you have time!

- [ ] Add integration tests with `cypress`
- [ ] Make sure any code that can be extracted from components is extracted and tested with `Jest`
- [ ] Add logged in user to session / local storage
- [ ] Use `aXe` extension to check for a11y issues
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Add sorting functionality (make sure sort is not in render though)
- [ ] Add search functionality
