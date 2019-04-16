# devTabs

## Firefox extension for New Tab geared towards my Dev Work

This extension uses [Tachyons CSS](https://tachyons.io)

### Github Calendar

The Github calendar was integrated with, [github-calendar.js](https://github.com/IonicaBizau/github-calendar) from IonicaBizau. This was such a simple integration and it is documented very well.

I used the CDN link for the javascript library and then I cut and pasted the CSS instead of loading another link. This allowed me to change the styles because the original is not set for a dark background. The calendar is even responsive.

To change the calendar to your user-name, just go to the main.js file and the first line of code has the place for your user-name. Just change that to yours and your calendar will start showing up.

```js
new GitHubCalendar(".calendar", "Cipher-Coder", { responsive: true }); //Just change the 'Cipher-Coder' to what ever user you want to show up
```
^^^ This is going to change into a setting when I get the time to switch it over. I am going to add a whole settings page. 

### Github Feed

I also wanted a way to have easy access to my top Github repositories. So I found a another library appropriately called: [GithubFeed](https://github.com/samwx/GithubFeed) from @samwx. This too has a really simple integration and is documented very well. The only problem I had was something with the content security policy was blocking the page from hitting the CDN link so I just copied the file off the CDN and put it in my 'js' directory so it was a local file and after that, I had no problems with it. To change it so your repo's show up you would have to go into the main.js file and at line 4 you will see my user-name 'Cipher-Coder'. Just change it to yours and your feed will begin to show up. There are some other options there that you can change.

### Bookmarks

I also wanted some of my most used bookmarks on the page. I made a small column down the side and had to hand code every link as I did not know how to set it up from the GUI to manually add them. Again, I am just learning. I will be looking into this more, and once I figure it out, I will integrate a way to just have maybe a simple form input that automatically finds the bookmark icon and then adds the bookmark to the screen. But for now, to change the bookmarks that show up, you will have to manually go into the index.html file and change them by hand.

### Time and Calendar

Pretty self explanatory. Just a clock and calendar. You can change some of the options if you want to. I had to change the weekday to just abbreviations so it did not feed down to the next line as I wanted the font a bit bigger. But you can change that back.

### Dev.to

For the [dev.to](https://www.dev.to) news feed, I am just hitting their API with a XMLHttpRequest. Created some elements and put each article in its own 'card' and then adjusted the css so I could get rid of the scroll bar. They don't seem to have API keys or anything and to be honest, I could not find a lot of info on their API. I got most of the info from watching the 'network' tab in the dev tools to find out what API to hit. 

### Weather

Lastly, I put some weather on the page. I used the [Open Weather Map API](https://openweathermap.org). They offer free API keys and I would ask that you get your own so I can continue to use mine. If you live somewhere that used metric or something other than imperial units, you can change how the data comes in by changing the end of the API call from imperial to what ever you may want. It is all commented in the main.js file.

## Here is a screenshot so you can see how it looks:

<p align="center">
  <img src="assets/img/screenshot.png" alt="screenshot" />
</p>
