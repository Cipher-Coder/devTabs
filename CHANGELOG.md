# Changelog

Any notable changes and version notes will be kept in this file.

## v2.1.6

## Changes

#### Minor fixes

- Fixed console error when there was not a cover_image included with an article. Error would be thrown when JSON value of cover_image field was `null`. Added a simple `if` statement to evaluate and on null its now just `display:none`.

- I fixed some misspellings, and made the '+' icon to add a bookmark switch to '-' when clicked to signal to user to click that button again to get back to the original state.

- Basic refactoring, fixed some commas that should have been semi-colons. Changed some var into let. 

- Changed the font color of the save button on the place you add a single bookmark.

- Added some JSDoc comments to clear errors in Webstorm.

-Fixed chrome.storage.removeItem to just chrome.storage.remove


> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.5

## Changes

#### Minor fixes

- fixed script tags outside body in `index.html` - was throwing error
- Darkened Settings UI slightly to better fit w/Dark Theme of Index Page
- API calls to Dev.to going stale not fetching the latest articles. Changed the query to fetch 'top' articles and after testing it for days, it seems to be doing much better.
- Adjusted CSS for the list of Repo's, so it no longer shows a scrollbar on smaller screens
- Adjusted style on the buttons in the settings to better match overall style

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.4

## Changes

#### Total re-write of github-calendar.js

This release has been centered around a complete re-write of the `githubGraph.js` file. I changed from hitting GitHub in general to `https://github.com/users/username/contributions` API and instead of parsing the entire profile and getting just the contribution info this will in turn decrease the downloaded file size and increase loading time for the calendar since it is just the contribution info loaded. A 20 kb vs 382 kb download difference. I also made sure my proxy has been coded into the lib, so it did not depend on someone else's free tier from App Engine.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.3

## Changes

#### Fixed the URL Proxy I was hitting

The URL Proxy I was using to hit GitHub (in githubGraph.js) and get commit graph details kept going over its limit and interrupting my service. So I created my own Proxy through Google App Engine and am now hitting that and all is working again.

Also, changed className in the Twitter inject script for new Twitter UI. They are still changing their UI so this may only work temporarily. I will continue checking the site to keep up on the new classNames.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.2

## Changes

#### Fixed the [DEV](https://dev.to) box from showing up in the central feed when you switch to another page

After changing the [DEV](https://dev.to) box CSS classes, I realized that if you were to click on another page it would put the box in the main feed. The CSS classes selected as a reference in the DOM were reused on the other page forcing the box into a position it should not have been in. I had to be even more specific and add in more of the classes to have more specificity.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.1

## Changes

#### Fixed Twitter portions of extension after Twitter's UI update

Changed all CSS classes in inject.js

- Adjusted all function calls
- Changed all class names to match Twitter's new ones
- Changed Template literals so everything will work

_Still some work to be done on styling - Just wanted to at least get it working_

Ran autoprefixer on all CSS files

#### Sanitize user input for the individual bookmark add

- DOMPurify lib has been used for the input on the settings page. I made sure the input from the single add bookmark on the main page has been sanitized as well.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.1.0

## Changes

#### Added option to change the Unit of Measure on Weather Display

Had a request to add in functionality to change the weather information display to Metric

- Added option in the Weather options to toggle between Imperial Units for the US and Metric Units for other countries.

- Now there is a toggle switch before getting weather location. The default is Imperial, but you can toggle it to Metric, so you can have the Wind Speed displayed in KPH instead of MPH, and the Temperature will be in Celsius.

- This selection has been stored in 'chrome.storage.local' with all the other options and is just appended onto the end of the API call to Open Weather Map then it will return the info in that unit of measure. Then the browser will check that selection again prior to display and show either MPH of KPH after wind speed.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.0.8

## Changes

#### Bookmarks bleeding into warning on smaller screens

After looking at the extension loaded on a small laptop I noticed that when the bookmarks options are open, they bleed into the warning about tracking at the bottom of the screen

- Shrunk the margin on Options page to try to keep the Warning about deleting bookmarks from bleeding into donate portion.

- On smaller screens the warning under Delete Bookmarks has been mixed into the paragraph on donating.

- I shrunk the margin as well as shortened the message to warn users about deleting the bookmarks.

\*\* This only affected smaller screens otherwise you would not see any difference

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.0.7

## Changes

#### Style Changes

Minor CSS Style changes

- Changed font size and style on the article and repo descriptions

- Bumped padding on the calendar columns

- Added clear function to bookmark input, so it will clear when saved

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.0.5

## Changes

#### Steralization

Mozilla notified me that one of the libs I was using needed steralization or a refactor

- I added purify.js lib and made sure any and all data has been sterilized

- Refactored and fixed calls to innerHTML

  - In the refactor, I changed some of the library's calls to innerHTML, so it is not a carbon copy of the lib

- Completely removed the Content Security Policy - It was not actually needed

&nbsp;

## v2.0.4

## Changes

#### Updated Permissions

Trying to get the [DEV](https://dev.to) feed to show up next to the [Twitter](https://twitter.com) feed. In an attempt to fix it I had added a blanket access policy using wildcard urls. This asked users for access to all browsing data, which I did not need.

- Removed wildcard access to all websites and narrowed the permission only to DEV

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.0.3

## Changes

#### Updated Permissions

The [DEV](https://dev.to) feed is not showing up when on [Twitter](https://twitter.com)

- Updated permissions to include http://&#42;/ and https://&#42;/ - This was causing the DEV news feed on Twitter not to work. Once these permissions have been added in, everything worked again.

> No other libs added or taken away. Only the original library's are being used. The list is at the end of this changelog.

&nbsp;

## v2.0.2

## Firefox Public Release

This is the first version released to the public

---

#### Libraries Used

- [Marked.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js)

  - [Marked.js repo](https://github.com/markedjs/marked)

- [GitHub-calendar.js](https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js)

  - [GitHub-calendar.js repo](https://github.com/IonicaBizau/github-calendar)

- [DOMPurify.js](https://github.com/cure53/DOMPurify)

- [Github-Feed.js](https://github.com/samwx/GithubFeed)
