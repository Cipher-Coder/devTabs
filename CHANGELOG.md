# Changelog

Any noteable changes and version notes will be kept in this file.

## v2.1.0

---

### Changes

#### Added option to change the Unit of Measure on Weather Display

Had a request to add in functionality to change the weather information display to Metric

- Added option in the Weather options to toggle between Imperial Units for the US and Metric Units for other countries.

- Now there is a toggle switch before getting weather location. The default is Imperial but you can toggle it to Metric so you can have the Wind Speed displayed in KPH instead of MPH and the Temperature will be in Celsius.

- This selection is stored in 'chrome.storage.local' with all the other options and is just appended onto the end of the API call to Open Weather Map then it will return the info in that unit of measure. Then the browser will check that selection again prior to display and show either MPH of KPH after wind speed.

&nbsp;

## v2.0.8

---

### Changes

#### Bookmarks bleeding into warning on smaller screens

After looking at the extension loaded on a small laptop I noticed that when the bookmarks options are open, they bleed into the warning about tracking on the bottom of the screen

- Shrunk the margin on Options page to try and keep the Warning about deleting bookmarks from bleeding into the donate portion.

- On smaller screens the warning under Delete Bookmarks was mixed into the paragraph on donating.

- I shrunk the margin as well as shortened the message to warn users about deleting the bookmarks.

\*\* This only effected smaller screens otherwise you would not see any difference

&nbsp;

## v2.0.7

---

### Changes

#### Style Changes

Minor CSS Style changes

- Changed font size and style on the article and repo descriptions

- Bumped padding on the calendar columns

- Added clear function to bookmark input so it will clear when saved

&nbsp;

## v2.0.5

---

### Changes

#### Steralization

Mozilla notified me that one of the libs I was using needed steralization or a refactor

- I added the purify.js lib and made sure any and all data was steralized

- Refactored and fixed some of the calls to innerHTML

- Completely removed the Content Security Policy - It was not actually needed

&nbsp;

## v2.0.4

---

### Changes

#### Updated Permissions

Trying to get the [DEV](https://dev.to) feed to show up next to the [Twitter](https://twitter.com) feed. In an attempt to fix it I had added a blanket access policy using wildcard urls. This asked users for access to all browsing data, which I did not need.

- Removed wildcard access to all websites and narrowed to permission to only DEV

&nbsp;

## v2.0.3

---

### Changes

#### Updated Permissions

The [DEV](https://dev.to) feed is not showing up when on [Twitter](https://twitter.com)

- Updated permissions to include http://&#42;/ and https://&#42;/ - This was causing the DEV news feed on Twitter not to work. Once these permissions were added in, everything worked again.

&nbsp;

## v2.0.2

---

## Firefox Public Release

This is the first version released to the public
