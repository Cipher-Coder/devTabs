# devTabs

## Firefox extension for New Tab geared towards my Dev Work

- I have never made any kind of extension and am still learning. This was my first attempt to build something useful for my browser

This extension uses [Tachyons CSS](https://tachyons.io)

### Github Calendar

The Github calendar was integrated with, [github-calendar.js](https://github.com/IonicaBizau/github-calendar) from IonicaBizau. This was such a simple integration and it is documented very well.

I used the CDN link for this library and then I cut and pasted the CSS instead of loading another link. This also allowed me to change the styles and the original is not set for a dark background. The calendar is even responsive.

To change the calendar to your user-name, just go to the main.js file and the first line of code has the place for your user-name. Just change that to yours and your calendar will start showing up.

```js
new GitHubCalendar(".calendar", "Cipher-Coder", { responsive: true }); //Just change the 'Cipher-Coder' to what ever user you want to show up
```

### Github Feed

I also wanted a way to have easy access to my top Github repositories. So I found a another library appropriately called: [GithubFeed](https://github.com/samwx/GithubFeed) from samwx. This too has really simple integration and is documented very well. The only problem I had was something with the content security policy was blocking the page from hitting the CDN link so I just copied the file off the CDN and put it in my 'js' directory so it was a local file and I had no problems with it after that. To change it so your repo's show up you would have to go into the main.js file and at line 4 you will see my user-name. Just change it to yours and your feed will begin to show up. There are some options there to that you can change.

### Bookmarks

I also wanted some of my most used bookmarks on the page. I made a small column down the side and had to hand code every link as I did not know how to set it up from the GUI to manually add them. Again, I am just learning. I will be looking into this more and once I figure it out I will integrate a way to just have maybe a simple form input that automatically finds the bookmark icon and pins it to the screen. But for now, to change the bookmarks that show up, you will have to manually go into the index.html file and change them by hand.

### Time and Calendar

Pretty self explanatory. Just a clock and calendar. You can change some of the options if you want to. I have to change the weekday to just abbreviations so it did not feed down to the next line as I wanted the font a bit bigger. But you can change that back.

### RSS

This too gave me a bit of trouble and I am going to have to do some more research on it. I wanted to just pull data in from an API and display articles from Product Hunt or what I have, [Dev.to](https://dev.to). But I could not, at this point, figure out how to do that. So instead pulled an RSS feed from [dev.to](https://dev.to) and had to put it in an iframe, which is less than ideal. But it is doing the job for now. Once I get more comfortable with API's, I will change this too. But for now, I used [RSS Dog](https://www.rssdog.com) to take a RSS Feed and package it up into an iframe. This is a free service and was really simple and worked perfect. I styled the iframe to match the page and actually had to get funky with the CSS in order to hide the scroll bar on it but still leave the scrolling functionality as I wanted to be able to scroll all the pertinent articles.

### Weather

Lastly, I put some weather on the page. I used the [Open Weather Map API](https://openweathermap.org). They offer free API keys and I would ask that you get your own so I can continue to use mine. If you live somewhere that used metric or something other than imperial units, you can change how the data comes in by changing the end of the API call from imperial to what ever you may want. It is all commented in the main.js file.

## Here is a screenshot so you can see how it looks:

![screenshot of extension](/img/screenshot.PNG)
