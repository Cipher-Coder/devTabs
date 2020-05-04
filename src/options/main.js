const feedSettings = document.getElementById('github-feed');
const bookmarkSettings = document.getElementById('bookmark-option');
const calSettings = document.getElementById('github-cal');
const weatherSettings = document.getElementById('weatherOpt');

const gitFeed = document.getElementById('git-feed');
const bookmarkOption = document.getElementById('bookmark-opt');
const githubOption = document.getElementById('githubCal');
const weatherOption = document.getElementById('weatherInfo');

// Toggle which settings are shown
gitFeed.addEventListener('click', feedDisplay);
function feedDisplay() {
  if (feedSettings.style.display === 'none') {
    feedSettings.style.display = 'block';
    bookmarkSettings.style.display = 'none';
    calSettings.style.display = 'none';
    weatherSettings.style.display = 'none';
  } else {
    feedSettings.style.display = 'none';
  }
}

bookmarkOption.addEventListener('click', bookmarkDisplay);
function bookmarkDisplay() {
  if (bookmarkSettings.style.display === 'none') {
    bookmarkSettings.style.display = 'block';
    calSettings.style.display = 'none';
    feedSettings.style.display = 'none';
    weatherSettings.style.display = 'none';
  } else {
    bookmarkSettings.style.display = 'none';
  }
}

githubOption.addEventListener('click', calendarDisplay);
function calendarDisplay() {
  if (calSettings.style.display === 'none') {
    calSettings.style.display = 'block';
    bookmarkSettings.style.display = 'none';
    feedSettings.style.display = 'none';
    weatherSettings.style.display = 'none';
  } else {
    calSettings.style.display = 'none';
  }
}

weatherOption.addEventListener('click', weatherDisplay);
function weatherDisplay() {
  if (weatherSettings.style.display === 'none') {
    weatherSettings.style.display = 'block';
    calSettings.style.display = 'none';
    bookmarkSettings.style.display = 'none';
    feedSettings.style.display = 'none';
  } else {
    weatherSettings.style.display = 'none';
  }
}

// Get location for weather

document.getElementById('submitWeather').addEventListener('click', () => {
  weatherLocation();
  getUnitOfMeasure();
});

function weatherLocation() {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    // Set location in local storage
    chrome.storage.local.set(
      { userLat: crd.latitude, userLong: crd.longitude },
      function () {
        console.log('Location Saved!');
      }
    );
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

function getUnitOfMeasure() {
  let isChecked = document.getElementById('myonoffswitch').checked;
  if (isChecked === false) {
    isChecked = 'metric';
  } else {
    isChecked = 'imperial';
  }
  chrome.storage.local.set({ unitOfMeasure: isChecked }, () => {
    console.log('Unit of Measure: ' + isChecked);
  });
}

// Get Github username for feed

document
  .getElementById('submitgituser')
  .addEventListener('click', submitGitUser);
function submitGitUser() {
  let user1 = document.getElementById('gitUser').value;

  if (!user1) {
    console.log('Please submit Github Username!');
    return;
  }
  chrome.storage.local.set({ userGit: user1 }, function () {
    console.log('Setting Saved');
  });
  clearForm();
}

function clearForm() {
  document.getElementById('gitUser').value = '';
  document.getElementById('gitCalUser').value = '';
}

// Get user defined bookmarks

document
  .getElementById('submitbookmark')
  .addEventListener('click', saveBookmarks);
function saveBookmarks() {
  let userBookmarks = [];
  userBookmarks = document.getElementById('bookmarkForm').value;

  let mytempBook = DOMPurify.sanitize(userBookmarks);

  let tempBook = marked.inlineLexer(mytempBook, []).split(',');

  chrome.storage.local.set({ userBookmark: tempBook }, function () {
    console.log('Bookmarks Logged');
  });
  clearInput();
}

function clearInput() {
  document.getElementById('bookmarkForm').value = '';
}
// Set Github calendar username

document.getElementById('submitCalUser').addEventListener('click', function () {
  let calendarName = document.getElementById('gitCalUser').value;
  if (!calendarName) {
    console.log('Please input username');
    return;
  }
  chrome.storage.local.set({ gitCalName: calendarName }, function () {
    console.log('Setting Saved');
  });
  clearForm();
});

document
  .getElementById('deleteBookmark')
  .addEventListener('click', function () {
    let confirmationCheck = confirm(
      'Are you sure you want to delete your Dev Tab Bookmarks. (This will not effect your browser bookmarks)'
    );
    if (confirmationCheck === true) {
      chrome.storage.local.remove('userBookmark', function () {
        alert('Bookmarks Deleted!');
      });
    } else {
      alert('Action Cancelled');
    }
  });

document.getElementById('backHome').addEventListener('click', function () {
  window.history.back();
});
